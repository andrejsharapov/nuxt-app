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
    page: {
      construction: 'Страница находится в разработке',
    },
  },
  btn: {
    go: {
      to: 'Перейти',
      back: 'Назад',
      home: 'На главную',
    },
    'report-problem': 'Сообщить о проблеме',
  },
  projects: {
    recent: 'Недавние проекты',
    'not-found': 'Нет завершенных проектов.',
  },
}
