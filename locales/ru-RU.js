import { appMeta } from '@/config/app'

export default {
  author: {
    name: 'Андрей Шарапов',
    position: ['UI/UX дизайнер', 'Фронтенд разработчик'],
    job: {
      status: `${appMeta.author.job.status}`,
      title: 'Предложить работу',
    },
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
  projects: {
    recent: 'Недавние проекты',
  },
}
