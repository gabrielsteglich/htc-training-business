import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { test } from "node:test";
import {
    CONTACT_BODY_LIMIT,
    contactLimits,
    consumeContactLimits,
    readContactBody,
} from "../src/lib/contact-security.ts";

function request(body, headers = { "content-type": "application/json" }) {
    return new Request("http://localhost/api/contact", { method: "POST", headers, body });
}

test("preserves real UTF-8 across chunk boundaries", async () => {
    const bytes = new TextEncoder().encode(JSON.stringify({ message: "Aviação e segurança" }));
    const stream = new ReadableStream({
        start(controller) {
            for (const byte of bytes) controller.enqueue(Uint8Array.of(byte));
            controller.close();
        },
    });
    const input = new Request("http://localhost/api/contact", {
        method: "POST", headers: { "content-type": "application/json" }, body: stream, duplex: "half",
    });
    assert.deepEqual(await readContactBody(input), { message: "Aviação e segurança" });
});

test("limits actual bytes without Content-Length", async () => {
    await assert.rejects(readContactBody(request(JSON.stringify({ value: "x".repeat(CONTACT_BODY_LIMIT) }))),
        error => error.status === 413);
});

test("does not trust a false low Content-Length", async () => {
    await assert.rejects(readContactBody(request(JSON.stringify({ value: "x".repeat(CONTACT_BODY_LIMIT) }),
        { "content-type": "application/json", "content-length": "1" })), error => error.status === 413);
});

test("accepts the exact byte limit and rejects multi-byte overflow", async () => {
    assert.equal(await readContactBody(request(`"${"x".repeat(CONTACT_BODY_LIMIT - 2)}"`)),
        "x".repeat(CONTACT_BODY_LIMIT - 2));
    await assert.rejects(readContactBody(request(`"${"á".repeat(CONTACT_BODY_LIMIT / 2)}"`)),
        error => error.status === 413);
});

test("rejects malformed JSON, unsupported media types and invalid UTF-8", async () => {
    await assert.rejects(readContactBody(request("{")), error => error.status === 400);
    await assert.rejects(readContactBody(request("{}", { "content-type": "text/plain" })),
        error => error.status === 415);
    await assert.rejects(readContactBody(request(Uint8Array.of(0xff))), error => error.status === 400);
});

test("ignores spoofed forwarding headers by default and normalizes e-mails", () => {
    const first = contactLimits("  USER@example.com ", new Headers({ "x-forwarded-for": "1.1.1.1" }));
    const second = contactLimits("user@example.com", new Headers({ "x-forwarded-for": "2.2.2.2" }));
    assert.deepEqual(first, second);
    assert.equal(first.length, 2);
    assert.ok(!first[1].key.includes("user@example.com"));
});

test("only explicitly configured, single valid proxy IPs are accepted", () => {
    assert.equal(contactLimits("user@example.com", new Headers({ "x-real-ip": "127.0.0.1" }), "x-real-ip").length, 3);
    for (const headers of [new Headers(), new Headers({ "x-real-ip": "not-an-ip" }),
        new Headers({ "x-real-ip": "1.1.1.1, 2.2.2.2" })]) {
        assert.throws(() => contactLimits("user@example.com", headers, "x-real-ip"));
    }
    assert.throws(() => contactLimits("user@example.com", new Headers(), "arbitrary-header"));
});

test("converts shared-store denial to Retry-After and rejects unexpected replies", async () => {
    const limits = contactLimits("user@example.com", new Headers());
    assert.deepEqual(await consumeContactLimits({ eval: async () => 1501 }, limits),
        { allowed: false, retryAfter: 2 });
    assert.equal((await consumeContactLimits({ eval: async () => 0 }, limits)).allowed, true);
    for (const value of [null, "0", -1, NaN]) {
        await assert.rejects(consumeContactLimits({ eval: async () => value }, limits));
    }
    await assert.rejects(consumeContactLimits({ eval: async () => { throw new Error("offline"); } }, limits));
});

test("Redis quotas are atomic across independent clients", {
    skip: !process.env.TEST_REDIS_URL,
}, async () => {
    const { createClient } = await import("redis");
    const clients = [createClient({ url: process.env.TEST_REDIS_URL }), createClient({ url: process.env.TEST_REDIS_URL })];
    for (const client of clients) client.on("error", () => {});
    const prefix = `{htc-contact-test:${randomUUID()}}`;
    const limits = [{ key: `${prefix}:global`, maximum: 10 }, { key: `${prefix}:email`, maximum: 5 }];
    try {
        await Promise.all(clients.map(client => client.connect()));
        const results = await Promise.all(Array.from({ length: 20 }, (_, i) => consumeContactLimits(clients[i % 2], limits)));
        assert.equal(results.filter(result => result.allowed).length, 5);
        assert.equal(Number(await clients[0].get(limits[0].key)), 5);
        assert.ok(await clients[0].pTTL(limits[0].key) > 0);
    } finally {
        if (clients[0].isReady) await clients[0].del(limits.map(limit => limit.key));
        await Promise.all(clients.map(client => client.isOpen ? client.close() : undefined));
    }
});
