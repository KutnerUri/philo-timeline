# Greek Philosophers Timeline

## Mission

A simple, readable timeline of philosophers: a companion for following the history of philosophy (for example, while listening to the *Philosophize This!* podcast).

Existing maps of the history of philosophy either show everything at once (huge static posters like Big Think's "Chart of Western Philosophy") or become tangled influence networks. This site shows **less by default**: people on a true-to-scale timeline, their teachers, and the school they belonged to. Everything else appears only when you ask for it.

It started from the Socrates → Plato → Aristotle line and the schools that branch off from it. The first scope is the Greeks up to the Roman era (c. 600 BCE – 270 CE). Later traditions, and the Indian and Chinese ones, may follow as parallel timelines on the same time axis.

## Design principles

- **People first.** Three columns: timeline, person, school.
- **Linear time.** The vertical axis is true to scale (7px per year). Rows are pushed down only when they would overlap, and a line runs back to the real date.
- **Floruit, not birth.** Each person is anchored where they were active: their school's founding year if they founded one, an explicit `active` year if known, otherwise birth + 40 (the ancient *akmē* convention). Lifespan bars still show birth to death, with a tick at the active year.
- **Schools appear once**, on the founder's row, with the philosophy as secondary text. School membership (a vertical line from the founder to the members) appears only on hover/select. Later labels or movements with no founder (Pluralists, Sophists, Middle Platonists) are marked as such. People with no school (Heraclitus, Xenophanes, Socrates, Cicero) have none.
- **Few lines by default.** "Student of" lines are always shown. "Main influence" lines appear only for the selected person. Highlighting affects only the selected person's lifespan bar; related people stay readable but secondary.
- **Navigation.** A minimap on the left shows the eras and a dot per person, with a box for the current view; click or drag to jump. Clicking a person pins them and opens an info card (school, teachers, students, influences).
- **Performance.** All geometry is computed at build time. The browser never measures or re-lays out; hovering only toggles a few classes and draws the handful of highlighted lines.
- **Minimal styling.**

## Structure

- `src/data/philosophers.ts`: schools and people. To add someone, give them `born`, `died`, `school`, `note`, plus optional `studentOf` (direct teachers), `influence` (main influences) and `active` (floruit year). Negative years are BCE. Most ancient dates are approximate; uncertain teacher relationships are recorded as influences.
- `src/lib/layout.ts`: build-time layout (time scale, row nudging, lifespan lanes, link curves, school lines).
- `src/pages/index.astro`: the page, interaction script and styles.

## Run

```sh
bun install
bun run dev
```

## Ideas for later

- Extend past Plotinus (late antiquity, Islamic and medieval philosophy).
- Parallel Indian and Chinese timelines on the same axis, with the few real cross-links between them.
- Link people to the matching *Philosophize This!* episodes.
