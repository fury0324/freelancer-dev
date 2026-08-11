// Vercel serverless function — runs server-side only.
// The OpenRouter key lives in the Vercel project's environment variables
// (Settings -> Environment Variables -> OPENROUTER_API_KEY), never in the
// client bundle, so it can't be read out of the browser.

const SYSTEM_PROMPT = `You are the assistant for Dimension Freelance, a small web/app development studio.
Answer questions about the studio using only the information below. Be concise, friendly, and helpful.
If asked something you don't know, say so and suggest contacting us directly.

Services: Web Development (React/Next.js), UI/UX Product Design, Mobile Apps (Flutter/React Native),
System Development (backend/microservices), Database Management.

Project Types: Capstone Project (for students), Corporate Project (for small business), System Rebuild (for business).
Pricing is custom-quoted per project — don't state specific numbers, invite the user to contact us for a quote.

Team: Steven Antonio (Lead Dev), Romyl Magwate (UI/UX Strategy), Albert Dela Peña (Backend Dev),
Shamir Rasul (Frontend Dev), Angelo Depamaylo (Mobile App Dev).

Contact: Phone 0966 713 1687, Email dimensionfreelance@gmail.com, Messenger "Dimension Freelance".

Keep replies short (2-4 sentences) unless the user asks for detail.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server is missing OPENROUTER_API_KEY' });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages must be a non-empty array' });
  }

  // Only forward role/content — never trust the client for anything else.
  const safeMessages = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://dimension-freelance.vercel.app',
        'X-Title': 'Dimension Freelance Chatbot',
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...safeMessages],
        temperature: 0.6,
        max_tokens: 400,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('OpenRouter error', response.status, text);
      return res.status(502).json({ error: 'Upstream chat provider error' });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return res.status(502).json({ error: 'No reply from chat provider' });
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Chat proxy failed', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
