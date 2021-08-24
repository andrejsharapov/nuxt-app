import { appMeta as config } from '../config/app'

export default {
  all: 'Все',
  app: {
    chat: {
      title: 'Чат поддержки',
      loading: {
        message: 'Подождите, пожалуйста',
      },
      state: {
        open: 'Открыть',
        close: 'Закрыть',
      },
    },
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
    updates: 'Обновления',
    category: 'Категория | категория | Нет категории',
    date: {
      default: 'Дата',
    },
    errors: {
      'page-not-found': {
        title: 'Страница не найдена',
        poll: {
          question: 'Как вы думаете, почему вы оказались именно здесь?',
          answers: [
            {
              col: 'orange',
              label: 'Скорее всего, страница, которую я ищу была перемещена',
            },
            {
              col: 'warning',
              label: 'Скорее всего, страница, которую я ищу была переименована',
            },
            {
              col: 'error',
              label:
                'Скорее всего, страница, которую я ищу была удалена самым жестоким образом',
            },
            {
              col: 'success',
              label:
                'Скорее всего, страница, которую я ищу вообще никогда не существовала',
            },
          ],
          result: [
            'Возможно, но это не точно...',
            'Вполне вероятно, что вы правы! Нажмите кнопку ниже для перехода на главную страницу или воспользуйтесь навигацией в левой части сайта, чтобы найти нужную вам страницу. Удачи.',
          ],
          notify: {
            success: {
              group: 'answers',
              type: 'success',
              title: 'Да',
              text: 'Это очень похоже на правду.',
            },
            error: {
              group: 'answers',
              type: 'error',
              title: 'Не не не',
              text: 'Нее... Это слишком жестоко.',
            },
            warning: {
              group: 'answers',
              type: 'warning',
              title: 'Возможно',
              text: 'Но это не точно...',
            },
          },
        },
      },
      'other-errors': {
        title: 'Что-то пошло не так...',
        subtitle: 'Кажется, где-то произошел сбой.',
        messages: [
          'Скорее всего это ошибка техническая, не связанная с вашими действиями. Перейдите на главную страницу и начните работу снова.',
          'Если вам не сложно, пожалуйста, сообщите об этой ошибке, воспользовавшись формой.',
        ],
      },
    },
    lang: {
      name: 'Язык',
      ru: 'Русский',
      en: 'English',
    },
    themes: {
      name: 'Тема',
      light: 'Светлая',
      dark: 'Темная',
      system: 'Системная',
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
  host: {
    name: `${config.host.name}`,
    url: `${config.host.url}`,
  },
  more: {
    base: 'Еще',
    details: 'Подробнее',
    events: 'Больше событий',
  },
  news: {
    about: 'Новости и упоминания в СМИ',
  },
  no: 'Нет',
  poll: {
    title: 'UX Опрос',
    message: 'Примите участие в опросе, и вы поможете сделать сайт лучше.',
    btn: 'Пройти опрос',
  },
  position: {
    right: 'Право | Справа | Направо | Левый',
    left: 'Лево | Слева | Налево | Правый',
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
      title: 'Кейсы',
      message:
        'Ниже представлены категории в области дизайна и разработки. | Выберите нужную вам карточку, чтобы перейти в раздел с кейсами.',
      slug: {
        analytics: 'Веб-аналитика',
        client: {
          about: 'О клиенте',
          issues: 'Проблематика',
          task: {
            title: 'Задача | Задачи',
          },
          'not-found': 'Клиент отсутствует или не был назван умышленно.',
        },
        colors: 'Фирменные цвета',
        deadline: 'Сроки',
        done: 'В ходе работы',
        grid: 'Сетка',
        'header-tabs': ['Инструменты', 'Роли'],
        headings: {
          sections: ['Клиент, проблемы и цели', 'Поиск решения и результат'],
        },
        responsive: {
          title: 'Оптимизация',
          friendliness: 'Удобство для пользователей',
          optimization: 'Работы по оптимизации сайта не проводились.',
          'not-responsive': {
            title: 'Оптимизации нет',
            message: 'Просмотр возможен при разрешении экрана {size}px и выше.',
          },
        },
        result: {
          title: 'Результат',
        },
        sizes: 'Размеры',
        storyboard: 'Раскадровка',
        testimonials: 'Отзыв клиента',
        typography: {
          title: 'Типографика',
          view: ['Для заголовков', 'Для основного текста'],
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
      help: 'Нажмите на номер телефона или адрес, чтобы скопировать.',
    },
    'des-apps': {
      message:
        'О разработке дизайна для приложений я задумался лишь в конце 2019 года, поскольку у меня не было для этого времени и я считал что не смогу, так как не изучал эту сферу. Вдохновляясь работами других дизайнеров, изучая гайды и Киты* я решил попробовать свои силы и разработал в Figma интерфейс {link}. На троечку, но у меня получилось. Эта работа стала для меня отправной точкой.',
    },
    'des-site': {
      message:
        'Я знаю, каждый клиент, прежде чем сделать выбор, хочет увидеть навыки дизайнера и его реальные кейсы, то есть «живые» работы, а не просто таблицу из размытых скриншотов. Это логично, поэтому на этой странице я представил часть своих работ, выполненных в разное время, при помощи разных инструментов. | Глядя на работы, вы можете увидеть мой профессиональный рост и навыки, которыми я обладаю. Узнайте, соответствуют ли они вашим требованиям, прежде чем вы решите разместить заказ.',
      experience: 'Опыт дизайна и прототипирования в годах | Опыт работы в',
    },
    'dev-banners': {
      advantage: {
        prepend:
          'В октябре 2017 я попробовал свои силы в разработке html5-баннеров, поскольку баннеры, использующие HTML5-технологию имеют множество преимуществ:',
        list: [
          'возможность использовать любые элементы веб-страниц в html5-баннерах: текст, изображения, видео и другие',
          'возможность использовать динамические сценарии (раскадровка и аниматик)',
          'файлы HTML5-баннера могут иметь достаточно небольшой размер',
          'с помощью CSS медиа-запросов можно подстраивать элементы баннера под любые размеры экрана',
          'возможность редактирования баннера после его размещения',
        ],
        append:
          'Баннер - это прежде всего имиджевая реклама вашей компании в сети. Дизайн вашего баннера напрямую влияет на лояльность пользователей к вашей компании, товаре или услуге. Иными словами, качество HTML5-баннера напрямую влияет на количество посетителей и конверсию вашего сайта.',
      },
    },
    'dev-site': {
      cms:
        'Изучать веб-разработку я начал давно, еще в 2010 году. Это были мои первые познания в области веб-разработки и дизайна для сайтов, которые со временем переросли в хобби. За эти несколько лет я научился работать с HTML, CSS, JS и успел поработать с различными системами управления контентом сайта (CMS). Но полноценной разработкой сайтов я занялся лишь в 2018 году, когда научился создавать сайты на WordPress и устроился по вакансии веб-разработчика.',
      message:
        'Глядя на работы, вы можете увидеть мой профессиональный рост и навыки, которыми я обладаю. Узнайте, соответствуют ли они вашим требованиям, прежде чем вы решите разместить заказ.',
    },
    drawings: {
      message:
        'В детстве я учился в школе искусств, изучал рисунок, живопись, графику, историю искусств, скульптуру и многое другое. К сожалению, поделиться всеми своими работами я не могу, поскольку многие из них утеряны. Но, в августе 2019 года я нашел несколько старых скетчей, которые вы можете увидеть ниже.',
    },
    illustrations: {
      message:
        'Иллюстрации я создаю не часто, но стараюсь, время от времени, практиковаться, чтобы не терять навыки. На этой страничке представлено несколько сделанных мною иллюстраций, помимо милых рыбок, которых вы можете встретить на страницах сайта.',
    },
    index: {
      title: 'Главная',
      sections: {
        about: {
          message:
            'Добро пожаловать! Меня зовут {author}. Более {years} лет занимаюсь созданием дизайна, версткой и программированием сайтов на различных CMS и сайтбилдерах. Мне нравится создавать что-то новое, искать интересные решения, делать невозможное при помощи простого кода и воплощать свои идеи и идеи клиентов в жизнь.',
          activity: {
            prepend:
              'Я постоянно развиваюсь и совершенствую свои навыки в три простых шага',
            list: [
              {
                message: 'Анализируя работы более опытных разработчиков',
              },
              {
                message: 'Изучая тренды UI/UX дизайна и веб-разработки',
              },
              {
                message: 'Работая с новыми программами и языками',
              },
            ],
            append:
              'Они помогают мне не выпадать из потока стремительно развивающихся областей и всегда быть в курсе свежих событий и тенденций.',
          },
        },
        counters: {
          message:
            'Помимо дизайна и разработки я изучаю маркетинг, поскольку за время работы убедился, что эти три аспекта неотделимы друг от друга. Я имею достаточно знаний и опыта, необходимых для разработки практичного, качественного и функционального продукта, а понимание потребностей пользователей и принципов маркетинга позволяет мне в полной мере заниматься продвижением и поддержкой разработанных проектов.',
        },
        certificates: {
          title: 'Сертификаты',
          message:
            'Чтобы проверить свои силы, я периодически прохожу тестирование и онлайн-курсы по веб-дизайну, разработке и продвижению. В результате прохождения, я получаю электронные сертификаты, с которыми вы можете ознакомиться ниже и на страничке сертификатов.',
        },
        progress: {
          title: 'События и достижения',
          message:
            'За время работы, мною успешно выполнено около {projects} проектов по созданию дизайна и разработке сайтов, более {works} небольших заказов различной сложности: отрисовка элементов и рефакторинг кода, разработка логотипов, корпоративных сайтов и многое другое.',
        },
        skillset: {
          title: 'Умения и навыки',
        },
        works: {
          message:
            'В марте 2019 года я перешел от разработки {from} макетов в программу {to}, в которой теперь занимаюсь прототипированием и разработкой дизайна сайтов и приложений. Посмотрите некоторые из моих работ ниже и на специальной странице.',
        },
      },
    },
    logos: {
      message:
        'В моем портфолио не так много примеров, которыми можно похвастаться, но, представленные ниже работы, являются для меня пусть и небольшими, но, как-никак, достижениями.',
      format: 'Формат',
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
  settings: 'Настройки',
  site: {
    header: {
      name: 'Шапка',
      sticky: 'Закрепить',
    },
    navbar: {
      name: 'Навигация',
    },
    page: {
      construction: 'Страница находится в разработке',
    },
  },
  size: {
    name: 'Размер',
    full: 'Обычная',
    mini: 'Мини',
  },
  source: 'Источник | Исходники',
  'table-of-contents': 'Содержание | содержание',
  support: {
    message: 'Ваш браузер не поддерживает плавающие фреймы!',
  },
  yes: 'Да',
  works: {
    'works-not-found': 'Работы не представлены',
    examples: 'Примеры работ',
    rate: 'Оценить работу с помощью',
    types: 'Тип работ',
  },
}
