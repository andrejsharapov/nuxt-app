<template>
  <div
    v-if="hasAd"
    class="yandex-banner-wrapper"
    :style="{ minHeight: minHeight }"
  >
    <div :id="containerId"></div>
  </div>
</template>

<script>
export default {
  name: 'YandexBanner',
  props: {
    // ID блока из кабинета РСЯ, например: 'R-A-20450036-2'
    blockId: {
      type: String,
      required: true,
    },
    // Опциональный суффикс, если один и тот же blockId выводится на странице дважды
    uniqueKey: {
      type: [String, Number],
      default: '',
    },
    // Резервируемая высота контейнера до загрузки рекламы (улучшает Core Web Vitals)
    minHeight: {
      type: String,
      default: 'auto',
    },
  },
  data() {
    return {
      // Случайный хэш гарантирует уникальность ID, даже если забыли передать uniqueKey
      instanceHash: Math.random().toString(36).substring(2, 8),
      hasAd: true,
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
    // Если пользователь перешел со статьи /news/1 на /news/2, Vue переиспользует компонент.
    // Следим за сменой маршрута и принудительно обновляем баннер.
    '$route.fullPath'() {
      this.hasAd = true
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

      // Таймер на случай, если AdBlock полностью заблокировал загрузку context.js
      const fallbackTimer = setTimeout(() => {
        if (!window.Ya?.Context?.AdvManager) {
          this.handleAdEmpty()
        }
      }, 2500)

      window.yaContextCb = window.yaContextCb || []
      window.yaContextCb.push(() => {
        clearTimeout(fallbackTimer)

        if (document.getElementById(this.containerId)) {
          window.Ya.Context.AdvManager.render({
            blockId: this.blockId,
            renderTo: this.containerId,
            // Реклама успешно отрисовалась
            onRender: () => {
              this.hasAd = true
              this.$emit('rendered')
            },
            // Аукцион не подобрал рекламу или произошла ошибка
            onError: () => {
              this.handleAdEmpty()
            },
            // Срабатывает, если в настройках блока задан альтернативный код/заглушка
            altCallback: () => {
              this.handleAdEmpty()
            },
          })
        }
      })
    },
    handleAdEmpty() {
      this.hasAd = false
      this.$emit('empty')
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
