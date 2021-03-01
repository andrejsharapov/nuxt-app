import { appMeta } from '@/config/app'

export default {
  author: {
    name: 'Andrej Sharapov',
    position: ['UI/UX Designer', 'Frontend Developer'],
  },
  host: {
    name: `${appMeta.host.name}`,
    url: `${appMeta.host.url}`,
  },
  site: {
    header: { name: 'Шапка' },
    navbar: {
      name: 'Навигация',
    },
  },
}
