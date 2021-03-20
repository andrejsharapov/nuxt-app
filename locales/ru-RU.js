import { appMeta as config } from '../config/app'

export default {
  app: {
    loading: 'Загружаемся',
  },
  author: {
    name: 'Андрей Шарапов',
    position: ['UI/UX дизайнер', 'Фронтенд разработчик'],
    job: {
      status: `${config.author.job.status}`,
      title: 'Предложить работу',
    },
  },
  host: {
    name: `${config.host.name}`,
    url: `${config.host.url}`,
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
  poll: {
    title: 'UX Опрос',
    message: 'Примите участие в опросе, и вы поможете сделать сайт лучше.',
    btn: 'Пройти опрос',
  },
  projects: {
    recent: 'Недавние проекты',
    'not-found': 'Нет завершенных проектов.',
  },
}
