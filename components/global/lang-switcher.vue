<template lang="pug">
//- NOTE COMPONENT DISABLED
v-list.mb-1.pa-0(dense, nav)
  v-list-item-group(multiple, color='primary')
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
          v-list-item-content(@click='noTranslation')
            v-list-item-title En
</template>

<script>
import { mdiTranslate } from '@mdi/js'

export default {
  name: 'LangSwitcher',
  data() {
    return {
      mdiTranslate,
    }
  },
  methods: {
    noTranslation() {
      this.$notify({
        group: 'translation',
        type: 'warn',
        title: 'Attention!',
        duration: 6000,
        text: 'Some pages may not be translated into this language. We are working on this and will try to translate as soon as possible.',
      })
    },
  },
}
</script>
