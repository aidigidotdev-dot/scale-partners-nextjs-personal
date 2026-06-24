import { NextResponse } from 'next/server';

type LeadFieldValue = string | number | boolean | null | undefined;

interface LeadEmailPayload {
  source?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  fields?: Record<string, LeadFieldValue>;
}

const escapeHtml = (value: LeadFieldValue) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const formatFields = (fields: Record<string, LeadFieldValue> = {}) =>
  Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(([key, value]) => ({ key, value }));

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.LEAD_EMAIL_FROM;
    const to = (process.env.LEADS_EMAILS || '')
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean);

    if (!apiKey || !from || to.length === 0) {
      return NextResponse.json(
        { error: 'Lead email environment variables are not configured.' },
        { status: 500 }
      );
    }

    const payload = (await request.json()) as LeadEmailPayload;
    const source = payload.source || 'Website Lead';
    const fieldRows = formatFields(payload.fields);

    const htmlRows = [
      ['Source', source],
      ['Name', payload.name],
      ['Email', payload.email],
      ['Phone', payload.phone],
      ['Message', payload.message],
      ...fieldRows.map(({ key, value }) => [key, value] as [string, LeadFieldValue]),
    ]
      .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
      .map(
        ([key, value]) =>
          `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;">${escapeHtml(key)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`
      )
      .join('');

    const text = [
      `Source: ${source}`,
      `Name: ${payload.name || ''}`,
      `Email: ${payload.email || ''}`,
      `Phone: ${payload.phone || ''}`,
      payload.message ? `Message: ${payload.message}` : '',
      ...fieldRows.map(({ key, value }) => `${key}: ${value}`),
    ]
      .filter(Boolean)
      .join('\n');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: payload.email || undefined,
        subject: `New Lead - ${source}${payload.name ? ` - ${payload.name}` : ''}`,
        html: `
          <div style="font-family:Arial,sans-serif;color:#111827;">
            <h2 style="margin:0 0 12px;">New Scale Partners Lead</h2>
            <table style="border-collapse:collapse;width:100%;max-width:720px;">${htmlRows}</table>
          </div>
        `,
        text,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      return NextResponse.json({ error: 'Resend email failed.', details }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Lead email failed.' }, { status: 500 });
  }
}
