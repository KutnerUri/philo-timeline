// Check the extracts next to each cached article:
//   bun scripts/check-core.ts <code>
// For .cache/wiki/<code>/<kind>--<id>/:
//   core-paragraph.md must appear verbatim in article.txt (whitespace aside);
//   core-slim.md, if present, must be core-paragraph.md with words omitted only (same words, same order).
// The same checks apply to optional context-paragraph.md / context-slim.md extracts.
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

function checkExtracts(prefix: 'core' | 'context') {
  let ok = 0, todo = 0;
  const bad: string[] = [];
  const paraFile = `${prefix}-paragraph.md`, slimFile = `${prefix}-slim.md`;
  for (const entry of readdirSync(dir).filter((d) => existsSync(`${dir}/${d}/article.txt`)).sort()) {
    const read = (f: string) => (existsSync(`${dir}/${entry}/${f}`) ? readFileSync(`${dir}/${entry}/${f}`, 'utf8').trim() : null);
    const article = read('article.txt')!, para = read(paraFile), slim = read(slimFile);
    if (!para) {
      if (existsSync(`${dir}/${entry}/${slimFile}`)) bad.push(`${entry}: ${slimFile} has no source ${paraFile}`);
      else todo++;
      continue;
    }
    if (!flat(article).includes(flat(para))) { bad.push(`${entry}: ${paraFile} is not verbatim from the article`); continue; }
    if (slim !== null) {
      if (!slim) { bad.push(`${entry}: ${slimFile} is empty`); continue; }
      const off = omissionsOnly(words(slim), words(para));
      if (off) { bad.push(`${entry}: ${slimFile} changes the text (at "${off}")`); continue; }
    }
    ok++;
  }
  console.log(`${lang}${prefix === 'context' ? ' context' : ''}: ${ok} ok, ${bad.length} failing, ${todo} without ${paraFile}`);
  for (const b of bad) console.log(`  ✗ ${b}`);
  return bad.length;
}

const failures = checkExtracts('core') + checkExtracts('context');
process.exit(failures ? 1 : 0);
