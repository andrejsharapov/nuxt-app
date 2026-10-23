export default function ({ route, redirect }) {
  // /ru, /ru/, /ru/anything → без префикса
  if (route.path === '/ru' || route.path.startsWith('/ru/')) {
    const stripped = route.path.replace(/^\/ru(\/|$)/, '/') || '/'
    redirect(301, stripped)
  }
}
