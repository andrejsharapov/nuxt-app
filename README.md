# nuxt-app

Open Source Web developer Portfolio on GitHub | Andrej Sharapov · Ui/Ux Designer, Frontend Developer

---

[Process coordination][projects]

## Uses

[![vue2][vue-image]][vue]

---

### Nuxt modules

| Module      | Name                                                                     |
| ----------- | ------------------------------------------------------------------------ |
| CMS         | @nuxt/content                                                            |
| CSS         | @nuxtjs/style-resources<br />@nuxtjs/stylelint-module<br />nuxt-purgecss |
| Devtools    | @nuxtjs/eslint-module                                                    |
| Extensions  | nuxt-i18n                                                                |
| Fonts       | @nuxtjs/google-fonts                                                     |
| Performance | @nuxtjs/pwa<br />@nuxtjs/html-validator                                  |
| Request     | @nuxtjs/axios                                                            |
| UI          | @nuxt/components <br /> @nuxtjs/vuetify<br />@nuxtjs/color-mode          |

Look at [all nuxt modules][modules].

---

## TLTR: Wiki

### Branches

Each new branch must contain one of the following prefixes:

`config/` - changes or additions related to the configuration and various site settings.  
`nuxt/` - update or addition related directly to nuxt. For example, adding modules nuxt.  
`style/` - add, bug fix and update styles.  
`page/` - create/upd a new page.  
`comp/` - create/upd a new component.  
`fix/` or `upd/` - in any incomprehensible situation.

### CSS syntax

```bash
PostCSS
SCSS
Sass
Stylus
```

### Naming

#### Files and Component

- Folders - _kebab-case_
- Files - _kebab-case.format_
- Components - _kebab-case_
- Variables - _camelCase_

example

```bash
|-- folder-name
|---- sub-folder-name
|------ component-name.format
|---- file-name.format
```

#### Variables

```js
export default {
  data: () => ({
    varName: null,
  }),
}
```

#### Import and HTML

```bash
<template>
  <history-back />
</template>

import componentName from 'component-name'

export default {
  components: {
    componentName,
  },
}
```

<p align="right">
  <a href="#uses">To top</a>
</p>

[projects]: https://github.com/andrejsharapov/nuxt-app/projects/2
[vue]: https://vuejs.org
[vue-image]: https://img.shields.io/badge/vue-2.x-brightgreen.svg?color=637ddb
[modules]: https://modules.nuxtjs.org/
