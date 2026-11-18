// The translations on disk, merged over English. A language appears on the site once its
// ./lang/<code>.ts exists; anything a translation leaves out falls back to English.
import { en, LANGS, type Translation } from './core';
export * from './core';

const files = import.meta.glob<{ default: Partial<Translation> }>('./lang/*.ts', { eager: true });
const byCode = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.match(/([\w-]+)\.ts$/)![1], mod.default]),
);
// Opening paragraphs from Wikipedia (scripts/wiki.ts), which replace the translated ones.
type Wiki = Record<'people' | 'schools', Record<string, { about: string; context?: string; url: string }>>;
const wikiFiles = import.meta.glob<{ default: Wiki }>('./wiki/*.json', { eager: true });
const wikiByCode = Object.fromEntries(
  Object.entries(wikiFiles).map(([path, mod]) => [path.match(/([\w-]+)\.json$/)![1], mod.default]),
);

export const available = LANGS.filter((l) => l.code === 'en' || byCode[l.code]);

/** The translation for a language, with English filling anything it leaves out. */
export function translation(code: string): Translation {
  const t = byCode[code];
  if (code === 'en' || !t) return en;
  const merge = <T extends object>(base: Record<string, T>, over?: Record<string, Partial<T>>) =>
    Object.fromEntries(Object.entries(base).map(([k, v]) => [k, { ...v, ...over?.[k] }]));
  const w = wikiByCode[code];
  const people = merge(en.people, t.people);
  const schools = merge(en.schools, t.schools) as Translation['schools'];
  for (const [id, e] of Object.entries(w?.people ?? {})) people[id] = { ...people[id], about: e.about, context: e.context, wiki: e.url };
  for (const [id, e] of Object.entries(w?.schools ?? {})) schools[id as keyof typeof schools] = { ...schools[id as keyof typeof schools], note: e.about, context: e.context, wiki: e.url };
  return { ui: { ...en.ui, ...t.ui }, eras: { ...en.eras, ...t.eras }, schools, people };
}
