// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from './en/translation.json';
import translationHU from './hu/translation.json';


const resources = {
  en: {
    translation: translationEN,
  },
  hu: {
    translation: translationHU,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
    returnEmptyString: false,
    keySeparator: '..',
  });

export default i18n;
