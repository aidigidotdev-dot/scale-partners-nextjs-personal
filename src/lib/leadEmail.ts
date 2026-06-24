type LeadFieldValue = string | number | boolean | null | undefined;

interface LeadEmailPayload {
  source: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  fields?: Record<string, LeadFieldValue>;
}

export async function sendLeadEmail(payload: LeadEmailPayload) {
  try {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // Email delivery should never block the existing form experience.
  }
}
