<template lang="pug">
v-row.ma-0(no-gutters)
  v-col.mr-1
    v-list-item(:to='switchLocalePath("ru")')
      v-list-item-icon
        v-icon {{ mdiTranslate }}
      v-list-item-content
        v-list-item-title Ru
  v-col.ml-1
    v-list-item(:to='switchLocalePath("en")')
      v-list-item-icon
        v-icon {{ mdiTranslate }}
      v-list-item-content
        v-list-item-title En
</template>

<script>
import { mdiTranslate } from '@mdi/js'

export default {
  data() {
    return {
      mdiTranslate,
    }
  },
}
</script>
