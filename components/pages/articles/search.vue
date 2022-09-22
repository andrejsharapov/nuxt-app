<template>
  <div>
    <v-card v-box-shadow="9" class="mb-8 pa-4 rounded-lg">
      <v-text-field
        v-model="searchQuery"
        clearable
        counter
        suffix=""
        type="search"
        maxlength="59"
        autocomplete="off"
        :prepend-inner-icon="`${mdiMagnify}`"
        :placeholder="placeholder"
        :outlined="outlined"
        :label="outlined ? label : null"
        :success-messages="successMessage"
        :error-messages="
          searchQuery !== '' && searchQuery !== null && !successMessage
            ? errorMessage
            : null
        "
        :hide-details="!searchQuery"
      />
    </v-card>
    <template v-if="articles.length">
      <div v-for="article of articles" :key="article.slug">
        <s-articles-post :article="article" />
      </div>
      <v-divider :class="searchQuery !== '' ? 'my-8' : 'd-none'" />
    </template>
  </div>
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  name: 'ArticleSearch',
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchQuery: '',
      articles: [],
      mdiMagnify,
    }
  },
  computed: {
    successMessage() {
      return this.articles
        ? this.articles.length >= 1
          ? this.$t('search.found') + ' - ' + this.articles.length
          : null
        : []
    },
    errorMessage() {
      return this.articles
        ? this.articles.length <= 0
          ? this.$t('search.not-found')
          : null
        : []
    },
    hintMessage() {
      return ''
    },
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }

      this.articles = await this.$content(`${this.$i18n.locale}/articles`)
        .limit(10)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>
