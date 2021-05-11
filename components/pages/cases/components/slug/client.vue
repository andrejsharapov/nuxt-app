<template lang="pug">
v-card.case-client(flat, color='transparent')
  v-img(
    v-if='client.logoJPG !== null',
    :src='client.logoWEBP ? client.logoWEBP : client.logoJPG',
    :alt='client.head'
  )

  //- about
  template(v-if='client.description')
    s-pages-cases-components-slug-components-section-sub-title(
      :title='$t("pages.cases.slug.client.about")'
    )
    p.px-4 {{ client.description }}

  //- issues
  template(v-if='client.issues')
    s-pages-cases-components-slug-components-section-sub-title(
      :title='$t("pages.cases.slug.client.issues")'
    )
    p.px-4 {{ client.issues }}

  //- tasks
  template(v-if='client.task')
    .mt-6.d-flex.align-center
      h3.font-weight-bold.text-no-wrap {{ Array.isArray(client.task) ? $tc("pages.cases.slug.client.task.title", 2) : $tc("pages.cases.slug.client.task.title", 1) }}
      v-divider(inset)
    v-list-item(
      v-for='(name, index) in Array.isArray(client.task) ? client.task : [client.task]',
      :key='index'
    )
      v-list-item-icon
        v-icon(color='warning') {{ mdiClipboardAlertOutline }}
      v-list-item-content
        v-list-item-title.text-wrap {{ name }}
</template>

<script>
import { mdiClipboardAlertOutline } from '@mdi/js'

export default {
  name: 'CaseClient',
  props: {
    client: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      mdiClipboardAlertOutline,
    }
  },
}
</script>
