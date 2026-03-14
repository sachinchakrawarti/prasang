import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import navbar translations
import enNavbar from './locales/en/navbar.json';
import hiNavbar from './locales/hi/navbar.json';
import urNavbar from './locales/ur/navbar.json';

const resources = {
  en: {
    navbar: enNavbar,
  },
  hi: {
    navbar: hiNavbar,
  },
  ur: {
    navbar: urNavbar,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'navbar',
    ns: ['navbar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;