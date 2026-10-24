const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");

const sites = [
  ["che-bagels", "https://chebagels.vercel.app/"],
  ["santa-maria", "https://santamaria-indol.vercel.app/"],
  ["limpiarte", "https://limpiarteparaguay.vercel.app/"],
  ["vitalis", "https://vitaliserviciomedico.vercel.app/"],
  ["relato-estrategico", "https://relatoestrategico.vercel.app/"],
  ["corpicia", "https://www.corpicia.com/"],
  ["nathaly-chamorro", "https://nathalychamorro.vercel.app/"],
  ["arquitecta-diana", "https://arquitectadiana.vercel.app/"],
  ["ecotritura-paraguay", "https://ecotrituraparaguay.vercel.app/"],
  ["ruavera", "https://ruavera.vercel.app/"],
  ["jolie-jewelry", "https://joliejewelry.vercel.app/"],
  ["haunted-psi", "https://haunted-psi.vercel.app/"],
  ["portal-verde", "https://portalverdepy.vercel.app/"],
  ["todo-servicios", "https://todoserviciospy.vercel.app/"],
  ["marmoleria-pietra", "https://marmoleriapietra.com/"],
  ["apf", "https://app-apf.vercel.app/"],
  ["equantum", "https://www.equantum.com.py/"],
  ["campamento-cbg", "https://campamentocbg.vercel.app/"],
  ["inyou", "https://chocolate-squirrel-724944.hostingersite.com/"],
  ["inverfin", "https://inverfin.com.py/"],
  ["fortis", "https://fortis.com.py/"],
  ["cooperativa-vida-luz", "https://cooperativavidaluzcompy.vercel.app/"],
  ["portal-cooperativo", "https://asoapp.vercel.app/"]
];
const mobile = new Set(["vitalis", "apf"]);
const output = path.join(process.cwd(), "public/screenshots");
fs.mkdirSync(output, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  let captured = 0;
  for (const [slug, url] of sites) {
    const isMobile = mobile.has(slug);
    const context = await browser.newContext({
      viewport: isMobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      isMobile,
      hasTouch: isMobile,
      reducedMotion: "reduce"
    });
    const page = await context.newPage();
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.waitForTimeout(4500);
      const text = (await page.locator("body").innerText().catch(() => "")).slice(0, 1600).toLowerCase();
      const title = (await page.title()).toLowerCase();
      const bad = ["this page doesn't exist", "404: deployment_not_found", "deployment not found", "application error", "site not found", "authentication required", "vercel authentication"];
      if (!response || response.status() >= 400 || bad.some(x => text.includes(x) || title.includes(x))) {
        console.log("OMITIDA", slug, response?.status(), title);
      } else {
        await page.screenshot({ path: path.join(output, slug + ".png"), animations: "disabled" });
        console.log("OK", slug);
        captured++;
      }
    } catch (err) {
      console.log("ERROR", slug, String(err).slice(0, 200));
    } finally {
      await context.close();
    }
  }
  await browser.close();
  console.log("Capturas reales guardadas:", captured, "/", sites.length);
  if (!captured) process.exitCode = 1;
})().catch(e => { console.error(e); process.exitCode = 1; });
