import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { name, email, phone, prompt, history } = await request.json();
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is missing on the server.');
      return NextResponse.json({
        response: `Hello ${name || 'there'}! I am your Scale Partners AI structuring assistant. Our secure Gemini AI engine is currently finalizing setup, but I am fully ready to answer any questions about Dubai Mainland corporate registry (DET), Free Zones (Meydan, IFZA, DMCC, Shams, etc.), and residency visas. Please write your question to get started!`
      });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const systemInstruction = `You are "Scale Partners UAE AI Advisory Chatbot", an ultra-premium, highly sophisticated corporate engineering virtual assistant in Dubai.
The current founder's details: Name is "${name || 'Valued Founder'}", Corporate Email is "${email || 'Not shared'}", Direct Phone is "${phone || 'Not shared'}".
You are an expert in UAE corporate structuring, including:
- Dubai Mainland (DET approvals, local corporate setup, full trade rights across the domestic market).
- Free Zones (complete 100% tax and duty exemptions, absolute foreign ownership, virtual desks vs physical offices).
- 45+ jurisdictions including Meydan, IFZA, DMCC, Shams, RAKEZ, DWTC.
- The 2026 OECD-aligned 9% Corporate Tax framework, Small Business Relief thresholds (up to AED 3M revenue), exemption mechanisms.
- Sovereign Residency Tracks (10-Year Gold and standard staff visas).
- Quick digital corporate account provisioning through priority digital banks like Wio Business, secure compliance.

Tone & Style Guidelines:
- Speak with ultimate legal and strategic distinction, prestige, and executive polish.
- Keep answers crisp, structured, highly factual, and extremely professional. Use single spacing, bullet points, and highlight critical numbers.
- Ensure you guide them to lock in their custom license structures using our instant cost calculator or speak to our advisory board.
- Avoid low-quality AI conversational phrases. Speak like an elite Dubai structuring legal executive.`;

    const contentsForGemini = [];
    if (history && Array.isArray(history)) {
      for (const h of history) {
        contentsForGemini.push({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        });
      }
    }
    contentsForGemini.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: contentsForGemini,
      config: {
        systemInstruction,
        temperature: 0.6,
      }
    });

    return NextResponse.json({ response: response.text });
  } catch (error: any) {
    console.error('Gemini Chatbot Error:', error);
    return NextResponse.json({ error: error?.message || 'Internal server error.' }, { status: 500 });
  }
}
