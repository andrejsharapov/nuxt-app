import { defaultLocale, isLocale, LOCALE_COOKIE_KEY } from '~/locales/i18n'

export default function ({ app, route, redirect, req }) {
  if (route.path !== '/') return

  const cookie = app.$cookies.get(LOCALE_COOKIE_KEY)

  // Пользователь выбрал en, ведём на /en, даже с /
  if (cookie && isLocale(cookie) && cookie !== defaultLocale) {
    redirect('/' + cookie)
    return
  }
  // Выбрал default (ru) или что-то неизвестное → не трогаем
  if (cookie) return

  // Первый заход → определяем по Accept-Language
  let primary = ''
  if (process.server) {
    const accept = (req.headers['accept-language'] || '').split(',')[0]
    primary = accept.split('-')[0].toLowerCase()
  } else {
    primary = (navigator.languages?.[0] || navigator.language || '')
      .split('-')[0]
      .toLowerCase()
  }

  // Пустой заголовок или default → остаёмся на /
  if (!primary || primary === defaultLocale) return
  if (isLocale(primary)) redirect('/' + primary)
}
