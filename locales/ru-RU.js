import { appMeta as config } from '../config/app'

export default {
  app: {
    cookie: {
      message:
        'На сайте используются средства аналитики, для анализа действий пользователя, в целях улучшения качества сайта.',
    },
    'general-information': 'Общая информация',
    'last-revised': 'Последняя редакция',
    license: 'Лицензия',
    loading: 'Загружаемся',
    meta: {
      title: `${config.app.ru.title}`,
      description: `${config.app.ru.description}`,
    },
    privacy: 'Конфиденциальность',
    terms: 'Условия использования',
    themes: {
      light: 'Светлая тема',
      dark: 'Темная тема',
    },
  },
  author: {
    title: 'Автор | автор',
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
    download: 'Скачать',
    view: 'Просмотр | Смотреть',
    'report-problem': 'Сообщить о проблеме',
  },
  category: 'Категория | категория | Нет категории',
  date: {
    default: 'Дата',
  },
  editor: 'Редактор',
  events: {
    before: 'До',
    after: 'После',
    updates: 'Обновления',
    show: 'Показать | показать',
    hide: 'Скрыть | скрыть',
    prev: 'Назад | Предыдущая | Предыдущий',
    next: 'Вперед | Следующая | Следующий',
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
    articles: {
      title: 'Статьи',
    },
    cases: {
      message:
        'Ниже представлены категории в области дизайна и разработки. | Выберите нужную вам карточку, чтобы перейти в раздел с кейсами.',
      slug: {
        'header-tabs': ['Инструменты', 'Роли'],
        headings: {
          sections: ['Клиент, проблемы и цели', 'Поиск решения и результат'],
        },
        client: {
          about: 'О клиенте',
          issues: 'Проблематика',
          task: {
            title: 'Задача | Задачи',
          },
          'not-found': 'Клиент отсутствует или не был назван умышленно.',
          done: 'В ходе работы',
          colors: 'Фирменные цвета',
        },
      },
    },
    certificates: {
      message:
        'За время работы, мною было пройдено несколько тестов и онлайн-курсов по веб-дизайну, разработке, маркетингу и некоторым другим областям. Ниже вы можете ознакомиться с сертификатами о прохождении.',
    },
    coding: {
      message: [
        'Написать хороший код сразу не всегда удается, поэтому его приходится тестировать в отдельных от сайта программах и редакторах. Я часто экспериментирую с кодом в поисках вдохновения или в попытках самосовершенствования и иногда у меня получаются прикольные штуки, некоторыми из которых я делюсь с другими разработчиками на',
        'и с радостью поделюсь с вами.',
      ],
    },
    contact: {
      message:
        'Вы можете связаться со мной через указанные выше социальные сети или использовать другие контакты.',
    },
    'des-site': {
      message:
        'Я знаю, каждый клиент, прежде чем сделать выбор, хочет увидеть навыки дизайнера и его реальные кейсы, то есть «живые» работы, а не просто таблицу из размытых скриншотов. Это логично, поэтому на этой странице я представил часть своих работ, выполненных в разное время, при помощи разных инструментов. | Глядя на работы, вы можете увидеть мой профессиональный рост и навыки, которыми я обладаю. Узнайте, соответствуют ли они вашим требованиям, прежде чем вы решите разместить заказ.',
      experience: 'Опыт дизайна и прототипирования в годах | Опыт работы в',
    },
    drawings: {
      message:
        'В детстве я учился в школе искусств, изучал рисунок, живопись, графику, историю искусств, скульптуру и многое другое. К сожалению, поделиться всеми своими работами я не могу, поскольку многие из них утеряны. Но, в августе 2019 года я нашел несколько старых скетчей, которые вы можете увидеть ниже.',
    },
    home: {
      title: 'Главная',
    },
    illustrations: {
      message:
        'Иллюстрации я создаю не часто, но стараюсь, время от времени, практиковаться, чтобы не терять навыки. На этой страничке представлено несколько сделанных мною иллюстраций, помимо милых рыбок, которых вы можете встретить на страницах сайта.',
    },
    logos: {
      message:
        'В моем портфолио не так много примеров, которыми можно похвастаться, но, представленные ниже работы, являются для меня пусть и небольшими, но, как-никак, достижениями.',
    },
    photoshop: {
      message:
        'В 2010 году я впервые познакомился с фотошопом. Тогда я создал «ВКонтaкте» сообщество {link} и начал разрабатывать дизайн для групп и макеты для сайтов.',
      games:
        'В том же году «ВКонтaкте» запустила вики-разметку, и в процессе ее изучения я создал несколько вики-игр, для реализации которых потребовались знания Фотошопа. Некоторые игры все еще частично работают, поэтому вы можете присоединиться к сообществу и попробовать такие игры, как: Crusader, Sims и Пенальти.',
      now:
        'В последнее время я все реже использую фотошоп, но стараюсь не забывать о нем и поддерживать свои навыки, поэтому время от времени я обрабатываю фотографии, некоторые из которых вы можете увидеть ниже.',
    },
    projects: {
      message:
        'Часто идеи, рожденные в голове, остаются лишь идеей. Поэтому я стараюсь воплощать свои идеи в реальность и некоторые из них превратились в масштабные проекты.',
    },
    shown: 'Показано на странице',
    timeline: {
      message:
        'Здесь вы можете увидеть ленту моих профессиональных достижений и наиболее значимых для меня событий. Я надеюсь, что это побудит вас следовать своим мечтам и записывать свои достижения на этом пути!',
    },
  },
  search: {
    label: 'Поиск',
    placeholder: 'Начните вводить текст...',
    found: 'По вашему запросу найдено материалов.',
    'not-found': 'Очень жаль, но по вашему запросу ничего найдено.',
  },
  source: 'Источник | Исходники',
  'table-of-contents': 'Содержание | содержание',
  works: {
    'works-not-found': 'Работы не представлены',
    examples: 'Примеры работ',
    types: 'Тип работ',
  },
}
