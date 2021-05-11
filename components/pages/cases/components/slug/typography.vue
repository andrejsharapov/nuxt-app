<template lang="pug">
.case-typography
  v-row.align-end
    span(v-html='info.fonts')

    //- COMPONENT -1
    s-pages-cases-components-slug-components-cols-typography(
      :info='info',
      :font-type='info.headline',
      :font-for='$t("pages.cases.slug.typography.view[0]")'
    )
    //- /COMPONENT

    //- COMPONENT -2
    s-pages-cases-components-slug-components-cols-typography(
      :info='info',
      :font-type='info.text',
      :font-for='$t("pages.cases.slug.typography.view[1]")'
    )
    //- /COMPONENT
</template>

<script>
export default {
  name: 'CaseTypography',
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
