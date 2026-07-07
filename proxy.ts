import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(_request: NextRequest) {
  return new NextResponse('Gone', {
    status: 410,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}

export const config = {
  matcher: ['/cgi-bin', '/cgi-bin/:path*'],
};
