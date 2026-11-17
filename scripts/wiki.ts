// Fetch the opening of each person's and school's Wikipedia article in every site language.
//   bun scripts/wiki.ts   → writes src/i18n/wiki/<code>.json
// English article → Wikidata → the same article in each language → its summary (the lead).
// Texts are CC BY-SA 4.0: the site shows them with a link back to the article.
import { LANGS } from '../src/i18n/core';

// English Wikipedia titles, by our ids.
const titles: Record<'people' | 'schools', Record<string, string>> = {
  people: {
    thales: 'Thales of Miletus', anaximander: 'Anaximander', pythagoras: 'Pythagoras', xenophanes: 'Xenophanes',
    anaximenes: 'Anaximenes of Miletus', heraclitus: 'Heraclitus', parmenides: 'Parmenides', anaxagoras: 'Anaxagoras',
    empedocles: 'Empedocles', 'zeno-elea': 'Zeno of Elea', protagoras: 'Protagoras', gorgias: 'Gorgias',
    leucippus: 'Leucippus', melissus: 'Melissus of Samos', philolaus: 'Philolaus', socrates: 'Socrates',
    democritus: 'Democritus', antisthenes: 'Antisthenes', aristippus: 'Aristippus', 'euclid-megara': 'Euclid of Megara',
    archytas: 'Archytas', plato: 'Plato', diogenes: 'Diogenes', speusippus: 'Speusippus', xenocrates: 'Xenocrates',
    aristotle: 'Aristotle', anaxarchus: 'Anaxarchus', theophrastus: 'Theophrastus', crates: 'Crates of Thebes',
    pyrrho: 'Pyrrho', stilpo: 'Stilpo', polemon: 'Polemon of Athens', epicurus: 'Epicurus',
    strato: 'Strato of Lampsacus', 'zeno-citium': 'Zeno of Citium', cleanthes: 'Cleanthes', timon: 'Timon of Phlius',
    arcesilaus: 'Arcesilaus', chrysippus: 'Chrysippus', carneades: 'Carneades', panaetius: 'Panaetius',
    'philo-larissa': 'Philo of Larissa', posidonius: 'Posidonius', antiochus: 'Antiochus of Ascalon',
    philodemus: 'Philodemus', cicero: 'Cicero', andronicus: 'Andronicus of Rhodes', aenesidemus: 'Aenesidemus',
    lucretius: 'Lucretius', seneca: 'Seneca the Younger', musonius: 'Gaius Musonius Rufus', plutarch: 'Plutarch',
    epictetus: 'Epictetus', marcus: 'Marcus Aurelius', alexander: 'Alexander of Aphrodisias',
    sextus: 'Sextus Empiricus', ammonius: 'Ammonius Saccas', plotinus: 'Plotinus',
  },
  schools: {
    milesian: 'Ionian school (philosophy)', pythagorean: 'Pythagoreanism', eleatic: 'Eleatics',
    pluralist: 'Pluralist school', atomist: 'Atomism', sophist: 'Sophist', academy: 'Platonic Academy',
    lyceum: 'Peripatetic school', cynic: 'Cynicism (philosophy)', cyrenaic: 'Cyrenaics', megarian: 'Megarian school',
    pyrrhonist: 'Pyrrhonism', garden: 'Epicureanism', stoa: 'Stoicism', platonist: 'Middle Platonism',
    neoplatonist: 'Neoplatonism',
  },
};

const UA = { 'User-Agent': 'philosophers-timeline-build/1.0 (static site build script)' };
const langs = LANGS.filter((l) => l.code !== 'en' && l.code !== 'isv').map((l) => l.code); // no Interslavic Wikipedia
const MAX = 420; // characters: keep it a short paragraph

// Polite: a short pause between requests, and growing waits (or Retry-After) on errors.
const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
const json = async (url: string) => {
  for (let i = 0; i < 6; i++) {
    await sleep(120);
    const r = await fetch(url, { headers: UA }).catch(() => null);
    if (r?.ok) return r.json();
    if (r?.status === 404) return null;
    const retry = Number(r?.headers.get('retry-after'));
    await sleep(retry ? retry * 1000 : 1500 * 2 ** i);
  }
  return null;
};

// Whole sentences, up to MAX characters (at least one sentence).
const trim = (text: string) => {
  const parts = text.replace(/\s+/g, ' ').trim().match(/[^.!?。！？]+[.!?。！？]+["'”»)]*\s*|.+$/g) ?? [text];
  let out = '';
  for (const s of parts) {
    if (out && (out + s).length > MAX) break;
    out += s;
  }
  return out.trim();
};

// 1. English titles → sitelinks in every language, via Wikidata (50 titles per request).
const all = Object.entries(titles).flatMap(([kind, m]) => Object.entries(m).map(([id, t]) => ({ kind, id, t })));
const links = new Map<string, Record<string, string>>(); // English title → { lang: title }
for (let i = 0; i < all.length; i += 50) {
  const batch = all.slice(i, i + 50).map((x) => x.t);
  const sites = ['en', ...langs].map((l) => `${l}wiki`).join('|');
  const d = await json(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=sitelinks&sites=enwiki&sitefilter=${sites}&titles=${encodeURIComponent(batch.join('|'))}`);
  const asked = new Map<string, string>((d?.normalized ?? []).map((n: { from: string; to: string }) => [n.to, n.from]));
  for (const e of Object.values(d?.entities ?? {}) as { sitelinks?: Record<string, { title: string }> }[]) {
    const en = e.sitelinks?.enwiki?.title;
    if (!en) continue;
    const byLang = Object.fromEntries(Object.entries(e.sitelinks!).map(([site, v]) => [site.replace(/wiki$/, ''), v.title]));
    links.set(asked.get(en) ?? en, byLang);
  }
}
const unmatched = all.filter((x) => !links.has(x.t)).map((x) => x.t);
if (unmatched.length) console.log('not on Wikidata as titled:', unmatched.join(', '));

// 2. Each language's summary (the lead), trimmed.
const missing: string[] = [];
for (const lang of langs) {
  // Resume: keep what an earlier run already fetched.
  const file = Bun.file(`${import.meta.dir}/../src/i18n/wiki/${lang}.json`);
  const out: Record<string, Record<string, { about: string; url: string }>> =
    (await file.exists()) ? await file.json() : { people: {}, schools: {} };
  for (const { kind, id, t } of all) {
    if (out[kind][id]) continue;
    const title = links.get(t)?.[lang];
    if (!title) { missing.push(`${lang}:${id}`); continue; }
    const s = await json(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`);
    if (!s?.extract) { missing.push(`${lang}:${id}`); continue; }
    out[kind][id] = { about: trim(s.extract), url: s.content_urls?.desktop?.page ?? `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(title)}` };
  }
  await Bun.write(`${import.meta.dir}/../src/i18n/wiki/${lang}.json`, JSON.stringify(out, null, 1) + '\n');
  console.log(`${lang}: ${Object.keys(out.people).length} people, ${Object.keys(out.schools).length} schools`);
}
console.log(missing.length ? `no article (${missing.length}): ${missing.slice(0, 40).join(', ')}${missing.length > 40 ? ' …' : ''}` : 'every article found');
