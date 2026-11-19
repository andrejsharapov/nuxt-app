export const locales = [
  { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'En' },
  { code: 'ru', iso: 'ru-RU', file: 'ru-RU.js', name: 'Ru' },
]

export const defaultLocale = 'ru'

// Производные, чтобы никто больше не хардкодил ['en', 'ru']
export const localeCodes = locales.map((l) => l.code)

export const isLocale = (code) => localeCodes.includes(code)

// Ключ cookie, которым запоминаем выбор пользователя
export const LOCALE_COOKIE_KEY = 'i18n_redirected'
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 год
