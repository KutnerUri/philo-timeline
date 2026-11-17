// Translation helper.
//   bun scripts/i18n.ts source        → the English source, as JSON (what translators work from)
//   bun scripts/i18n.ts check [code]  → checks one translation, or all of them
// A check fails on missing or empty entries, broken {placeholders}, or ids that don't exist;
// it warns about entries identical to the English (often fine for names, worth a look otherwise).
import { en, LANGS, type Translation } from '../src/i18n/core';

const [cmd, only] = process.argv.slice(2);

if (cmd === 'source') {
  console.log(JSON.stringify(en, null, 2));
  process.exit(0);
}
if (cmd !== 'check') {
  console.log('usage: bun scripts/i18n.ts source | check [code]');
  process.exit(1);
}

const placeholders = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
let failed = false;

for (const lang of LANGS.filter((l) => l.code !== 'en' && (!only || l.code === only))) {
  const file = Bun.file(`${import.meta.dir}/../src/i18n/lang/${lang.code}.ts`);
  if (!(await file.exists())) {
    if (only) { console.log(`${lang.code}: no file`); failed = true; }
    continue;
  }
  const t = (await import(`../src/i18n/lang/${lang.code}.ts`)).default as Partial<Translation>;
  const errors: string[] = [];
  const same: string[] = [];
  const section = <K extends keyof Translation>(key: K, flat = false) => {
    const src = en[key] as Record<string, unknown>;
    const out = (t[key] ?? {}) as Record<string, unknown>;
    for (const id of Object.keys(out)) if (!(id in src)) errors.push(`${key}.${id}: not in the English source`);
    for (const [id, srcVal] of Object.entries(src)) {
      const fields = flat ? { '': srcVal as string } : (srcVal as Record<string, string>);
      const outVal = out[id] as Record<string, string> | string | undefined;
      for (const [f, s] of Object.entries(fields)) {
        const v = flat ? (outVal as string | undefined) : (outVal as Record<string, string> | undefined)?.[f];
        const where = `${key}.${id}${f ? '.' + f : ''}`;
        if (typeof v !== 'string' || !v.trim()) { errors.push(`${where}: missing`); continue; }
        if (placeholders(v) !== placeholders(s)) errors.push(`${where}: placeholders {${placeholders(s)}} became {${placeholders(v)}}`);
        if (v === s && s.length > 3) same.push(where);
      }
    }
  };
  section('ui', true);
  section('eras', true);
  section('schools');
  section('people');
  console.log(`${lang.code}: ${errors.length ? `${errors.length} problem(s)` : 'complete'}${same.length ? `, ${same.length} same as English` : ''}`);
  for (const e of errors) console.log(`  ✗ ${e}`);
  if (same.length) console.log(`  = ${same.join(', ')}`);
  if (errors.length) failed = true;
}
process.exit(failed ? 1 : 0);
