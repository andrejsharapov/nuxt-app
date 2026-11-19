import {
  isLocale,
  LOCALE_COOKIE_KEY,
  LOCALE_COOKIE_MAX_AGE,
} from '~/locales/i18n'

export default function ({ app }, inject) {
  // Единственная точка переключения языка: пишет cookie + переключает локаль (nuxt-i18n сам навигирует на нужный URL)
  inject('switchLocale', (code) => {
    if (!isLocale(code)) return
    if (app.i18n.locale === code) return

    app.$cookies.set(LOCALE_COOKIE_KEY, code, {
      path: '/',
      maxAge: LOCALE_COOKIE_MAX_AGE,
      sameSite: 'lax',
    })

    app.i18n.setLocale(code)
  })
}
