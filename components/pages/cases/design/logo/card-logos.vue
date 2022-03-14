<template lang="pug">
v-card.card-logos.fill-height.d-flex.flex-column.shadow-md
  //- ANCHOR 1/4 info
  v-card-title(:class='{ "text-no-wrap": $vuetify.breakpoint.smAndUp }')
    q {{ item.title }}

    v-spacer

    //- ANCHOR dialog details
    v-dialog(
      v-model='dialog',
      fullscreen,
      hide-overlay,
      transition='dialog-bottom-transition'
    )
      template(#activator='{ on: menu }')
        v-tooltip(left)
          template(#activator='{ on: tooltip }')
            v-btn.primary--text(
              icon,
              large,
              v-on='{ ...tooltip, ...menu }',
              :disabled='!item.section'
            )
              v-icon {{ mdiPageNextOutline }}
          span {{ $t("more.details") }}

      v-card(flat, tile)
        v-toolbar.position-relative.z-index-2(dense)
          v-btn.mt-10(
            absolute,
            dark,
            fab,
            color='grey darken-3',
            style='left: calc(50% - 28px)',
            @click='dialog = false'
          )
            v-icon {{ mdiClose }}

        //- SECTION 1: preview
        v-sheet(color='transparent')
          v-img(
            :src='`/src/nuxt-app/logo/${item.slug}/cover.jpg`',
            contain,
            :alt='item.title',
            width='100%'
          )
        //- /SECTION

        //- SECTION 2: logos
        section.position-relative.z-index-2
          v-banner(
            :color='$vuetify.theme.dark ? "var(--card)" : "white"',
            single-line,
            sticky,
            style='top: 0'
          )
            v-card(tile, flat, color='transparent')
              v-card-title.text-h5 {{ item.title }}
              v-card-text.text-body-1 {{ item.about ? item.about : placeholder }}

            v-btn.mt-n4(
              absolute,
              dark,
              fab,
              color='grey darken-3',
              style='left: calc(50% - 28px)',
              @click='dialog = false'
            )
              v-icon {{ mdiClose }}

          .d-grid.grid-cols-sm-2.gap-6
            v-sheet(v-for='(name, index) of item.colors', :key='index')
              v-img(
                :src='`/src/nuxt-app/logo/${item.slug}/colors/${name}.jpg`',
                aspect-ratio='1'
              )
        //- /SECTION

        //- SECTION 3: details
        template(v-if='item.section')
          section(v-for='(s, index) in item.section')
            v-banner(
              :key='index',
              :color='$vuetify.theme.dark ? "var(--card)" : "white"',
              single-line,
              sticky,
              style='top: 0'
            )
              v-card(tile, flat, color='transparent')
                v-card-title.text-h5(v-if='s.title') {{ s.title }}
                v-card-text.text-body-1(v-if='s.caption') {{ s.caption }}
            v-img(
              :src='`/src/nuxt-app/logo/${item.slug}/section/${index + 1}.jpg`'
            )

        v-toolbar.d-flex.justify-center.z-index-2(dense)
          v-btn.mt-n12(
            absolute,
            dark,
            fab,
            color='grey darken-3',
            style='left: calc(50% - 28px)',
            @click='dialog = false'
          )
            v-icon {{ mdiClose }}

  //- ANCHOR 2/4 info
  //- v-card-subtitle.pb-0 {{ $t("works.types") }}: {{ item.ux.price }}
  v-card-subtitle.pt-0.pb-0 {{ $t("date.default") }}: {{ formatDate(item.created) }}
  //- v-card-subtitle.pt-0 {{ $t("pages.logos.format") }}: {{ !logoView && item.before ? item.before.format : item.after.format }}

  //- ANCHOR 3/4 images
  .flex-grow-1
    template(v-if='!logoView && item.before')
      v-img.pa-4.mx-auto(
        :src='`/src/nuxt-app/logo/${item.slug}/before.jpg`',
        :alt='item.title',
        aspect-ratio='1.3'
      )
        template(#placeholder)
          v-row.fill-height.ma-0(align='center', justify='center')
            v-progress-circular(indeterminate, color='grey lighten-5')

    template(v-if='logoView')
      v-img.pa-4.mx-auto(
        :src='`/src/nuxt-app/logo/${item.slug}/after.jpg`',
        :alt='item.title',
        aspect-ratio='1.3'
      )
        template(#placeholder)
          v-row.fill-height.ma-0(align='center', justify='center')
            v-progress-circular(indeterminate, color='grey lighten-5')

  //- ANCHOR 4/4 switch
  .d-flex.justify-center.align-center.flex-shrink-0
    | {{ $t("events.before") }}
    v-switch.mx-4(
      v-model='logoView',
      :disabled='!item.before',
      inset,
      :color='!item.before ? "grey" : "primary"'
    )
    | {{ $t("events.after") }}
</template>

<script>
import { mdiPageNextOutline, mdiClose } from '@mdi/js'

export default {
  name: 'CardLogos',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    preview: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      logoView: this.preview,
      mdiPageNextOutline,
      mdiClose,
      dialog: false,
      placeholder: '',
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
    },
  },
}
</script>

<style>
.v-banner__wrapper {
  border-bottom: none !important;
}
</style>
