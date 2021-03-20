<template lang="pug">
v-card.poll(color='purple')
  v-card-title.justify-center.white--text {{ $t("poll.title") }}
  v-card-subtitle.purple--text.text--lighten-4 {{ $t("poll.message") }}
  v-btn(block, text, dark) {{ $t("poll.btn") }}
</template>

<script>
export default {
  name: 'Poll',
}
</script>
