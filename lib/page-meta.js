// NOTE в алфавитном порядке

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
