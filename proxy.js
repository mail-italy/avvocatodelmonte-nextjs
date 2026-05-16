import { NextResponse } from 'next/server';
import { legacyRedirectMap, legacyRedirectRules } from './lib/redirects.mjs';

const PUBLIC_FILE = /\.[^/]+$/;
const EXEMPT_DOTTED_PATHS = new Set(['/robots.txt', '/sitemap.xml', '/llms.txt', '/ai.txt']);

function normalizePathname(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function findLegacyRedirect(pathname) {
  const exactRedirect = legacyRedirectMap.get(pathname);

  if (exactRedirect) {
    return exactRedirect;
  }

  const matchedRule = legacyRedirectRules.find((rule) => rule.pattern.test(pathname));
  return matchedRule?.destination || null;
}

export function proxy(request) {
  const pathname = request.nextUrl.pathname;
  const host = request.headers.get('host') || request.nextUrl.host;
  const isPublicFile = PUBLIC_FILE.test(pathname) && !EXEMPT_DOTTED_PATHS.has(pathname);

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || isPublicFile) {
    return NextResponse.next();
  }

  const normalizedPath = normalizePathname(pathname);
  const redirectedPath = findLegacyRedirect(normalizedPath) || normalizedPath;
  const shouldForceCanonicalHost = host === 'www.avvocatodelmonte.com';
  const isPathCanonical = pathname === redirectedPath;
  const shouldRedirect =
    !isPathCanonical || shouldForceCanonicalHost;

  if (!shouldRedirect) {
    return NextResponse.next();
  }

  const targetUrl = new URL(request.url);
  targetUrl.pathname = redirectedPath;

  if (shouldForceCanonicalHost) {
    targetUrl.protocol = 'https:';
    targetUrl.hostname = 'avvocatodelmonte.com';
    targetUrl.port = '';
  }

  return NextResponse.redirect(targetUrl, 301);
}

export const config = {
  matcher: '/:path*'
};
