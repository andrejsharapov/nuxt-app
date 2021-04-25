<template v-if="post">
  <v-alert
    :icon="false"
    type="success"
    border="left"
    text
    outlined
    class="mt-4"
  >
    <v-list-item class="px-0">
      <v-list-item-content class="py-0 justify-sm-end">
        <v-list-item-subtitle
          class="d-flex flex-column flex-sm-row justify-sm-end"
        >
          <span>{{ $tc('source', 1) }}: </span>
          {{ postSource }}
        </v-list-item-subtitle>
        <v-list-item-subtitle
          class="d-flex flex-column flex-sm-row justify-sm-end"
        >
          <span>{{ $tc('author.title', 1) }}: </span> {{ postAuthor }},
          {{ formatDate(article.createdAt) }}
        </v-list-item-subtitle>
        <v-list-item-subtitle
          class="d-flex flex-column flex-sm-row justify-sm-end"
        >
          <span>{{ $t('editor') }}: </span> {{ postEditor }},
          {{ formatDate(article.updatedAt) }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-icon v-if="$vuetify.breakpoint.smAndUp" class="my-0">
        <v-avatar width="68" height="68" class="rounded" color="success">
          <v-icon dark large> {{ mdiAccountGroup }} </v-icon>
        </v-avatar>
      </v-list-item-icon>
    </v-list-item>
  </v-alert>
</template>

<script>
import { mdiAccountGroup } from '@mdi/js'
import { appMeta as app } from '~/config/app'

export default {
  name: 'ArticleAuthor',
  props: {
    article: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data: () => ({
    mdiAccountGroup,
  }),
  computed: {
    postSource() {
      return this.post?.source ? this.article.source : app.host.url
    },
    postAuthor() {
      return this.post?.author?.name
        ? this.article.author.name
        : this.$t('author.name')
    },
    postEditor() {
      return this.post?.editor?.name
        ? this.article.editor.name
        : this.$t('author.name')
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>
