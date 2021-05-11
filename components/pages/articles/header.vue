<template>
  <v-card flat class="article-header">
    <v-img
      v-if="article.img.src"
      :src="article.img.src"
      :alt="article.img.alt ? article.img.alt : ''"
      class="article-header rounded-lg hidden"
      :class="$vuetify.breakpoint.mdAndDown ? 'fill-height' : 'mh-50'"
    >
      <template #default>
        <div
          class="article-header__content fill-height d-flex justify-center align-center flex-column text-center"
        >
          <v-card-title
            class="px-0 white--text text-h6 text-sm-h5 text-lg-h3 font-weight-bold"
          >
            {{ article.title }}
          </v-card-title>
          <v-card-subtitle
            class="mt-3 px-0 white--text text-lg-h4 font-weight-medium text-uppercase"
          >
            {{ article.category.name }}
          </v-card-subtitle>
          <v-card-text class="px-0 white--text">
            {{ $tc('author.title', 1) }}
            <strong>{{ article.author.name }}</strong> —
            {{ $tc('category', 1) }}
            <strong>
              {{
                article.category.name
                  ? article.category.name
                  : $tc('category', 2)
              }}
            </strong>
            <span :class="{ 'd-block': $vuetify.breakpoint.smAndDown }">
              {{ $t('on') }}
              <strong>{{ formatDate(article.updatedAt) }}</strong>
            </span>
          </v-card-text>
        </div>
      </template>
    </v-img>
    <v-divider inset />
    <p class="mt-3">{{ article.description }}</p>
  </v-card>
</template>

<script>
export default {
  name: 'ArticleHeader',
  props: {
    article: {
      type: Object,
      default: () => ({}),
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

<style lang="scss">
.article-header {
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: var(--gray-dark);
    opacity: 0.4;
  }

  &.mh-25 {
    min-height: 25vh;
    max-height: 25vh;
  }

  &.mh-50 {
    min-height: 50vh;
    max-height: 50vh;
  }

  &__content {
    position: relative;
    z-index: 1;
  }
}
</style>
