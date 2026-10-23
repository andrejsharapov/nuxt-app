export default function ({ $vuetify }) {
  const mode = localStorage.getItem('color-mode') || 'system'
  let isDark

  if (mode === 'dark') isDark = true
  else if (mode === 'light') isDark = false
  else isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  $vuetify.theme.dark = isDark
}
