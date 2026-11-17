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

export const fmtYear = (y: number) => (y < 0 ? `${-y} BCE` : `${y} CE`);
export const fmtSpan = (p: Person) =>
  p.born < 0 && p.died > 0 ? `c. ${-p.born} BCE – ${p.died} CE` : `c. ${Math.abs(p.born)}–${fmtYear(p.died)}`;
