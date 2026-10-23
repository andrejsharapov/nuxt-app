export default function ({ app, route, redirect, req }) {
  if (route.path !== '/') return

  const cookie = app.$cookies.get('i18n_redirected')

  // Пользователь выбрал en, ведём на /en, даже с /
  if (cookie === 'en') {
    redirect('/en')
    return
  }
  // Выбрал ru или что-то ещё, не трогаем
  if (cookie) return

  // Первый заход → определяем по найденному языку
  let primary = ''
  if (process.server) {
    const accept = (req.headers['accept-language'] || '').split(',')[0]
    primary = accept.split('-')[0].toLowerCase()
  } else {
    primary = (navigator.languages?.[0] || navigator.language || '')
      .split('-')[0]
      .toLowerCase()
  }

  // Пустой заголовок или ru → дефолт (ru)
  if (!primary || primary === 'ru') return
  redirect('/en')
}
