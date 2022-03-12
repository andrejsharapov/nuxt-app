<template lang="pug">
.contact-info.d-grid.gap-y-6.grid-cols-sm-2.gap-x-sm-6.grid-cols-md-3
  div(v-for='(item, i) of info', :key='i')
    v-card.fill-height.shadow-md
      v-card-title {{ item.title }}
      v-divider(inset)
      v-list-item
        v-list-item-icon
          v-avatar.rounded(style='background-color: var(--stop-color-one)')
            v-icon(dark, v-text='item.icon', size='32')
        v-list-item-content
          v-list-item-title(
            v-clipboard='item.content',
            v-text='item.content',
            @click='copyToClipboard'
          )
          v-list-item-subtitle(
            v-clipboard='item.note',
            v-text='item.note',
            @click='copyToClipboard'
          )
</template>

<script>
export default {
  name: 'ContactInfo',
  props: {
    info: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    copyToClipboard() {
      const copyContactLocale = () => {
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
      this.$notify(copyContactLocale())
    },
  },
}
</script>
