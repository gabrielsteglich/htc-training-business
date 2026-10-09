import assert from "node:assert/strict";
import { Readable } from "node:stream";

const baseUrl = process.env.SMOKE_BASE_URL || "http://127.0.0.1:3000";
const routes = [
    "/",
    "/about",
    "/services",
    "/training",
    "/corporate",
    "/contact",
    "/instructors",
    "/lp-crm",
    "/lp-dgr",
    "/lp-avsec",
    "/privacy",
    "/terms",
    "/robots.txt",
    "/sitemap.xml",
];

for (const route of routes) {
    const response = await fetch(`${baseUrl}${route}`);
    assert.equal(response.status, 200, `${route} retornou HTTP ${response.status}`);
}

const invalidContact = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "", email: "", message: "" }),
});

assert.equal(invalidContact.status, 400, "A API deve rejeitar um contato inválido");

const oversizedContact = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: Readable.from([JSON.stringify({ message: "x".repeat(20_000) })]),
    duplex: "half",
});
assert.equal(oversizedContact.status, 413, "A API deve limitar os bytes mesmo sem Content-Length");

const wrongContentType = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: "{}",
});
assert.equal(wrongContentType.status, 415, "A API deve exigir JSON");

const notFound = await fetch(`${baseUrl}/rota-inexistente`);
assert.equal(notFound.status, 404, "Uma rota inexistente deve retornar HTTP 404");

console.log(`Smoke test concluído: ${routes.length} rotas, API e página 404.`);
