// NOTE в алфавитном порядке

export const articles = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Статьи',
      description: 'Заметки и обзоры по веб-дизайну и разработке',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Articles',
      description: 'Web design and development notes and reviews',
    }
  }
}

export const cases = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      crumbs: 'Кейсы',
      title: 'Дизайн и разработка',
      description: 'Портфолио веб-дизайнера, фронтенд-разработчика',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases',
      title: 'Designer & Develop',
      description: 'Portfolio of web designer, frontend developer',
    }
  }
}

export const certificates = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Электронные сертификаты',
      description: 'Курсы и тесты на образовательном IT портале - GeekBrains',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Certificates',
      description:
        'Courses and tests on the educational IT portal - GeekBrains',
    }
  }
}

export const coding = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Стиль кода',
      description: 'Примеры работ и качества кода',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Pure code',
      description: 'Examples of work and code quality',
    }
  }
}

export const contact = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Контакты',
      description: 'Всегда на связи, в удобное для вас время!',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Contact',
      description: 'Always in touch, at a convenient time for you!',
    }
  }
}

export const desApps = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      crumbs: 'Кейсы. Дизайн. Приложения',
      title: 'UI/UX App Design',
      description: 'Дизайн приложений — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Apps',
      title: 'UI/UX App Design',
      description: 'App Designer portfolio — examples of work',
    }
  }
}

export const desEmail = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      crumbs: 'Кейсы. Дизайн. Email',
      title: 'Дизайн электронных писем',
      description: 'Дизайн email рассылок — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Email',
      title: 'Email Design',
      description: 'Design email newsletter — examples of work',
    }
  }
}

export const desQuiz = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      crumbs: 'Кейсы. Дизайн. Квиз',
      title: 'Квиз-дизайн',
      description: 'Викторины, тесты, лендинги — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Quiz',
      title: 'Quiz Design',
      description: 'Quiz, tests, landings — examples of work',
    }
  }
}

export const desSite = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      crumbs: 'Кейсы. Дизайн. Сайты',
      title: 'Прототипирование и дизайн',
      description: 'Портфолио веб-дизайнера — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Websites',
      title: 'Prototyping and design',
      description: 'Web designer portfolio — examples of work',
    }
  }
}

export const devBanners = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      crumbs: 'Кейсы. Разработка. Баннеры',
      title: 'Баннеры HTML5',
      description:
        'Разработка HTML5-баннеров для РСЯ, Google КМС, Adfox и других — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Development. Banners',
      title: 'HTML5 Banners',
      description:
        'Development of HTML5 banners for YAN, Google KMS, Adfox and others — examples of work',
    }
  }
}

export const devSite = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      crumbs: 'Кейсы. Разработка. Сайты',
      title: 'Разработка сайтов',
      description: 'Портфолио веб-разработчика — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Development. Websites',
      title: 'Website development',
      description: 'Web developer portfolio — examples of work',
    }
  }
}

export const drawings = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Рисунки',
      description: 'Графика, живопись, скетчи — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Drawings',
      description: 'Graphics, painting, sketches — examples of work',
    }
  }
}

export const illustrations = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      crumbs: 'Кейсы. Дизайн. Иллюстрации',
      title: 'Иллюстрации для сайтов',
      description: 'Иллюстрации для приложений и сайтов — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Illustrations',
      title: 'Illustrations for websites',
      description: 'Illustrations for apps and websites — examples of work',
    }
  }
}
export const logos = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      crumbs: 'Кейсы. Дизайн. Логотипы',
      title: 'Разработка логотипов',
      description: 'Дизайн и разработка логотипов — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Logos',
      title: 'Logo design',
      description: 'Design and development of logos — examples of work',
    }
  }
}

export const photoshop = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Фотошоп',
      description: 'Обработки изображений в Photoshop ДО и ПОСЛЕ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Photoshop',
      description: 'Image processing in Photoshop BEFORE and AFTER',
    }
  }
}
export const pricing = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Простые, предсказуемые цены',
      description: 'Комплексная разработка, SEO-оптимизация и поддержка сайта',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Simple, predictable prices',
      description:
        'Integrated development, SEO optimization and website support',
    }
  }
}

export const projects = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Проекты и идеи',
      description:
        'Список проектов, над которыми я когда-то работал и работаю сейчас',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Projects and ideas',
      description:
        'List of projects that I once worked on and are working on now',
    }
  }
}

export const timeline = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Timeline',
      description: 'График профессиональных достижений и значимых событий',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Timeline',
      description:
        'Schedule of professional achievements and significant events',
    }
  }
}

export const modeling = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: '3D моделирование',
      description: 'Процесс и результаты создания трехмерных объектов',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: '3D Modeling',
      description:
        'The process and results of creating three-dimensional objects',
    }
  }
}
