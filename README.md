# Greek Philosophers Timeline

## Mission

A simple, readable timeline of philosophers: a companion for following the history of philosophy (for example, while listening to the *Philosophize This!* podcast).

Existing maps of the history of philosophy either show everything at once (huge static posters like Big Think's "Chart of Western Philosophy") or become tangled influence networks. This site shows **less by default**: people on a true-to-scale timeline, their teachers, and the school they belonged to. Everything else appears only when you ask for it.

It started from the Socrates → Plato → Aristotle line and the schools that branch off from it. The first scope is the Greeks up to the Roman era (c. 600 BCE – 270 CE). Later traditions, and the Indian and Chinese ones, may follow as parallel timelines on the same time axis.

## Design principles

- **People first.** Three columns: timeline, person, school.
- **Linear time.** The vertical axis is true to scale (7px per year). Rows are pushed down only when they would overlap, and a line runs back to the real date.
- **Floruit, not birth.** Each person is anchored where they were active: their school's founding year if they founded one, an explicit `active` year if known, otherwise birth + 40 (the ancient *akmē* convention). Everyone's leader line points to their active year on a single shared time axis; there are no permanent lifespan bars.
- **Schools appear once**, on the founder's row, with the philosophy as secondary text. School membership (a vertical line from the founder to the members) appears only on hover/select. Later labels or movements with no founder (Pluralists, Sophists, Middle Platonists) are marked as such. People with no school (Heraclitus, Xenophanes, Socrates, Cicero) have none.
- **Few lines by default.** "Student of" lines are always shown. "Main influence" lines appear only for the selected person.
- **Lifespans on demand.** Hovering or selecting one person draws their birth-to-death span on the axis, labelled with the years at both ends (rows show no dates; the info card does); ticks on the axis show where everyone alive at the same time was active. Those contemporaries (overlapping lifespans), plus teachers, students and influences, keep their resting look; everyone else fades.
- **Compare.** Shift+click (or the Select button, for touch) selects several people. Up to 5 each get a coloured lane beside the axis, so overlapping lifetimes show up as lanes running side by side. Beyond that, lifespans switch to fixed packed lanes; *Select all* (in Select mode) shows every lifespan at once. The info card shows only for a single selection.
- **Navigation.** A minimap on the left shows the eras and a dot per person, with a box for the current view; click or drag to jump. Clicking a person pins them and opens an info card (school, teachers, students, influences).
- **Performance.** All geometry is computed at build time. The browser never measures or re-lays out; hovering only toggles a few classes and draws the handful of highlighted lines.
- **Branches (toggle).** The Branches button swaps the axis for a git-style branch graph on the same time scale. Every school is a branch; a person with no school is a single dot. A branch forks (a short 45° bevel, only ever rightwards) from the branch of its founder's first direct teacher, just before it starts; a school that starts where its parent school ended carries straight on in the same column. The founder's other teachers and influences flow in as merges (Pythagoras and Parmenides → Plato): each starts at the influencer's own dot, rides their branch as a thin solid line, then leaves it as a dashed one, routed so it never passes through anyone's dot. Long-lived lines take the leftmost columns. Selecting someone shows their lifespan on their own branch (a green band, labelled with the birth and death years), and highlights the path that led to them (their branch down to their dot, then each parent branch down to its fork) and, more lightly, what came after: their own line continuing below them, the branches their disciples started, and the dashed influences in and out. Everyone on those lines is marked.
- **Main figures stand out.** People have a `priority`: `grand` (Socrates, Plato, Aristotle) is set larger, `high` (about two dozen people everyone should know) at full size in bold, and the rest at 0.85 in regular weight.
- **Colours by priority and accent.** Highlight parts are styled as a priority (faint … high … max, golden-ratio colour weights) and an accent (neutral, the accent, which a compare slot can override, or lifespan for time alive), never as literal colours. Small profile functions pick them from a person's relation (self, teacher, pupil, influencer, influenced, lineage, successor, none) and lifespan (before, shared, after).
- **Minimal styling.**

## Structure

- `src/data/philosophers.ts`: schools and people. To add someone, give them `born`, `died`, `school`, `note`, plus optional `priority` (`grand` or `high`; omitted = low), `studentOf` (direct teachers), `influence` (main influences) and `active` (floruit year). Negative years are BCE. Most ancient dates are approximate; uncertain teacher relationships are recorded as influences.
- `src/lib/layout.ts`: build-time layout (time scale, row nudging, axis leaders, lifespan spans, link curves, school lines, minimap packing, branches).
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
