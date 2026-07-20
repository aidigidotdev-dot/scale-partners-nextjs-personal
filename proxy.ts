import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const maintenanceHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Scale Partners | Maintenance</title>
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: #ffffff;
      background: radial-gradient(circle at top left, rgba(34, 197, 94, 0.18), transparent 34%),
        radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.10), transparent 28%),
        linear-gradient(135deg, #07140b 0%, #0b2e16 100%);
    }
    main {
      display: flex;
      min-height: 100vh;
      align-items: center;
      padding: 64px 24px;
    }
    .wrap { width: min(100%, 896px); margin: 0 auto; }
    .label {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: rgba(255, 255, 255, 0.08);
      padding: 10px 16px;
      color: rgba(209, 250, 229, 0.92);
      font-size: 13px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    .dot { width: 8px; height: 8px; border-radius: 999px; background: #22c55e; }
    h1 {
      max-width: 760px;
      margin: 32px 0 0;
      font-size: clamp(40px, 7vw, 72px);
      line-height: 1.04;
      font-weight: 300;
    }
    p {
      max-width: 680px;
      margin: 24px 0 0;
      color: rgba(236, 253, 245, 0.82);
      font-size: 18px;
      line-height: 1.75;
    }
    .links {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      max-width: 760px;
      margin-top: 40px;
    }
    a {
      display: block;
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: rgba(255, 255, 255, 0.08);
      padding: 18px 20px;
      color: #ffffff;
      text-decoration: none;
    }
    small {
      display: block;
      margin-bottom: 8px;
      color: rgba(167, 243, 208, 0.75);
      font-size: 12px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    @media (max-width: 640px) {
      main { padding: 48px 20px; }
      .links { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <main>
    <div class="wrap">
      <div class="label"><span class="dot"></span>Maintenance Mode</div>
      <h1>Scale Partners is getting a quick upgrade.</h1>
      <p>We are performing scheduled maintenance and will be back online shortly. For urgent business setup, visa, or advisory requests, please contact our team directly.</p>
      <div class="links">
        <a href="tel:+971585682558"><small>Call</small>+971 58 568 2558</a>
        <a href="mailto:info@scalepartners.ae"><small>Email</small>info@scalepartners.ae</a>
      </div>
    </div>
  </main>
</body>
</html>`;

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/cgi-bin')) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'x-robots-tag': 'noindex, nofollow',
      },
    });
  }

  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'retry-after': '3600',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next|assets|favicon.ico|robots.txt|sitemap.xml|llms.txt).*)', '/cgi-bin', '/cgi-bin/:path*'],
};
