---
category:
  name: web dev
  tags: [nuxt, markdown, highlight]

title: Написание составных слов
description: Стили написания составных слов в программировании
img:
  src: 'https://images.unsplash.com/photo-1604579230277-ad930b24a9a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80'
  alt: 'markdown'

source:

author:
  name: Chase Adams
  bio: Software Engineer
  img:
    src:
    alt:

editor:
  name: Андрей Шарапов
  img:
    src:
    alt:
---

## Самые распространенные стили написания составных слов

- Camel case
- Snake case
- Kebab case
- Pascal case
- Upper case (в сочетании со snake case)

### camelCase

camelCase должен начинаться со строчной буквы, а первая буква каждого последующего слова должна быть заглавной. Все слова при этом пишутся слитно между собой.

```bash
camel case var – camelCaseVar
```

### snake_case (рекомендуется)

Чтобы писать в стиле snake_case, нужно просто заменить пробелы знаками подчеркивания. Все слова при этом пишутся строчными буквами. Можно использовать snake_case, смешивая его с camelCase и PascalCase, но, как по мне, при этом теряется сам смысл этого стиля.

```bash
snake case var – snake_case_var
```

### kebab-case

kebab-case похож на snake_case, только в нем пробелы заменяются на дефисы. Слова также пишутся строчными буквами. Опять же, его можно смешивать с camelCase и PascalCase, но в этом нет смысла.

```bash
kebab case var – kebab-case-var
```

### PascalCase

В PascalCase каждое слово начинается с заглавной буквы (в отличие от camelCase, где первое слово начинается со строчной).

```bash
pascal case var – PascalCaseVar
```

### UPPER_CASE_SNAKE_CASE

В UPPER_CASE_SNAKE_CASE все слова пишутся заглавными буквами, а пробелы заменяются знаками подчеркивания.

```bash
upper case snake case var – UPPER_CASE_SNAKE_CASE_VAR
```
