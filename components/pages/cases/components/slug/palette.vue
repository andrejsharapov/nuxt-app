<template lang="pug">
- var s = "90"
.case-palette
  v-row.px-4(no-gutters)
    v-col(
      v-for='(color, index) in palette',
      :key='index',
      cols='12',
      sm='6',
      lg='3'
    )
      v-card-title.text-no-wrap {{ color.type }}
      .d-flex.align-center
        .d-flex.align-center.flex-column.mx-1.sheet-color(
          v-for='(col, i) in (Array.isArray(color.hex) ? color.hex : [color.hex])',
          :key='i'
        )
          v-avatar(height=s, min-width=s)
            v-sheet.cursor-pointer(
              :color='"#" + col',
              height=s,
              width=s,
              v-clipboard='"#" + col',
              @click.stop='copyToClipboard'
            )
          v-btn.my-4.px-2.rounded-lg(
            text,
            v-clipboard='"#" + col',
            @click.stop='copyToClipboard'
          )
            span(v-text='"#" + col')
</template>

<script>
export default {
  name: 'CasePalette',
  props: {
    palette: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    copyToClipboard() {
      const copyColorLocale = () => {
        if (this.$i18n.locale === 'ru') {
          return {
            group: 'copy-to-clipboard',
            type: 'success',
            title: 'Скопировано',
            text: 'Скопировано в буфер обмена.',
          }
        } else if (this.$i18n.locale === 'en') {
          return {
            group: 'copy-to-clipboard',
            type: 'success',
            title: 'Copied',
            text: 'Copied to clipboard.',
          }
        }
      }
      this.$notify(copyColorLocale())
    },
  },
}
</script>

<style lang="postcss">
.sheet-color {
  .v-avatar {
    border: 0.25rem double #0000000d;
    border-radius: 1.25rem;

    .v-sheet {
      border-radius: inherit;
    }
  }
}
</style>
