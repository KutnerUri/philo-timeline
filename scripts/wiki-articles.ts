// Download full Wikipedia articles, as plain text, into a local cache (not committed):
//   bun scripts/wiki-articles.ts <code>   → .cache/wiki/<code>/<kind>--<id>/article.txt
// Uses the article links in src/i18n/wiki/<code>.json; files already downloaded are kept.
// The core-paragraph.md / core-slim.md files next to each article come from the extraction step.
const lang = process.argv[2];
if (!lang) { console.log('usage: bun scripts/wiki-articles.ts <code>'); process.exit(1); }

const root = `${import.meta.dir}/..`;
const wiki = await Bun.file(`${root}/src/i18n/wiki/${lang}.json`).json() as Record<string, Record<string, { url: string }>>;
const UA = { 'User-Agent': 'philosophers-timeline-build/1.0 (static site build script)' };
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
// Reference sections at the end of an article aren't useful here.
const tail = /\n==\s*(ראו גם|לקריאה נוספת|קישורים חיצוניים|הערות שוליים|See also|References|Further reading|External links|Notes)\s*==[\s\S]*$/;

let fetched = 0, kept = 0, failed: string[] = [];
for (const [kind, entries] of Object.entries(wiki)) {
  for (const [id, { url }] of Object.entries(entries)) {
    const file = Bun.file(`${root}/.cache/wiki/${lang}/${kind}--${id}/article.txt`);
    if (await file.exists()) { kept++; continue; }
    const title = decodeURIComponent(url.split('/wiki/')[1]);
    const api = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&redirects=1&format=json&titles=${encodeURIComponent(title)}`;
    let text = '';
    for (let i = 0; i < 5 && !text; i++) {
      await sleep(i ? 1500 * 2 ** i : 150);
      const r = await fetch(api, { headers: UA }).catch(() => null);
      if (r?.ok) text = (Object.values((await r.json()).query.pages)[0] as { extract?: string }).extract ?? '';
    }
    if (!text) { failed.push(`${kind}--${id}`); continue; }
    await Bun.write(file, text.replace(tail, '').trim() + '\n');
    fetched++;
  }
}
console.log(`${lang}: ${fetched} downloaded, ${kept} already cached${failed.length ? `, failed: ${failed.join(', ')}` : ''}`);
