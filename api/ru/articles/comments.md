---
type: note
category:
  name: web dev
  tags: [vscode, nuxt, dev]

title: Лучшие комментарии для VS Code
description: Комментирование разделов
img:
  src: 'https://images.unsplash.com/photo-1553255998-b126f284b1b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  alt: VS Code Comments

source:

author:
  name: Андрей Шарапов
  bio: UI/UX дизайнер, фронтенд разработчик
  img:
    src:
    alt:

editor:
  name: Андрей Шарапов
  img:
    src:
    alt:
---

## Расширение Comment Anchors

```js[settings.json]
"commentAnchors.tags.list": [
  {
    "tag": "COMP",
    "iconColor": "#2ECCB7",
    "highlightColor": "#2ECCB7",
    "scope": "workspace",
    "behavior": "region"
  },
  {
    "tag": "ANCHOR",
    "iconColor": "#FFFF00",
    "highlightColor": "#FFFF00",
    "scope": "file"
  },
  {
    "tag": "TODO",
    "iconColor": "#3EA8FF",
    "highlightColor": "#3EA8FF",
    "scope": "workspace"
  },
  {
    "tag": "FIXME",
    "iconColor": "#F44336",
    "highlightColor": "#F44336",
    "scope": "workspace"
  },
  {
    "tag": "STUB",
    "iconColor": "#BA68C8",
    "highlightColor": "#BA68C8",
    "scope": "file"
  },
  {
    "tag": "NOTE",
    "iconColor": "#FFB300",
    "highlightColor": "#FFB300",
    "scope": "file"
  },
  {
    "tag": "SECTION",
    "iconColor": "#896AFC",
    "highlightColor": "#896AFC",
    "scope": "workspace",
    "behavior": "region"
  },
  {
    "tag": "LINK",
    "iconColor": "#2ECC71",
    "highlightColor": "#2ECC71",
    "scope": "file",
    "behavior": "link"
  },
  {
    "tag": "REVIEW",
    "iconColor": "#64DD17",
    "highlightColor": "#64DD17",
    "scope": "workspace"
  },
  {
    "tag": "TEST",
    "iconColor": "#64DD17",
    "highlightColor": "#64DD17",
    "styleComment": true,
    "backgroundColor": "",
    "borderStyle": "thin solid rgba(0, 0, 0, 1)",
    "borderRadius": 4,
    "scope": "workspace",
    "behavior": "region"
  }
],
```

### Порядок вывода якорей

```js
// STUB[epic=TO_EPIC_LIST, seq=1 ] #1
// STUB[epic=TO_EPIC_LIST, seq=3 ] #2
// STUB[epic=TO_EPIC_LIST, seq=2 ] #3
```

в результате получится

```js
#1
#3
#2
```

### Секции и компоненты

```html
<!-- SECTION #1 start section -->
Контент секции
<!-- COMP #1 start component -->
<Компонент />
<!-- !COMP end component -->
Контент секции
<!-- !SECTION end section -->
```

### Ссылки

```html
<!-- LINK content\articles\git.md:20 -->
```

## Другие комментарии

### STYLELINT-DISABLE

look at [stylelint.io](https://stylelint.io/)

### ESLINT-DISABLE

look at [eslint.org](https://eslint.org/)
