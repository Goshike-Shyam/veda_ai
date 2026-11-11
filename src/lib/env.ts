import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().default('https://example.com'),
  NEXT_PUBLIC_STUDENT_ASSISTANT_URL: z.string().default('https://example.com/student-assistant'),
  STUDENT_ASSISTANT_API_URL: z.string().optional().default(''),
  RESEND_API_KEY: z.string().optional().default(''),
  CONTACT_TO_EMAIL: z.string().default('hello@vedaai.tech'),
  CONTACT_FROM_EMAIL: z.string().default('Veda AI <hello@vedaai.tech>'),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional().default(''),
  TURNSTILE_SECRET_KEY: z.string().optional().default(''),
  NEXT_PUBLIC_ALLOW_INDEXING: z.string().optional().default('false'),
});

export const env = envSchema.parse(process.env);
