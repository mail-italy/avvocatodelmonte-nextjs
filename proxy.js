import { NextResponse } from 'next/server';
import { legacyRedirectMap } from './lib/redirects.mjs';

const PUBLIC_FILE = /\.[^/]+$/;
const EXEMPT_DOTTED_PATHS = new Set(['/robots.txt', '/sitemap.xml', '/llms.txt', '/ai.txt']);

export function proxy(request) {
  const pathname = request.nextUrl.pathname;
  const host = request.headers.get('host') || request.nextUrl.host;
  const isPublicFile = PUBLIC_FILE.test(pathname) && !EXEMPT_DOTTED_PATHS.has(pathname);

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || isPublicFile) {
    return NextResponse.next();
  }

  const normalizedPath = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const redirectedPath = legacyRedirectMap.get(normalizedPath) || normalizedPath;
  const shouldForceCanonicalHost = host === 'www.avvocatodelmonte.com';
  const shouldRedirect =
    normalizedPath !== pathname || redirectedPath !== pathname || shouldForceCanonicalHost;

  if (!shouldRedirect) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = redirectedPath;

  if (shouldForceCanonicalHost) {
    url.protocol = 'https:';
    url.hostname = 'avvocatodelmonte.com';
    url.port = '';
  }

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: '/:path*'
};
