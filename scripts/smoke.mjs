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
    "/cardapio",
    "/robots.txt",
    "/sitemap.xml",
];

for (const route of routes) {
    const response = await fetch(`${baseUrl}${route}`);
    assert.equal(response.status, 200, `${route} retornou HTTP ${response.status}`);
}

const spanishPages = [
    ["/", "Inicio"],
    ["/about", "Sobre HTC Training"],
    ["/services", "Portafolio de servicios"],
    ["/training", "Programas de capacitación"],
    ["/corporate", "Soluciones corporativas"],
    ["/contact", "Contáctenos"],
    ["/instructors", "Nuestro equipo de instructores"],
    ["/lp-crm", "CRM corporativo de alto rendimiento"],
    ["/lp-dgr", "DGR: transporte aéreo seguro y eficiente"],
    ["/lp-avsec", "AVSEC: seguridad contra actos ilícitos"],
    ["/privacy", "Política de privacidad"],
    ["/terms", "Términos del servicio"],
    ["/cardapio", "HTC Diner — Menú"],
];

for (const [route, title] of spanishPages) {
    const response = await fetch(`${baseUrl}${route}`, { headers: { Cookie: "htc-language=es" } });
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.ok(html.includes('<html lang="es"'), `Idioma espanhol ausente em ${route}`);
    assert.ok(html.includes(`<title>${title} | HTC Training</title>`), `Título espanhol ausente em ${route}`);
}

const englishHome = await fetch(baseUrl, { headers: { Cookie: "htc-language=en" } });
const englishHtml = await englishHome.text();
assert.ok(englishHtml.includes('<html lang="en-US"'));
assert.ok(englishHtml.includes('<title>Home | HTC Training</title>'));

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

console.log(`Smoke test concluído: ${routes.length} rotas, ${spanishPages.length} páginas em espanhol, inglês, API e página 404.`);
