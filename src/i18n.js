import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { default as en } from './../dictionary/en.json';
import { default as es } from './../dictionary/es.json';

const resources = {
  en,
  es,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // for now app just works in spanish but is ready to add english if required
  supportedLngs: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
