import { appMeta as config } from '../config/app'

export default {
  app: {
    meta: {
      title: `${config.app.ru.title}`,
      description: `${config.app.ru.description}`,
    },
    loading: 'Загружаемся',
    'general-information': 'Общая информация',
    'last-revised': 'Последняя редакция',
    license: 'Лицензия',
    privacy: 'Конфиденциальность',
    terms: 'Условия использования',
    updates: 'Обновления',
    themes: {
      light: 'Светлая тема',
      dark: 'Темная тема',
    },
    cookie: {
      message:
        'На сайте используются средства аналитики, для анализа действий пользователя, в целях улучшения качества сайта.',
    },
  },
  author: {
    name: 'Андрей Шарапов',
    position: ['UI/UX дизайнер', 'Фронтенд разработчик'],
    job: {
      status: `${config.author.job.status}`,
      title: 'Предложить работу',
    },
    region: 'Россия, Москва',
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
  more: {
    base: 'Еще',
    details: 'Подробнее',
    events: 'Больше событий',
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
  pages: {
    shown: 'Показано на странице',
    contact: {
      message:
        'Вы можете связаться со мной через указанные выше социальные сети или использовать другие контакты.',
    },
    timeline: {
      message:
        'Здесь вы можете увидеть ленту моих профессиональных достижений и наиболее значимых для меня событий. Я надеюсь, что это побудит вас следовать своим мечтам и записывать свои достижения на этом пути!',
    },
  },
  works: {
    'works-not-found': 'Работы не представлены',
  },
}
