import { appMeta } from '@/config/app'

export default {
  author: {
    name: 'Андрей Шарапов',
    position: ['UI/UX дизайнер', 'Фронтенд разработчик'],
  },
  host: {
    name: `${appMeta.host.name}`,
    url: `${appMeta.host.url}`,
  },
  site: {
    header: { name: 'Header' },
    navbar: {
      name: 'Navbar',
    },
  },
}
