import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { translationsEn, translationsEs, translationsRu } from './translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      es: { translation: translationsEs },
      ru: { translation: translationsRu },
    },
    // lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
