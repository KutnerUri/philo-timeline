// Check the extracts next to each cached article:
//   bun scripts/check-core.ts <code>
// For .cache/wiki/<code>/<kind>--<id>/:
//   core-paragraph.md must appear verbatim in article.txt (whitespace aside);
//   core-slim.md, if present, must be core-paragraph.md with words omitted only (same words, same order).
import { readdirSync, existsSync, readFileSync } from 'node:fs';

const lang = process.argv[2];
if (!lang) { console.log('usage: bun scripts/check-core.ts <code>'); process.exit(1); }
const dir = `${import.meta.dir}/../.cache/wiki/${lang}`;

const flat = (s: string) => s.replace(/\s+/g, ' ').trim();
const words = (s: string) =>
  (s.replace(/[–—]/g, ' ').match(/[\p{L}\p{N}״׳'"-]+/gu) ?? []).map((w) => w.replace(/^["'״׳-]+|["'״׳-]+$/g, ''));
const omissionsOnly = (small: string[], big: string[]) => {
  let i = 0;
  for (const w of small) {
    while (i < big.length && big[i] !== w) i++;
    if (i++ >= big.length) return w; // first word that isn't in order
  }
  return null;
};

let ok = 0, todo = 0;
const bad: string[] = [];
for (const entry of readdirSync(dir).filter((d) => existsSync(`${dir}/${d}/article.txt`)).sort()) {
  const read = (f: string) => (existsSync(`${dir}/${entry}/${f}`) ? readFileSync(`${dir}/${entry}/${f}`, 'utf8').trim() : null);
  const article = read('article.txt')!, para = read('core-paragraph.md'), slim = read('core-slim.md');
  if (!para) { todo++; continue; }
  if (!flat(article).includes(flat(para))) { bad.push(`${entry}: core-paragraph.md is not verbatim from the article`); continue; }
  if (slim) {
    const off = omissionsOnly(words(slim), words(para));
    if (off) { bad.push(`${entry}: core-slim.md changes the text (at "${off}")`); continue; }
  }
  ok++;
}
console.log(`${lang}: ${ok} ok, ${bad.length} failing, ${todo} without core-paragraph.md`);
for (const b of bad) console.log(`  ✗ ${b}`);
process.exit(bad.length ? 1 : 0);
