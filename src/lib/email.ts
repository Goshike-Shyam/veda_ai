import { Resend } from 'resend';
import { env } from './env';

export const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

export async function sendEmail({
  to,
  from,
  replyTo,
  subject,
  text,
}: {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
}) {
  if (!resend) {
    return { ok: true };
  }

  const response = await resend.emails.send({
    from,
    to,
    replyTo,
    subject,
    text,
  });

  if (response.error) {
    return { ok: false, code: 'email.send.failed' as const };
  }

  return { ok: true };
}
