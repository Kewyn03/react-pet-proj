import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(initReactI18next)
    .use(Backend) // lazy loads translations from /public/locales
    .use(LanguageDetector) // detect user language
    .init({
        ns: ['common'],
        fallbackLng: 'ru',
        lng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
