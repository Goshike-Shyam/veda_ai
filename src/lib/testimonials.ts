import { z } from 'zod';
import { env } from '@/lib/env';

const testimonialSchema = z.object({
  items: z.array(
    z.object({
      displayName: z.string(),
      userRole: z.string(),
      feedbackText: z.string(),
    }),
  ),
});

export type PublicTestimonial = {
  displayName: string;
  userRole: string;
  feedbackText: string;
};

export async function getTestimonials(): Promise<PublicTestimonial[]> {
  const apiUrl = env.STUDENT_ASSISTANT_API_URL;
  if (!apiUrl) {
    return [];
  }

  try {
    const controller = new AbortController();
    const timeout = AbortSignal.timeout ? AbortSignal.timeout(4000) : undefined;
    if (timeout) {
      controller.signal.addEventListener('abort', () => {}, { once: true });
      const t = timeout;
      const original = controller.signal;
      // In browsers, AbortSignal.timeout is static, so we use the provided signal directly.
      if (original) {
        // noop for compatibility
      }
    }

    const response = await fetch(apiUrl, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(4000),
    });

    if (!response.ok) {
      return [];
    }

    const payload = await response.json();
    const parsed = testimonialSchema.safeParse(payload);
    if (!parsed.success) {
      return [];
    }

    return parsed.data.items.slice(0, 4).map((item) => ({
      ...item,
      feedbackText: truncateAtWordBoundary(item.feedbackText, 240),
    }));
  } catch {
    return [];
  }
}

function truncateAtWordBoundary(value: string, max = 240) {
  if (value.length <= max) return value;
  const trimmed = value.slice(0, max).trim();
  const boundary = trimmed.lastIndexOf(' ');
  return `${trimmed.slice(0, boundary === -1 ? max : boundary)}…`;
}
