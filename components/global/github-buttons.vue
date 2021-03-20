<template lang="pug">
v-col.github-buttons.pa-0.d-flex.align-center(
  cols='auto',
  :class='$vuetify.breakpoint.xs ? "text-center mb-2" : "text-left"'
)
  v-btn.mr-1(
    icon,
    dark,
    plain,
    href='https://github.com/andrejsharapov/nuxt-app',
    target='blank',
    rel='noopener noreferrer',
    color='white'
  )
    v-icon(size='18') $githubOutline

  .ml-2.mb-n2
    github-button(
      href='https://github.com/andrejsharapov/nuxt-app',
      data-icon='octicon-star',
      data-show-count='true',
      aria-label='Star andrejsharapov/nuxt-app on GitHub'
    ) Star

  .ml-2.mb-n2
    github-button(
      href='https://github.com/andrejsharapov/nuxt-app/issues',
      data-icon='octicon-issue-opened',
      data-show-count='true',
      aria-label='Issue andrejsharapov/nuxt-app on GitHub'
    ) Issue
</template>

<script>
import GithubButton from 'vue-github-button'

export default {
  name: 'GithubButtons',
  components: {
    GithubButton,
  },
}
</script>
