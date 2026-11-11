import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';
import { env } from '@/lib/env';

const schema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(2000),
  consent: z.boolean(),
  website: z.string().optional().or(z.literal('')),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, code: 'invalid_payload' }, { status: 400 });
  }

  const { name, email, message, consent, website } = parsed.data;
  const honeypot = website?.trim();
  const now = Date.now();

  if (honeypot || !consent || !payload || typeof payload === 'undefined') {
    return NextResponse.json({ ok: false, code: 'invalid_payload' }, { status: 400 });
  }

  const emailResult = await sendEmail({
    to: env.CONTACT_TO_EMAIL,
    from: env.CONTACT_FROM_EMAIL,
    replyTo: email,
    subject: `[Veda AI] Contact: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (!emailResult.ok) {
    return NextResponse.json({ ok: false, code: 'email_failed' }, { status: 500 });
  }

  return NextResponse.json({ ok: true, code: 'sent' });
}
