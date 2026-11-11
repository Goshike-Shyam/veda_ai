# Veda AI Technologies

This project is the parent brand website for Veda AI Technologies and Student Assistant.

## Local development

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and fill in the values
3. Start the app: `npm run dev`
4. Visit `http://localhost:3000`

## How to add a language

1. Copy `messages/en.json` to a new locale file, for example `messages/hi.json`.
2. Add the locale to `src/i18n/locales.ts`.
3. Run `npm run i18n:check`.
4. Update any locale-specific metadata and navigation labels as needed.

## Legal review before launch

This site contains legal and privacy scaffolding only. Complete a legal review before public launch and before adding any regulated claims, registration numbers, or customer references.
