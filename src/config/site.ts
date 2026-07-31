import type { Locale } from '../i18n/translations';

const configuredOrigin = import.meta.env.PUBLIC_MUNDHE_BANNI_ORIGIN?.trim();

export const officialOrigin = (configuredOrigin || 'https://mundhebanni.org').replace(/\/$/, '');

export function officialPath(locale: Locale, path = '') {
  const normalizedPath = path.replace(/^\//, '');
  return `${officialOrigin}/${locale}/${normalizedPath}`;
}

export const externalLinks = {
  instagram: 'https://www.instagram.com/mundhebanni/',
  youtube: 'https://www.youtube.com/@mundhebanni',
  spotify: 'https://open.spotify.com/show/5aQLOqjGBXVhVI38Yas0uq',
  linktree: 'https://linktr.ee/mundhebanni',
  whatsapp: 'https://chat.whatsapp.com/DOcdDdTum1t5X5qsdzUZxO',
} as const;

export const brandAssets = {
  logo: `${officialOrigin}/mb-logo.png`,
  logoWhite: `${officialOrigin}/mb-logo-white.png`,
  communityHero: `${officialOrigin}/meetups/hubli-desktop.webp`,
  favicon: `${officialOrigin}/favicon.png`,
} as const;
