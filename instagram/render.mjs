// ══════════════════════════════════════════════════════════════════════
// Dr. Andrés León — exporta piezas HTML a PNG del tamaño exacto de Instagram.
//
//   node instagram/render.mjs <carpeta-o-archivo> [...más]
//
// · Cada .html se exporta a un .png con el mismo nombre, al lado.
// · Tamaño: 1080×1350 (feed) o 1080×1920 si el <body> tiene la clase "story".
// · Las rutas relativas (base.css, ../../referencias/…) se resuelven SIEMPRE
//   desde instagram/plantillas/, así una pieza copiada a cualquier carpeta
//   funciona sin tocar sus rutas.
// ══════════════════════════════════════════════════════════════════════
import { chromium } from "playwright";
import { readFileSync, writeFileSync, unlinkSync, statSync, readdirSync } from "node:fs";
import { join, dirname, resolve, basename } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const plantillas = join(aqui, "plantillas");

const entradas = process.argv.slice(2);
if (!entradas.length) {
  console.error("Uso: node instagram/render.mjs <carpeta-o-archivo.html> [...]");
  process.exit(1);
}

const archivos = entradas.flatMap((e) => {
  const p = resolve(e);
  if (statSync(p).isDirectory()) {
    return readdirSync(p).filter((f) => f.endsWith(".html")).sort().map((f) => join(p, f));
  }
  return [p];
});

const navegador = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const pagina = await navegador.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
const errores = [];
pagina.on("pageerror", (e) => errores.push(e.message));

for (const archivo of archivos) {
  const html = readFileSync(archivo, "utf8");
  const story = /<body[^>]*class="[^"]*\bstory\b/.test(html);
  await pagina.setViewportSize({ width: 1080, height: story ? 1920 : 1350 });

  // marcadores sin resolver ([[DATO]]) o contenido de relleno: la pieza NO se exporta
  const pend = html.match(/\[\[[^\]]+\]\]/g);
  if (pend) { console.error(`✗ ${basename(archivo)}: datos pendientes ${[...new Set(pend)].join(", ")} (ver marca/pendientes.md)`); errores.push(`${basename(archivo)} tiene marcadores sin resolver`); continue; }

  // copia temporal dentro de plantillas/ para que las rutas relativas resuelvan
  const temporal = join(plantillas, `.render-${process.pid}-${basename(archivo)}`);
  writeFileSync(temporal, html);
  try {
    await pagina.goto(pathToFileURL(temporal).href, { waitUntil: "networkidle" });
    await pagina.evaluate(() => document.fonts.ready);
    const fuente = await pagina.evaluate(() => document.fonts.check('800 40px "Plus Jakarta Sans"'));
    if (!fuente) console.warn(`⚠ ${basename(archivo)}: Plus Jakarta Sans no cargó (¿sin internet?)`);
    const salida = archivo.replace(/\.html$/, ".png");
    await pagina.screenshot({ path: salida, clip: { x: 0, y: 0, width: 1080, height: story ? 1920 : 1350 } });
    console.log(`✓ ${salida}`);
  } finally {
    unlinkSync(temporal);
  }
}

await navegador.close();
if (errores.length) { console.error(errores.join("\n")); process.exit(1); }
