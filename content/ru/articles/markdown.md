---
category:
  name: web dev
  tags: [nuxt, markdown, highlight]

title: Подключение @nuxt/markdown
description: Подключение и настройка markdown в nuxt
img:
  src:
  alt:

source:

author:
  name: Андрей Шарапов
  bio: UI/UX Designer, Frontend Developer
  img:
    src:
    alt:

editor:
  name: Андрей Шарапов
  img:
    src:
    alt:
---

## Установка

```bash
yarn add @nuxtjs/markdownit markdown-it-attrs markdown-it-div
```

## Подключение

```js[nuxt.config.js]
modules: [
  '@nuxtjs/markdownit'
],
markdownit: {
  preset: 'default',
  linkify: true,
  breaks: true,
  use: [
    'markdown-it-div',
    'markdown-it-attrs'
  ]
}
```

## Использование

### Компонент .vue

```js
// components/hello.vue
<template lang="md"># Hello World</template>
```

### Файл .md

```js
// content/articles/markdown.md

Hello World

// page/index.vue
<template>
  <div v-html="hello"></div>
</template>

<script>
import hello from '../content/articles/hello.md'

export default {
  computed: {
    hello() {
      return hello
    }
  }
}
</script>
```

## Добавление подцветки и тем

### Установка

```bash
yarn add highlight.js
```

### Подключение

```js
// nuxt.config.js
markdownit: {
  html: true,
  breaks: true,
  linkify: false,
  injected: true,
  xhtmlOut: true,
  langPrefix: 'language-',
  highlight: function(str, lang) {
    const hljs = require('highlight.js')
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
        )
      } catch (__) {}
    }
    return (
      '<pre class="hljs"><code>' +
      hljs.highlight('plaintext', str, true).value +
      '</code></pre>'
    )
  }
},
```

### Импорт темы

```js
// index.vue
import 'highlight.js/styles' // /atom-one-dark.css || /monokai-sublime.css || /github.css
```
