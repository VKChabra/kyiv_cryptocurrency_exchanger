import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import lengaugeDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(lengaugeDetector)
  .use(Backend)
  .init({
    whitelist: ['en', 'ru', 'ua'],
    supportedLngs: ['en', 'ru', 'ua'],
    fallbackLng: 'en',
    dubug: false,
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

if (!localStorage.getItem('i18nextLng')) {
  const browserLanguage = navigator.language;
  const initialRegionCode = browserLanguage.split('-')[1].toLowerCase();
  localStorage.setItem('i18nextLng', initialRegionCode);
}

export default i18next;
