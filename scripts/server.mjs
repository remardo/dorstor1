// Production static server. `serve dist` cannot express host-level rules, so the two
// duplicate-content problems it left — www resolving 200 instead of 301, and http
// answering 302 — are handled here before delegating to the same serve-handler engine
// (and the same dist/serve.json cache rules) that `serve` itself uses.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import handler from 'serve-handler';

// serve-handler does not read serve.json on its own — that was the `serve` CLI's job —
// so the cache rules are loaded here and passed in explicitly.
const config = {
  public: 'dist',
  ...JSON.parse(fs.readFileSync('dist/serve.json', 'utf8')),
};

const PORT = Number(process.env.PORT ?? 3000);
const CANONICAL_HOST = process.env.CANONICAL_HOST ?? 'doorstore.shop';
// Behind a TLS-terminating proxy the origin only ever sees http, so the scheme has to
// come from the forwarded header rather than from the socket.
const TRUST_PROXY = process.env.TRUST_PROXY !== '0';

// serve.json is a deploy detail, not content: it should not be crawlable.
const HIDDEN = new Set(['/serve.json']);

// Search-console verification files must answer 200 at their exact .html URL. Clean URLs
// would 301 them to the extensionless path, which reads as "file not found" to Google and
// Yandex, so they are served straight from disk before the static handler sees them.
const VERIFICATION = /^\/(google[a-z0-9]+|yandex_[a-z0-9]+)\.html$/i;

function redirectTarget(req) {
  const host = (req.headers.host ?? '').toLowerCase().split(':')[0];
  const proto = TRUST_PROXY ? (req.headers['x-forwarded-proto'] ?? 'http') : 'http';
  if (!host || host === 'localhost' || host.startsWith('127.')) return null;

  const wrongHost = host !== CANONICAL_HOST;
  const wrongScheme = proto !== 'https';
  if (!wrongHost && !wrongScheme) return null;
  return `https://${CANONICAL_HOST}${req.url}`;
}

const server = http.createServer((req, res) => {
  const target = redirectTarget(req);
  if (target) {
    // 301, not 302: the duplicate hosts should consolidate, not stay indexable.
    res.writeHead(301, { Location: target, 'Cache-Control': 'public, max-age=3600' });
    res.end();
    return;
  }

  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  const pathname = (req.url ?? '/').split('?')[0];
  if (HIDDEN.has(pathname)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  if (VERIFICATION.test(pathname)) {
    const file = path.join('dist', path.basename(pathname));
    if (fs.existsSync(file)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(file));
      return;
    }
  }

  return handler(req, res, config);
});

server.listen(PORT, () => console.log(`serving dist on :${PORT} (canonical ${CANONICAL_HOST})`));
