// All geometry is computed at build time, so the browser never measures or re-lays out.
import { people, schools, eras, type Person, type SchoolId } from '../data/philosophers';

export const PX_PER_YEAR = 7;
export const START = -632;
export const END = 280;
export const ROW_H = 40;
export const ROW_GAP = 4;
export const DOT_Y = 12; // dot centre, relative to row top

// Left visual area (SVG viewBox units; stretched horizontally on small screens).
// One shared time axis; everyone's leader points to their active year on it.
// Lifespans are drawn only on select: on the axis itself for one person, in
// coloured side-by-side lanes when comparing a few, and in packed lanes (fixed
// per person, computed below) when more are selected, up to everyone.
export const SVG_W = 200;
export const AXIS_X = 10;
export const LANE_W = 8; // compare lanes
export const MAX_COMPARE = 5;
const PACK_W = 7; // packed lanes
const PACK_X0 = AXIS_X + 8;

export const yOf = (year: number) => Math.round((year - START) * PX_PER_YEAR);

// Anchor = floruit: when the person was active. Ancient chronologers dated people by
// their akmē (~age 40); many birth dates are back-calculated from it.
const founded = new Map<string, number>();
for (const s of Object.values(schools)) if ('founder' in s && 'founded' in s) founded.set(s.founder, s.founded);
export const anchorOf = (p: Person) => p.active ?? founded.get(p.id) ?? Math.min(p.born + 40, p.died);

export const sorted = [...people].sort((a, b) => anchorOf(a) - anchorOf(b));

// 1. Rows: at their birth year, nudged down only when they would overlap.
export const rowY = new Map<string, number>();
{
  let prevBottom = -Infinity;
  for (const p of sorted) {
    const y = Math.max(yOf(anchorOf(p)) - DOT_Y, prevBottom + ROW_GAP);
    rowY.set(p.id, y);
    prevBottom = y + ROW_H;
  }
}

// Packed lanes: everyone's lifespan in the fewest lanes without overlap.
export const packX = new Map<string, number>();
const laneEnds: number[] = [];
for (const p of [...people].sort((a, b) => a.born - b.born)) {
  let lane = laneEnds.findIndex((end) => end + 4 < p.born);
  if (lane === -1) lane = laneEnds.length;
  laneEnds[lane] = p.died;
  packX.set(p.id, PACK_X0 + lane * PACK_W);
}

const gutterX0 = Math.max(AXIS_X + (MAX_COMPARE + 1) * LANE_W, PACK_X0 + laneEnds.length * PACK_W) + 4;
const gutterW = SVG_W - gutterX0;

const dotY = (id: string) => rowY.get(id)! + DOT_Y;

export const height = Math.max(yOf(END), ...[...rowY.values()].map((y) => y + ROW_H)) + 40;

// Lifespan geometry, drawn by the client on select.
export const spans = sorted.map((p) => ({
  id: p.id,
  x: packX.get(p.id)!,
  y1: yOf(p.born),
  y2: yOf(p.died),
  ya: yOf(anchorOf(p)),
}));

export const leaders = sorted.map((p) => {
  const y = yOf(anchorOf(p));
  return { id: p.id, d: `M${AXIS_X},${y} L${gutterX0 - 2},${y} L${SVG_W},${dotY(p.id)}` };
});

// Minimap: dots at the active year, packed into a few columns so close ones don't overlap.
export const miniCol = new Map<string, number>();
{
  const colEnds: number[] = [];
  for (const p of sorted) {
    const a = anchorOf(p);
    let col = colEnds.findIndex((end) => end + 6 <= a);
    if (col === -1) col = colEnds.length;
    colEnds[col] = a;
    miniCol.set(p.id, col);
  }
}

const arc = (from: string, to: string) => {
  const a = dotY(from);
  const b = dotY(to);
  const bulge = Math.min(10 + Math.abs(b - a) * 0.08, gutterW - 4);
  const x = SVG_W;
  return `M${x},${a} C${x - bulge},${a} ${x - bulge},${b} ${x},${b}`;
};

export type Link = { from: string; to: string; type: 'student' | 'influence'; d: string };
export const links: Link[] = people.flatMap((p) => [
  ...(p.studentOf ?? []).map((t) => ({ from: t, to: p.id, type: 'student' as const, d: arc(t, p.id) })),
  ...(p.influence ?? []).map((t) => ({ from: t, to: p.id, type: 'influence' as const, d: arc(t, p.id) })),
]);

// 3. Schools: shown once, on the founder's row (or first member for founder-less labels).
export const schoolHome = new Map<SchoolId, string>();
for (const [id, s] of Object.entries(schools) as [SchoolId, (typeof schools)[SchoolId]][]) {
  const home = 'founder' in s ? s.founder : sorted.find((p) => p.school === id)?.id;
  if (home) schoolHome.set(id, home);
}

export const spines = [...schoolHome.entries()].map(([id, home]) => {
  const members = sorted.filter((p) => p.school === id && p.id !== home);
  const ys = [home, ...members.map((m) => m.id)].map(dotY);
  return { id, top: Math.min(...ys), bottom: Math.max(...ys) };
});

export const ticks: number[] = [];
for (let y = -600; y <= 200; y += 100) ticks.push(y === 0 ? 1 : y);

export const eraMarks = eras.map((e) => ({ ...e, y: yOf(e.from) }));

// 4. Branches (the alternative view): every school is a branch. A person with no school
// is a single dot (Socrates, Heraclitus), not a line. A branch forks from the branch of
// its founder's first direct teacher, just before it starts; the founder's other teachers
// and influences flow in as merges.
const BR_X0 = AXIS_X;
const BR_GAP = 10;
const laneOfPerson = (p: Person) => p.school ?? `solo:${p.id}`;
const byId = new Map(people.map((p) => [p.id, p]));

type Branch = {
  id: string; members: Person[]; top: number; bottom: number; parent: string | null; solo: boolean;
  col: number; lineTop: number; forkY: number | null; forkD: string;
};
const branchMap = new Map<string, Branch>();
for (const p of sorted) {
  const id = laneOfPerson(p);
  const y = yOf(anchorOf(p));
  const b = branchMap.get(id);
  if (b) { b.members.push(p); b.bottom = Math.max(b.bottom, y); }
  else branchMap.set(id, { id, members: [p], top: y, bottom: y, parent: null, solo: !p.school, col: 0, lineTop: y, forkY: null, forkD: '' });
}
for (const b of branchMap.values()) {
  const teacher = byId.get(b.members[0].studentOf?.[0] ?? '');
  if (teacher && laneOfPerson(teacher) !== b.id) b.parent = laneOfPerson(teacher);
}
const allBranches = [...branchMap.values()];

// Columns, git-graph style: branches only fork rightwards (a branch sits right of its
// parent), and long-lived branches claim the leftmost free columns first, so short ones
// end up on the outside. A school that starts where its parent school ends carries
// straight on in the same column (Middle Platonists → Neoplatonism).
{
  const occupied: [number, number][][] = [];
  const free = (col: number, a: number, z: number) =>
    !(occupied[col] ?? []).some(([s, e]) => a < e + 60 && s < z + 60); // a clear gap before a column is reused
  const done = new Set<string>();
  // How far down a branch's whole family reaches: a short branch with long-lived
  // descendants still counts as long.
  const reach = (b: Branch): number =>
    Math.max(b.bottom, ...allBranches.filter((c) => c.parent === b.id).map(reach));
  const continued = new Set<string>(); // parents already carried on by a child
  while (done.size < allBranches.length) {
    const ready = allBranches.filter((b) => !done.has(b.id) && (!b.parent || done.has(b.parent)));
    const b = ready.sort((a, c) => reach(c) - c.top - (reach(a) - a.top))[0];
    const p = b.parent ? branchMap.get(b.parent)! : null;
    const from = p ? Math.min(p.bottom, b.top) - 2 * BR_GAP : b.top;
    let col = -1;
    if (p && !p.solo && !continued.has(p.id) && p.bottom <= b.top) {
      const pEnd = occupied[p.col]!.find(([s, e]) => e === p.bottom)!;
      pEnd[1] = -Infinity; // hand the column over
      if (free(p.col, from, b.bottom)) col = p.col;
      pEnd[1] = p.bottom;
    }
    if (col === -1) {
      col = p ? p.col + 1 : 0;
      while (!free(col, from, b.bottom)) col++;
    }
    b.col = col;
    (occupied[col] ??= []).push([from, b.bottom]);
    done.add(b.id);

    const x = BR_X0 + col * BR_GAP;
    if (!p) continue;
    if (col === p.col) { continued.add(p.id); b.forkY = p.bottom; b.lineTop = p.bottom; continue; }
    // A short 45° bevel, just before the branch starts (or from where the parent ended).
    const px = BR_X0 + p.col * BR_GAP;
    const dx = x - px;
    const y0 = Math.max(p.top, Math.min(p.bottom, b.top - dx));
    b.forkY = y0;
    b.lineTop = y0 + dx;
    b.forkD = `M${px},${y0}L${x},${y0 + dx}`;
  }
}
export const branchCols = Math.max(...allBranches.map((b) => b.col)) + 1;
const brX = (b: Branch) => BR_X0 + b.col * BR_GAP;
const brBendX = BR_X0 + branchCols * BR_GAP;

const lineD = (b: Branch, to: number) => (to > b.lineTop ? `M${brX(b)},${b.lineTop}V${to}` : '');
export const branches = allBranches.map((b) => ({
  id: b.id, parent: b.parent, x: brX(b), lineTop: b.lineTop, forkY: b.forkY, forkD: b.forkD, bottom: b.bottom,
  teacher: b.parent ? b.members[0].studentOf![0] : null, // whose disciple started it
  d: b.forkD + lineD(b, b.bottom),
  members: b.members.map((m) => m.id),
}));

const dotsAt = sorted.map((p) => ({ x: brX(branchMap.get(laneOfPerson(p))!), y: yOf(anchorOf(p)) }));
// Merges: the founder's other teachers and influences. Each starts at the influencer's own
// dot, rides their branch (the solid `along` part) until it has to leave, then runs as a
// dashed line to the founder.
export const merges = allBranches.flatMap((b) => {
  const f = b.members[0];
  const bySource = new Map<string, string[]>(); // source branch → the people in it
  for (const q of [...(f.studentOf ?? []), ...(f.influence ?? [])].map((id) => byId.get(id)!)) {
    const l = laneOfPerson(q);
    if (l !== b.id && l !== b.parent) bySource.set(l, [...(bySource.get(l) ?? []), q.id]);
  }
  return [...bySource].flatMap(([sid, fromIds]) => {
    const s = branchMap.get(sid)!;
    if (s.top >= b.top) return [];
    const sx = brX(s), tx = brX(b), dx = Math.abs(tx - sx);
    const iy = Math.min(...fromIds.map((id) => yOf(anchorOf(byId.get(id)!))));
    const y0 = Math.max(iy, Math.min(s.bottom, b.top - dx));
    const along = y0 > iy ? `M${sx},${iy}V${y0}` : '';
    const y1 = Math.max(y0, b.top - dx);
    // The long vertical stretch runs down the source column (bevel at the end) or the
    // target column (bevel first), whichever has nobody in the way.
    const blocked = (x: number, a: number, z: number) =>
      dotsAt.filter((t) => t.x === x && t.y > a + 1 && t.y < z - 1).length;
    const viaSource = `M${sx},${y0}V${y1}L${tx},${b.top}`;
    const viaTarget = `M${sx},${y0}L${tx},${y0 + dx}V${b.top}`;
    // If both have people in the way, run between two columns, where there are no dots.
    const h = BR_GAP / 2, side = tx >= sx ? 1 : -1, mx = sx + side * h, mdx = Math.abs(tx - mx);
    const viaGap = `M${sx},${y0}L${mx},${y0 + h}V${Math.max(y0 + h, b.top - mdx)}L${tx},${b.top}`;
    const bs = blocked(sx, y0, y1), bt = blocked(tx, y0 + dx, b.top);
    const d = bs === 0 ? viaSource : bt === 0 ? viaTarget : viaGap;
    return [{ to: f.id, fromIds, along, d }];
  });
});

export const branchOf = new Map(people.map((p) => [p.id, laneOfPerson(p)]));
export const branchDots = sorted.map((p) => ({ id: p.id, x: brX(branchMap.get(laneOfPerson(p))!), y: yOf(anchorOf(p)) }));
export const branchLeaders = branchDots.map((t) => ({
  id: t.id,
  d: `M${t.x},${t.y} L${brBendX},${t.y} L${SVG_W},${dotY(t.id)}`,
}));

// 5. Branch highlight, per person: the lines to draw when they are selected, and how
// everyone else relates to them. The browser only turns relations into looks.
export type Relation = 'self' | 'teacher' | 'pupil' | 'influencer' | 'influenced' | 'lineage' | 'successor' | 'none';
const segment = (b: Branch, from: number, to: number) => (to > from ? `M${brX(b)},${from}V${to}` : '');
const yOfPerson = (p: Person) => yOf(anchorOf(p));

export const branchHL = Object.fromEntries(people.map((p) => {
  const y = yOfPerson(p);
  const own = branchMap.get(laneOfPerson(p))!;
  // Path: their branch down to them, then each parent branch down to its fork, to a root.
  let path = '';
  const onPath = new Set<string>();
  let to = y;
  for (let b: Branch | undefined = own; b; b = b.parent ? branchMap.get(b.parent) : undefined) {
    path += b.forkD + segment(b, b.lineTop, to);
    for (const m of b.members) if (yOfPerson(m) <= to) onPath.add(m.id);
    to = b.forkY ?? to;
  }
  // After: their own line below them, and the branches their disciples started.
  let after = own.solo ? '' : segment(own, y, own.bottom);
  const successors = new Set(own.solo ? [] : own.members.filter((m) => yOfPerson(m) > y).map((m) => m.id));
  for (const c of allBranches) {
    if (!c.parent || c.members[0].studentOf?.[0] !== p.id) continue;
    after += c.forkD + segment(c, c.lineTop, yOfPerson(c.members[0]));
    successors.add(c.members[0].id);
  }
  // Influences in and out: the part riding a branch (`along`) and the dashed part.
  const mine = merges.filter((m) => m.to === p.id || m.fromIds.includes(p.id));

  const relationTo = (q: Person): Relation => {
    if (q.id === p.id) return 'self';
    if (p.studentOf?.includes(q.id)) return 'teacher';
    if (q.studentOf?.includes(p.id)) return 'pupil';
    if (p.influence?.includes(q.id)) return 'influencer';
    if (q.influence?.includes(p.id)) return 'influenced';
    if (onPath.has(q.id)) return 'lineage';
    if (successors.has(q.id)) return 'successor';
    return 'none';
  };
  const rel = Object.fromEntries(people.map((q) => [q.id, relationTo(q)]).filter(([, r]) => r !== 'none'));
  return [p.id, {
    path, after,
    influence: mine.map((m) => m.d).join(''),
    along: mine.map((m) => m.along).join(''),
    onPath: [...onPath],
    rel,
  }];
}));

export const fmtYear = (y: number) => (y < 0 ? `${-y} BCE` : `${y} CE`);
export const fmtSpan = (p: Person) =>
  p.born < 0 && p.died > 0 ? `c. ${-p.born} BCE – ${p.died} CE` : `c. ${Math.abs(p.born)}–${fmtYear(p.died)}`;
