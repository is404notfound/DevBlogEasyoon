// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './public/locales/en/common.json';
import translationKO from './public/locales/ko/common.json';
import translationJA from './public/locales/ja/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: {
                translation: translationEN
        },
        ko: {
                translation: translationKO
        },
        ja: {
                translation: translationJA
        }
    },
    lng: 'en', // default language
    fallbackLng: '',
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

export default i18n;
