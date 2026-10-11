import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

process.env.NODE_ENV = "production";
const mode = "production";
const origin = "https://nascimentoinstalacoes.com.br";
const outlet = "<!--prerender-outlet-->";

// Both builds use the same asset naming, so the generated HTML and client agree.
await build({ mode });
try {
  await build({
    mode,
    build: {
      ssr: "src/entry-server.tsx",
      outDir: "dist-ssr",
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
    },
  });
  const { render, contact } = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.mjs")).href);
  const template = await readFile("dist/index.html", "utf8");
  if (!template.includes(outlet)) throw new Error("Missing prerender outlet in index.html");

  // Only confirmed information: no invented street address, reviews or hours.
  const business = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${origin}/#business`,
    name: "Nascimento Instalações Elétricas",
    url: `${origin}/`,
    logo: `${origin}/social-logo.png`,
    telephone: `+${contact.phone}`,
    email: contact.email,
    areaServed: { "@type": "City", name: "Bauru", containedInPlace: { "@type": "State", name: "São Paulo" } },
    sameAs: [`https://www.instagram.com/${contact.instagram}`],
    description: "Instalações e manutenção elétrica residencial, predial e comercial em Bauru e região.",
  };
  const json = JSON.stringify(business).replace(/</g, "\\u003c");
  const home = template.replace(outlet, render("/"))
    .replace("</head>", `    <script type="application/ld+json">${json}</script>\n  </head>`);
  await writeFile("dist/index.html", home);

  // A real static 404 disables Pages' default SPA fallback for nonexistent URLs.
  const notFound = template.replace(outlet, render("/pagina-inexistente"))
    .replace(/<title>[^<]*<\/title>/, "<title>Página não encontrada | Nascimento Instalações</title>")
    .replace(/\s*<meta (?:property="og:[^"]+"|name="twitter:[^"]+"|name="description")[^>]*>/g, "")
    .replace(/\s*<link rel="canonical"[^>]*>/, "")
    .replace(/\s*<meta property="og:url"[^>]*>/, "")
    .replace("</head>", '    <meta name="robots" content="noindex" />\n  </head>');
  await writeFile("dist/404.html", notFound);
  await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${origin}/</loc></url>\n</urlset>\n`);
  console.log("HTML pré-renderizado, dados do negócio, sitemap e página 404 gerados em dist/.");
} finally {
  await rm("dist-ssr", { recursive: true, force: true });
}
