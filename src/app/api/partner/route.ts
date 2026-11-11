import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';
import { env } from '@/lib/env';

const schema = z.object({
  name: z.string().trim().min(2),
  organisation: z.string().trim().min(2),
  type: z.enum(['school-institution', 'government-program', 'ngo', 'investor', 'other']),
  email: z.string().trim().email(),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  interest: z.enum(['student-assistant', 'juriq', 'general']),
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

  const { name, organisation, type, email, phone, interest, message, consent, website } = parsed.data;
  const honeypot = website?.trim();
  if (honeypot || !consent) {
    return NextResponse.json({ ok: false, code: 'invalid_payload' }, { status: 400 });
  }

  const emailResult = await sendEmail({
    to: env.CONTACT_TO_EMAIL,
    from: env.CONTACT_FROM_EMAIL,
    replyTo: email,
    subject: `[Veda AI] Partnership: ${name}`,
    text: `Name: ${name}\nOrganisation: ${organisation}\nType: ${type}\nEmail: ${email}\nPhone: ${phone || 'n/a'}\nInterest: ${interest}\n\n${message}`,
  });

  if (!emailResult.ok) {
    return NextResponse.json({ ok: false, code: 'email_failed' }, { status: 500 });
  }

  return NextResponse.json({ ok: true, code: 'sent' });
}
