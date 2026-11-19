import { defaultLocale } from '~/locales/i18n'

export default function ({ route, redirect }) {
  const re = new RegExp(`^/${defaultLocale}(/|$)`)
  if (!re.test(route.path)) return

  const stripped = route.path.replace(re, '/') || '/'
  redirect(301, stripped)
}
