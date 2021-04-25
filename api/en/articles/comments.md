---
type: Note
category:
  name: web dev
  tags: [vscode, nuxt, dev]

title: VS Code Comments
description: Comments in VS Code
img:
  src: 'https://images.unsplash.com/photo-1553255998-b126f284b1b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  alt: VS Code Comments

source:

author:
  name: Andrej Sharapov
  bio: UI/UX Designer, Frontend Developer
  img:
    src:
    alt:

editor:
  name: Andrej Sharapov
  img:
    src:
    alt:
---

## Comment Anchors Extension

```js[settings.json]
"commentAnchors.tags.list": [
  {
      "tag": "ANCHOR",
      "styleComment": true,
      "iconColor": "#FFFF00",
      "highlightColor": "#FFFF00",
      "scope": "file"
  },
  {
      "tag": "NOTE",
      "iconColor": "#FFB300",
      "highlightColor": "#FFB300",
      "scope": "file"
  },
  {
      "tag": "TODO",
      "iconColor": "#00F51D",
      "highlightColor": "#00F51D",
      "scope": "workspace"
  },
  {
      "tag": "REVIEW",
      "styleComment": true,
      "iconColor": "#F44336",
      "highlightColor": "#F44336",
      "scope": "workspace"
  },
  {
      "tag": "TEST",
      "styleComment": true,
      "iconColor": "#F55E00",
      "highlightColor": "#F55E00",
      "scope": "workspace"
  },
  {
      "tag": "FIXME",
      "styleComment": true,
      "iconColor": "#E60000",
      "highlightColor": "#E60000",
      "scope": "workspace"
  },
  {
      "tag": "SECTION",
      "iconColor": "#0097F5",
      "highlightColor": "#0097F5",
      "scope": "workspace",
      "behavior": "region"
  },
  {
      "tag": "COMP",
      "iconColor": "#2ECCB7",
      "highlightColor": "#2ECCB7",
      "scope": "workspace",
      "behavior": "region"
  },
  {
      "tag": "LINK",
      "iconColor": "#2ecc71",
      "highlightColor": "#2ecc71",
      "scope": "workspace",
      "behavior": "link"
  },
  {
      "tag": "STUB",
      "iconColor": "#BA68C8",
      "highlightColor": "#BA68C8",
      "scope": "file"
  }
],

```

### Anchors

```js
// STUB[epic=TO_EPIC_LIST, seq=1 ] #1
// STUB[epic=TO_EPIC_LIST, seq=3 ] #2
// STUB[epic=TO_EPIC_LIST, seq=2 ] #3
```

Result

```js
#1
#3
#2
```

### Sections and components

```html
<!-- SECTION #1 start section -->
Section content
<!-- COMP #1 start component -->
<ComponentName />
<!-- !COMP end component -->
Section content
<!-- !SECTION end section -->
```

### Links

```html
<!-- LINK content\articles\git.md:20 -->
```

## Other comments

### STYLELINT-DISABLE

look at [stylelint.io](https://stylelint.io/)

### ESLINT-DISABLE

look at [eslint.org](https://eslint.org/)
