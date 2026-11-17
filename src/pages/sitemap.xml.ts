// Every language version, each listing the others as alternates.
import { available, pathOf } from '../i18n';

const SITE = 'https://philo.nefzen.dev';

export function GET() {
  const alternates = available
    .filter((l) => l.hreflang)
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${SITE}${pathOf(l.code)}"/>`)
    .join('\n');
  const urls = available
    .map((l) => `  <url>\n    <loc>${SITE}${pathOf(l.code)}</loc>\n${alternates}\n  </url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
