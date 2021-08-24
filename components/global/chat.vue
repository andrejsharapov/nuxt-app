<template lang="pug">
.chat(v-if="$vuetify.breakpoint.smAndUp")
  v-tooltip(left)
    template(#activator="{ on: chat }")
      v-btn.chat-btn__open(
        fixed,
        fab,
        :disabled="loading",
        :loading="loading",
        elevation="2",
        dark,
        color="primary",
        @click="[dialog = true, loading = true]",
        v-on="chat"
      )
        v-icon(v-if="newIcon") {{ mdiWrenchOutline }}
        v-icon(v-else) {{ mdiChat }}
    span {{ $t('app.chat.title') }}

  v-dialog(
      v-model="dialog",
      fullscreen,
      hide-overlay,
      persistent,
      width="600",
      transition="dialog-bottom-transition",
      content-class="hidden"
    )
    v-card(tile)
      v-toolbar(flat, dark, color='primary')
        v-toolbar-title {{ $t('app.chat.title') }}
        v-spacer

      v-container.d-flex.justify-center.align-center.fill-height
        v-btn.chat-btn__close(
          fixed,
          fab,
          elevation="2",
          dark,
          color="primary",
          @click='dialog = false'
        )
          v-icon {{ mdiClose }}

        v-card-text(v-if="loading")
          | {{ $t('app.chat.loading.message') }}
          v-progress-linear.mt-2(
            indeterminate,
            color="accent"
          )

        iframe.chat-iframe(v-else src="https://jivo.chat/0WAGAC64AH" width="100%" frameborder="0")
          | {{ $t('support.message') }}
</template>

<script>
import { mdiWrenchOutline, mdiChat, mdiClose } from '@mdi/js'

export default {
  name: 'Chat',
  data() {
    return {
      mdiWrenchOutline,
      mdiClose,
      mdiChat,
      dialog: false,
      loading: false,
      newIcon: true,
    }
  },
  watch: {
    dialog(val) {
      if (!val) return

      setTimeout(() => [(this.dialog = true), (this.loading = false)], 4000)
    },
  },
  mounted() {
    this.iconChange()
  },
  methods: {
    iconChange() {
      setInterval(() => {
        this.newIcon = !this.newIcon
      }, 15000)
    },
  },
}
</script>

<style lang="scss">
.chat-btn__open,
.chat-btn__close {
  right: 1rem;
  bottom: calc(3.5rem + calc(1rem * 2));
}

.chat-btn__close {
  right: calc(1rem + 17px);
}

.chat-iframe {
  margin-top: -83px;
  padding-right: 1rem;
  height: 100vh;
  max-height: 100vh;
  resize: vertical;
  background-color: var(--white);
}
</style>
