// Languages, the translation shape, the English source and year formatting. English is built
// from the data files; every other language lives in ./lang/<code>.ts, keyed by the same ids.
// (No Vite-only features here, so scripts can import it too; ./index.ts adds the files.)
import { people, schools, eras, type Person, type SchoolId } from '../data/philosophers';

export type Lang = {
  code: string; // also the URL path: /he/, /fr/ … (English is at /)
  name: string; // the language's own name, for the switcher
  htmlLang: string; // the html lang attribute
  hreflang?: string; // for search engines; left out where there's no standard code
  dir: 'ltr' | 'rtl';
  ogLocale?: string;
  unspaced?: true; // no space between words (Japanese, Chinese)
};

export const LANGS: Lang[] = [
  { code: 'en', name: 'English', htmlLang: 'en', hreflang: 'en', dir: 'ltr', ogLocale: 'en_US' },
  { code: 'he', name: 'עברית', htmlLang: 'he', hreflang: 'he', dir: 'rtl', ogLocale: 'he_IL' },
  { code: 'ar', name: 'العربية', htmlLang: 'ar', hreflang: 'ar', dir: 'rtl', ogLocale: 'ar_AR' },
  { code: 'fr', name: 'Français', htmlLang: 'fr', hreflang: 'fr', dir: 'ltr', ogLocale: 'fr_FR' },
  { code: 'de', name: 'Deutsch', htmlLang: 'de', hreflang: 'de', dir: 'ltr', ogLocale: 'de_DE' },
  { code: 'es', name: 'Español', htmlLang: 'es', hreflang: 'es', dir: 'ltr', ogLocale: 'es_ES' },
  { code: 'pt', name: 'Português', htmlLang: 'pt', hreflang: 'pt', dir: 'ltr', ogLocale: 'pt_BR' },
  { code: 'it', name: 'Italiano', htmlLang: 'it', hreflang: 'it', dir: 'ltr', ogLocale: 'it_IT' },
  { code: 'pl', name: 'Polski', htmlLang: 'pl', hreflang: 'pl', dir: 'ltr', ogLocale: 'pl_PL' },
  // Interslavic has no ISO code; this is the conventional private-use tag.
  { code: 'isv', name: 'Medžuslovjansky', htmlLang: 'art-x-interslv', dir: 'ltr' },
  { code: 'ja', name: '日本語', htmlLang: 'ja', hreflang: 'ja', dir: 'ltr', ogLocale: 'ja_JP', unspaced: true },
  { code: 'zh', name: '中文', htmlLang: 'zh-Hans', hreflang: 'zh-Hans', dir: 'ltr', ogLocale: 'zh_CN', unspaced: true },
  { code: 'hi', name: 'हिन्दी', htmlLang: 'hi', hreflang: 'hi', dir: 'ltr', ogLocale: 'hi_IN' },
];

// Interface strings. {placeholders} must be kept as they are in every translation.
const enUi = {
  siteName: 'Greek Philosophers',
  title: 'Greek Philosophers Timeline: who taught whom, from Thales to Plotinus',
  description: 'A true-to-scale timeline of Greek philosophers, from Thales to Plotinus: who taught whom, which schools branched from which, and who influenced whom.',
  overline: 'A timeline · c. 600 BCE – 270 CE',
  titleA: 'Greek', // the title is "{titleA} {titleB}" (no space in Japanese, Chinese), the second part in italic
  titleB: 'Philosophers',
  subtitle: 'Who taught whom, and which schools branched from which, from Thales to Plotinus.',
  ogAlt: 'The timeline around Socrates and Plato: school branches on the left, philosophers on the right.',
  listName: 'Greek philosophers, in time order',
  language: 'Language',
  overview: 'Timeline overview',
  // Years. {n} is a year number; spans use {a} for the first year and {b} for the second.
  bce: '{n} BCE',
  ce: '{n} CE',
  spanBce: 'c. {a}–{b} BCE',
  spanCe: 'c. {a}–{b} CE',
  spanCross: 'c. {a} BCE – {b} CE',
  active: 'active c. {year}',
  // The info card
  founded: 'Founded',
  foundedBy: '{year} by {name}',
  school: 'School',
  none: 'None',
  studentOf: 'Student of',
  teacherOf: 'Teacher of',
  influencedBy: 'Influenced by',
  influenced: 'Influenced',
  members: 'Members',
  close: 'Close',
  // Buttons
  select: 'Select',
  done: 'Done',
  selectAll: 'Select all',
  deselectAll: 'Deselect all',
};
export type Ui = typeof enUi;

export type Translation = {
  ui: Ui;
  eras: Record<string, string>; // keyed by the English era name
  schools: Record<SchoolId, { name: string; philosophy: string; note: string }>;
  people: Record<string, { name: string; note: string; about: string }>;
};

export const en: Translation = {
  ui: enUi,
  eras: Object.fromEntries(eras.map((e) => [e.name, e.name])),
  schools: Object.fromEntries(
    Object.entries(schools).map(([id, s]) => [id, { name: s.name, philosophy: s.philosophy, note: s.note }]),
  ) as Translation['schools'],
  people: Object.fromEntries(people.map((p) => [p.id, { name: p.name, note: p.note, about: p.about }])),
};

export const fill = (s: string, v: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? `{${k}}`));

export const fmtYear = (y: number, ui: Ui) => (y < 0 ? fill(ui.bce, { n: -y }) : fill(ui.ce, { n: y }));

export const fmtSpan = (p: Person, ui: Ui) =>
  p.born < 0 && p.died > 0 ? fill(ui.spanCross, { a: -p.born, b: p.died })
  : p.died < 0 ? fill(ui.spanBce, { a: -p.born, b: -p.died })
  : fill(ui.spanCe, { a: p.born, b: p.died });

/** The page's address for a language. */
export const pathOf = (code: string) => (code === 'en' ? '/' : `/${code}/`);
