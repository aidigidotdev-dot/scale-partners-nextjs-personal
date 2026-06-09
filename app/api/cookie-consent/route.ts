import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { consentId, essential, analytics, marketing, userAgent } = await request.json();

    if (!consentId) {
      return NextResponse.json({ error: 'Consent ID is required.' }, { status: 400 });
    }

    // Retrieve and securely hash the client IP address (GDPR Compliance: No raw IP logging)
    const xForwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = xForwardedFor ? xForwardedFor.split(',')[0].trim() : '127.0.0.1';
    
    // Hash the IP with a local salt to prevent reverse lookup mapping
    const salt = process.env.CONSENT_SALT || 'scale_partners_regulatory_salt_2026';
    const ipHash = crypto.createHmac('sha256', salt).update(clientIp).digest('hex');

    const logEntry = {
      consentId,
      timestamp: new Date().toISOString(),
      essential: !!essential,
      analytics: !!analytics,
      marketing: !!marketing,
      userAgent: userAgent || 'Unknown',
      ipHash
    };

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Append to logs file in JSON Lines format (JSONL)
    const logPath = path.join(dataDir, 'consent_logs.jsonl');
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');

    return NextResponse.json({ success: true, message: 'Consent logged successfully.' });
  } catch (error: any) {
    console.error('Cookie Consent Logging Error:', error);
    return NextResponse.json({ error: error?.message || 'Internal server error.' }, { status: 500 });
  }
}
