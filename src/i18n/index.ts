import ru from './ru.json'
import en from './en.json'
import { createI18n } from 'vue-i18n'

const browserLanguage = navigator.language.slice(0,3),
      stringified = localStorage.getItem('task-tracker-config') as string,
      l = JSON.parse(stringified)?.language,
      locale = l ? l : browserLanguage ? browserLanguage : 'en',
      options = {
        locale,
        fallbackLocale: process.env.VUE_APP_DEFAULT_LANG
      },
      languages = {
        ru,
        en
      }
const messages = Object.assign(languages),
      i18n = createI18n({
          legacy: true,
          ...options,
          messages
      })

export { i18n, messages, locale }