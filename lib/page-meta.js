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
