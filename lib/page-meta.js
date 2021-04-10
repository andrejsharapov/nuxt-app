// NOTE в алфавитном порядке

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

export const drawings = (el) => {
  if (el.$i18n.locale === 'ru') {
    return {
      title: 'Рисунки',
      description: 'Графика, живопись, скетчи — примеры работ',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Drawings',
      description: 'Graphics, painting, sketches - examples of work',
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
      description: 'Illustrations for apps and websites - examples of work',
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
