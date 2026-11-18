<template>
  <div class="yandex-banner-container">
    <!-- Контейнер РСЯ всегда в DOM (используем v-show вместо v-if) -->
    <div
      v-show="isRendered"
      class="yandex-banner-wrapper"
      :style="{ minHeight: minHeight }"
    >
      <div :id="containerId"></div>
    </div>

    <!-- Заглушка (конфетти) видна сразу, пока реклама не подтвердит отрисовку -->
    <div
      v-if="!isRendered"
      class="yandex-banner-fallback"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YandexBanner',
  props: {
    blockId: {
      type: String,
      required: true,
    },
    uniqueKey: {
      type: [String, Number],
      default: '',
    },
    minHeight: {
      type: String,
      default: 'auto',
    },
  },
  data() {
    return {
      instanceHash: Math.random().toString(36).substring(2, 8),
      isRendered: false,
    }
  },
  computed: {
    containerId() {
      const suffix = this.uniqueKey
        ? `-${this.uniqueKey}`
        : `-${this.instanceHash}`
      return `yandex_rtb_${this.blockId}${suffix}`
    },
  },
  watch: {
    '$route.fullPath'() {
      this.isRendered = false
      this.destroyAd()
      this.$nextTick(() => {
        this.renderAd()
      })
    },
  },
  mounted() {
    this.renderAd()
  },
  beforeDestroy() {
    this.destroyAd()
  },
  methods: {
    renderAd() {
      if (typeof window === 'undefined') return

      window.yaContextCb = window.yaContextCb || []
      window.yaContextCb.push(() => {
        const el = document.getElementById(this.containerId)
        if (!el) return

        window.Ya.Context.AdvManager.render({
          blockId: this.blockId,
          renderTo: this.containerId,
          // Единственный 100% надежный триггер: реклама реально появилась
          onRender: () => {
            this.isRendered = true
            this.$emit('rendered')
          },
          onError: (data) => {
            console.warn('РСЯ ошибка/пустой блок:', data)
            this.isRendered = false
            this.$emit('empty')
          },
        })
      })
    },
    destroyAd() {
      if (
        typeof window !== 'undefined' &&
        window.Ya?.Context?.AdvManager?.destroy
      ) {
        window.Ya.Context.AdvManager.destroy({
          renderTo: this.containerId,
        })
      }
    },
  },
}
</script>

<style scoped>
.yandex-banner-container {
  width: 100%;
}

.yandex-banner-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}
</style>
