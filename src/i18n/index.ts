import i18next from 'i18next';
import { resources, type Locale } from './translations';

export async function createTranslator(locale: Locale) {
  const instance = i18next.createInstance();

  await instance.init({
    lng: locale,
    fallbackLng: 'kn',
    supportedLngs: ['kn', 'en'],
    defaultNS: 'translation',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

  return (key: string) => instance.t(key);
}
