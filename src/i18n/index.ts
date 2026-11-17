// The translations on disk, merged over English. A language appears on the site once its
// ./lang/<code>.ts exists; anything a translation leaves out falls back to English.
import { en, LANGS, type Translation } from './core';
export * from './core';

const files = import.meta.glob<{ default: Partial<Translation> }>('./lang/*.ts', { eager: true });
const byCode = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.match(/([\w-]+)\.ts$/)![1], mod.default]),
);
export const available = LANGS.filter((l) => l.code === 'en' || byCode[l.code]);

/** The translation for a language, with English filling anything it leaves out. */
export function translation(code: string): Translation {
  const t = byCode[code];
  if (code === 'en' || !t) return en;
  const merge = <T extends object>(base: Record<string, T>, over?: Record<string, Partial<T>>) =>
    Object.fromEntries(Object.entries(base).map(([k, v]) => [k, { ...v, ...over?.[k] }]));
  return {
    ui: { ...en.ui, ...t.ui },
    eras: { ...en.eras, ...t.eras },
    schools: merge(en.schools, t.schools) as Translation['schools'],
    people: merge(en.people, t.people),
  };
}
