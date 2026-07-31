# Munde Banni landing-page concept

A Kannada-first, bilingual landing-page proposal for Munde Banni. The concept keeps the official movement’s orange/navy identity and community mission while giving its stories a more editorial, premium presentation.

## Stack

- Astro 7 for static rendering and routing
- React 19 islands for the intro and responsive navigation
- Tailwind CSS 4 for the design system
- i18next for Kannada/English copy
- pnpm for package management

## Run locally

```bash
pnpm install
pnpm dev
```

Production validation:

```bash
pnpm build
pnpm preview
```

## Routes

- `/` — Kannada-first landing page
- `/en/` — English landing page

The language switch is a normal link between prerendered pages, so it remains fast and works without client-side routing.

## Integration configuration

Two optional public environment variables keep deployment details out of the components:

```bash
PUBLIC_SITE_ORIGIN=https://your-deployed-origin.example
PUBLIC_MUNDHE_BANNI_ORIGIN=https://mundhebanni.org
```

- `PUBLIC_SITE_ORIGIN` controls canonical and alternate-language URLs.
- `PUBLIC_MUNDHE_BANNI_ORIGIN` controls official localized links and brand assets.
- Social, podcast, and community destinations live in `src/config/site.ts`.
- All Kannada and English copy lives in `src/i18n/translations.ts`.

## Suggested integration path

The existing Munde Banni site currently serves a Vite/React application. The lowest-risk handoff is to build this Astro project as static output and mount its generated `dist` routes behind the current domain. This allows the team to test the concept without rewriting the existing application.

Recommended rollout:

1. Deploy the static build to a private preview URL.
2. Review copy, episode IDs, community links, and supporter routes with the team.
3. Mount Kannada and English output at the team’s preferred public paths through the existing reverse proxy or hosting configuration.
4. Move the official logo and meetup photograph into the team-controlled asset pipeline before production.
5. Preserve the existing analytics, WhatsApp widget, newsletter, and supporter tracking when switching traffic.

If the team prefers a native React integration, the visual sections can be ported one at a time; `Navigation.tsx`, `IntroReveal.tsx`, the design tokens, and the translation resources already transfer directly.

## Brand and content sources

- Official site: https://mundhebanni.org/kn/
- YouTube: https://www.youtube.com/@mundhebanni
- Instagram: https://www.instagram.com/mundhebanni/
- Linktree: https://linktr.ee/mundhebanni

Brand images are referenced from the official site rather than duplicated in this proposal. Confirm usage and move approved files into the production asset pipeline during integration.
