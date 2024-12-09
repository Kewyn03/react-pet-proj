import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(Backend) // lazy loads translations from /public/locales
    .use(LanguageDetector) // detect user language
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        debug: true,
        // preload needed for loki, SSR
        preload: ['en'],
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
