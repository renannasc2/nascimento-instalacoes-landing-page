import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";

const html = await readFile("dist/index.html", "utf8");
const missing = await readFile("dist/404.html", "utf8");
assert.match(html, /<html lang="pt-BR">/);
assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, "Home must have one h1");
assert.match(html, /<h1[^>]*>Eletricista em Bauru/);
assert.match(html, /Iluminação e Ventiladores/);
assert.match(html, /Isaias Nascimento/);
assert.match(html, /oito anos/);
assert.doesNotMatch(html, /Beto|Nivaldo|Nilvado/);
assert.match(html, /vidraçaria/);
assert.match(html, /escritório de contabilidade/);
assert.doesNotMatch(html, /colheita de café|pintor, pedreiro e marceneiro/);
assert.match(html, /href="tel:\+5514997938562"/);
assert.match(html, /href="https:\/\/wa\.me\/5514997938562\?text=/);
assert.match(html, /href="mailto:isaias_nascimento@hotmail.com"/);
assert.match(html, /href="https:\/\/instagram.com\/nascimentoinstalacoes_bauru"/);
assert.match(html, /<link rel="canonical" href="https:\/\/nascimentoinstalacoes.com.br\/"/);
assert.doesNotMatch(html, /prerender-outlet|lovable\.dev|name="robots" content="noindex"/);

// Ensure prerendered assets resolve on a static host, not just in Vite dev mode.
for (const page of [html, missing]) {
  for (const [, url] of page.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)) {
    if (url === "/") continue;
    await access(path.join("dist", url));
  }
}
const business = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(business["@type"], "Electrician");
assert.equal(business.telephone, "+5514997938562");
assert.equal(business.areaServed.name, "Bauru");
assert.equal(business.url, "https://nascimentoinstalacoes.com.br/");
assert.equal(business.email, "isaias_nascimento@hotmail.com");
assert.equal(business.sameAs[0], "https://www.instagram.com/nascimentoinstalacoes_bauru");
assert.match(missing, /Esta página não foi encontrada/);
assert.match(missing, /name="robots" content="noindex"/);
assert.doesNotMatch(missing, /rel="canonical"|application\/ld\+json|Eletricista em Bauru/);
const sitemap = await readFile("dist/sitemap.xml", "utf8");
assert.equal((sitemap.match(/<loc>/g) ?? []).length, 1);
assert.match(sitemap, /<loc>https:\/\/nascimentoinstalacoes.com.br\/<\/loc>/);
assert.match(await readFile("dist/robots.txt", "utf8"), /Sitemap: https:\/\/nascimentoinstalacoes.com.br\/sitemap.xml/);
const redirects = await readFile("dist/_redirects", "utf8");
for (const host of ["www.nascimentoinstalacoes.com.br", "eletricistabauru24horas.com.br", "www.eletricistabauru24horas.com.br"]) {
  assert.ok(redirects.includes(`https://${host}/* https://nascimentoinstalacoes.com.br/:splat 301`));
}
console.log("SEO estático: conteúdo, títulos, contatos, assets, schema, sitemap, 404 e redirecionamentos verificados.");
