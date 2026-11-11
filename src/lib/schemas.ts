import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'form.validation.name').max(120),
  email: z.string().trim().email('form.validation.email'),
  message: z.string().trim().min(10, 'form.validation.messageMin').max(2000, 'form.validation.messageMax'),
  consent: z.boolean().refine((value) => value, 'form.validation.consent'),
  website: z.string().optional().or(z.literal('')),
  createdAt: z.number().optional(),
});

export const partnerSchema = z.object({
  name: z.string().trim().min(2, 'form.validation.name').max(120),
  organisation: z.string().trim().min(2, 'form.validation.organisation').max(160),
  type: z.enum(['school-institution', 'government-program', 'ngo', 'investor', 'other']),
  email: z.string().trim().email('form.validation.email'),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  interest: z.enum(['student-assistant', 'juriq', 'general']),
  message: z.string().trim().min(10, 'form.validation.messageMin').max(2000, 'form.validation.messageMax'),
  consent: z.boolean().refine((value) => value, 'form.validation.consent'),
  website: z.string().optional().or(z.literal('')),
  createdAt: z.number().optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
export type PartnerValues = z.infer<typeof partnerSchema>;
