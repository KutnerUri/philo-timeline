# Greek Philosophers Timeline

## Mission

A simple, readable timeline of philosophers: a companion for following the history of philosophy (for example, while listening to the *Philosophize This!* podcast).

Existing maps of the history of philosophy either show everything at once (huge static posters like Big Think's "Chart of Western Philosophy") or become tangled influence networks. This site shows **less by default**: people on a true-to-scale timeline, their teachers, and the school they belonged to. Everything else appears only when you ask for it.

It started from the Socrates → Plato → Aristotle line and the schools that branch off from it. The first scope is the Greeks up to the Roman era (c. 600 BCE – 270 CE). Later traditions, and the Indian and Chinese ones, may follow as parallel timelines on the same time axis.

## Design principles

- **People first.** Two columns: the branch graph (with its school tags), and the people.
- **Linear time.** The vertical axis is true to scale (7px per year). Rows are pushed down only when they would overlap, and a leader line runs back to the person's dot on the graph.
- **Floruit, not birth.** Each person is anchored where they were active: their school's founding year if they founded one, an explicit `active` year if known, otherwise birth + 40 (the ancient *akmē* convention). Lifespans appear only on select.
- **Branches.** A git-style graph on the same time scale. Every school is a branch; a person with no school is a single dot. A branch forks (a short 45° bevel, only ever rightwards) from the branch of its founder's first direct teacher, just before it starts; a school that starts where its parent school ended carries straight on in the same column. Long-lived lines take the leftmost columns.
- **Influences as merges.** Teachers and influences on another branch flow in as merges, for anyone, not only founders (Pythagoras and Parmenides → Plato, Arcesilaus → Chrysippus): each starts at the influencer's own dot, rides their branch as a thin solid line, then leaves it as a dashed one, routed so it never passes through anyone's dot. People on the same line are not linked again; the line already says it.
- **Schools as tags.** Each school (a school of thought, with or without an institution) is a tag in one column just before the names, on its founder's row, like a branch name in a git graph; the founder's leader line runs through it. Later labels with no founder (Pluralists, Sophists, Middle Platonists) sit on their first member's row. People with no school (Heraclitus, Xenophanes, Socrates, Cicero) have none. On phones there is no room for the tag column, so each tag sits after its founder's name instead.
- **Select a school.** Clicking a tag focuses the school: its whole branch, its span (from its founding to its last member's death) as a band with the years, its members, and an info card with its description and members. A focused school has its own accent, an ochre yellow.
- **Select one.** Hovering or selecting someone shows their lifespan on their own branch (a green band, labelled with the birth and death years; rows show no dates, the info card does). It highlights the path that led to them (their branch down to their dot, then each parent branch down to its fork) and, more lightly, what came after: their own line continuing below them, the branches their disciples started, and the influences in and out. Everyone alive at the same time gets a full dot, everyone else an empty one; unrelated people fade.
- **Compare.** Shift+click (or the Select button, for touch) selects several people; up to 5 each get the path that led to them in their own colour. *Select all* is in Select mode. The info card shows only for a single selection.
- **Navigation.** A minimap on the left shows the eras and a dot per person, with a box for the current view; click or drag to jump. Clicking a person pins them and opens an info card (school, teachers, students, influences).
- **Performance.** All geometry, and each person's highlight, is computed at build time. The browser never measures or re-lays out; hovering only sets a few path outlines and toggles classes.
- **Main figures stand out.** People have a `priority`: `grand` (Socrates, Plato, Aristotle) is set larger, `high` (about two dozen people everyone should know) at full size in bold, and the rest at 0.85 in regular weight.
- **Colours carry meaning.** Blue is philosophers and philosophy (a person's lineage, pupils and influences); green is life (a person's lifespan); ochre yellow is establishments (a focused school, including its span). Everything else is neutral.
- **Colours by priority and accent.** Highlight parts are styled as a priority (faint … high … max, golden-ratio colour weights) and an accent (neutral; the accent, which a compare slot or a focused school can override; or lifespan for time alive), never as literal colours. Small profile functions pick them from a person's relation (self, teacher, pupil, influencer, influenced, lineage, successor, none) and lifespan (before, shared, after).
- **Minimal styling.**

## Structure

- `src/data/philosophers.ts`: schools (`name`, `philosophy`, `note`, optional `founder` and `founded`) and people. To add someone, give them `born`, `died`, `school`, `note` (a short punchline, shown on their row), `about` (a short paragraph for the info card), plus optional `priority` (`grand` or `high`; omitted = low), `studentOf` (direct teachers), `influence` (main influences) and `active` (floruit year). Negative years are BCE. Most ancient dates are approximate; uncertain teacher relationships are recorded as influences.
- `src/lib/layout.ts`: build-time layout (time scale, row nudging, minimap packing, branches, school tags and spans, merges, and each person's highlight).
- `src/pages/index.astro`: the page, interaction script and styles.

## Run

```sh
bun install
bun run dev
```

The earlier axis view (one shared time axis, lifespan lanes, compare lanes) is kept in git under the tag `axis-view`.

## Ideas for later

- Extend past Plotinus (late antiquity, Islamic and medieval philosophy).
- Parallel Indian and Chinese timelines on the same axis, with the few real cross-links between them.
- Link people to the matching *Philosophize This!* episodes.
