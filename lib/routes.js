const langs = ['en', 'ru']

const desEmail = [
  //
  'email-im-kosmetik',
  'email-lamoda',
  'email-ostin',
]

const desLogo = [
  'logo-angel-wings',
  'logo-bullking',
  'logo-click',
  'logo-doors',
  'logo-eleganto',
  'logo-photofood',
  'logo-progbooks',
  'logo-rpn-sphere',
  'logo-rpn-sphere-blue',
  'logo-wine',
]

const desQuiz = [
  //
  'quiz-coffee',
  'quiz-nutitravel',
]

const desSite = [
  'design-christmas-agency',
  'design-alpari',
  'design-cactus',
  'design-forest-fi',
  'design-nuti-travel',
  'design-sk-design',
  'design-unicorn-school',
]

const devBanner = [
  'advertising-240x400',
  'alpari-728x90',
  'chatovod-240x400',
  'gk-rte-240x400',
  'looking-for-a-job-240x400',
  'ucalc-240x400',
  'ucalc-728x90',
]

const devSite = [
  'develop-landing-ecology',
  'develop-transfer-rpn-sphere',
  'redesign-lab-ccha',
  'redesign-lab-ric',
  'redesign-ngbezopasnost',
]

export const casesDesignEmail = () => {
  const pagesLocale = langs.map((lang) =>
    desEmail.map((page) => lang + '/cases/design/email/' + page)
  )
  const d = []

  return d.concat(pagesLocale[1])
}

export const casesDesignLogo = () => {
  const pagesLocale = langs.map((lang) =>
    desLogo.map((page) => lang + '/cases/design/logo/' + page)
  )
  const d = []

  return d.concat(pagesLocale[0], pagesLocale[1])
}

export const casesDesignQuiz = () => {
  const pagesLocale = langs.map((lang) =>
    desQuiz.map((page) => lang + '/cases/design/quiz/' + page)
  )
  const d = []

  return d.concat(pagesLocale[0], pagesLocale[1])
}

export const casesDesignWebsites = () => {
  const pagesLocale = langs.map((lang) =>
    desSite.map((page) => lang + '/cases/design/websites/' + page)
  )
  const d = []

  return d.concat(pagesLocale[0], pagesLocale[1])
}

export const casesDevWebsites = () => {
  const pagesLocale = langs.map((lang) =>
    devSite.map((page) => lang + '/cases/dev/websites/' + page)
  )
  const d = []

  return d.concat(pagesLocale[0], pagesLocale[1])
}

export const casesDevBanners = () => {
  const pagesLocale = langs.map((lang) =>
    devBanner.map((page) => lang + '/cases/dev/banners/' + page)
  )
  const d = []

  return d.concat(pagesLocale[0], pagesLocale[1])
}

export const allDynamicPages = () => {
  const all = []

  return all.concat(
    casesDesignEmail(),
    casesDesignLogo(),
    casesDesignQuiz(),
    casesDesignWebsites(),
    casesDevWebsites(),
    casesDevBanners()
  )
}

// TEST
// localeList() {
//   // v1
//   const a = this.$i18n.locales.map((el) => el.code) // ['ru', 'en']
//   const b = ['a', 'b', 'c', 'd', 'e']
//   const c = a.map((lang) => b.map((page) => lang + '/' + page))
//   return c.reduce((p, c) => p + ',' + c)

//   // v2
//   // const a = this.$i18n.locales.map((el) => el.code) // ['ru', 'en']
//   // const b = ['a', 'b', 'c', 'd', 'e']

//   // const c = a.map((lang) =>
//   //   b.map((page) => lang + '/cases/design/logo/' + page)
//   // )
//   // const d = []

//   // return d.concat(c[0], c[1])
// },
