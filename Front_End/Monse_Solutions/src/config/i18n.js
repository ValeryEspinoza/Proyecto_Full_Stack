// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones para inglés y español
import enTranslation from '../locales/en/welcome.json';
import esTranslation from '../locales/es/bienvenida.json'; 


i18n
  .use(initReactI18next) // Conecta react-i18next
  .init({
    resources: {
        
            en: {
              translation: enTranslation, // Traducciones en inglés
              //texto: enTranslation2, 
            },
            es: {
              translation: esTranslation, // Traducciones en español
              //texto: esTranslation1,
            },
         
          
    },
    lng: 'en', // Idioma por defecto: inglés
    fallbackLng: 'es', // Idioma de respaldo
    interpolation: {
    escapeValue: false, // React maneja la seguridad por defecto
    },
  });

export default i18n;
