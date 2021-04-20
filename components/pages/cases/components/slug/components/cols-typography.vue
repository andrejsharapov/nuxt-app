<template lang="pug">
v-col.case-typography__cols(cols='12', sm='6')
  v-row.flex-column.flex-sm-row.align-end(no-gutters)
    //- SECTION -1
    v-col(cols='12', md='2')
      v-card-title.grey--text(
        :class='{ "vertical-rl": $vuetify.breakpoint.mdAndUp }'
      ) {{ fontFor }}
    //- !SECTION

    //- SECTION -2
    v-col(cols='12', md='10')
      .case-typography__cols__type-font.text-md-center(
        :style='"font-family:" + typeFont + "!important"',
        :class='{ "px-4": $vuetify.breakpoint.mdAndDown }'
      ) Aa
      v-card-title.justify-md-center {{ typeFont }}
    //- !SECTION
</template>

<script>
export default {
  name: 'CaseColsTypography',
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    fontFor: {
      type: String,
      default: '',
    },
    fontType: {
      type: String,
      default: '',
    },
  },
  computed: {
    typeFont() {
      return this.fontType ? this.fontType : ''
    },
  },
}
</script>

<style lang="postcss" scoped>
.case-typography {
  &__cols {
    &__type-font {
      font-size: 14vw;
      line-height: 1;
    }
  }
}

.vertical-rl {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
</style>
