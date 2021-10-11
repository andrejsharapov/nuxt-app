<template lang="pug">
v-list.navbar__list.hidden-x
  template(v-for='(itemOne, index) of navbar.data')
    template(v-if='itemOne.nested')
      v-subheader.px-2.text-no-wrap.primary--text(
        :key='index',
        style='font-size: 0.7rem'
      ) {{ itemOne.title }}
        v-divider(:class='miniVariant ? "d-none" : "ml-6"')
      template(v-for='itemTwo of itemOne.nested')
        template(v-if='itemTwo.child')
          v-list-group(
            :key='itemTwo.to',
            :disabled='itemTwo.disabled',
            :group='itemTwo.group'
          )
            template(#activator)
              v-list-item-action
                v-tooltip(right, nudge-right='8')
                  template(#activator='{ on }')
                    v-icon(v-on='on') {{ itemTwo.action }}
                  span {{ itemTwo.title }}
              v-list-item-content
                v-list-item-title.text-no-wrap(v-text='itemTwo.title')
            template(v-for='(itemThree, index) of itemTwo.child')
              v-list-item.justify-start(
                :key='index',
                :to='itemThree.to',
                :disabled='itemThree.disabled',
                exact,
                router
              )
                v-list-item-action
                  v-tooltip(v-if='miniVariant', nudge-right='8', right)
                    template(#activator='{ on }')
                      v-icon(v-on='on') {{ itemThree.action }}
                    span {{ itemThree.title }}
                v-list-item-content
                  v-list-item-title(v-text='itemThree.title')
                v-list-item-action(v-if='!miniVariant')
                  v-icon {{ itemThree.action }}

        template(v-else)
          v-list-item.justify-start(
            :key='itemTwo.title',
            :to='itemTwo.to',
            :disabled='itemTwo.disabled',
            exact,
            router
          )
            v-list-item-action
              v-tooltip(nudge-right='8', right)
                template(#activator='{ on }')
                  v-icon(v-on='on') {{ itemTwo.action }}
                span {{ itemTwo.title }}
            v-list-item-content
              v-list-item-title {{ itemTwo.title }}

    template(v-else)
      v-list-item.justify-start(
        :key='itemOne.id',
        :to='itemOne.to',
        exact,
        router
      )
        v-list-item-action
          v-tooltip(nudge-right='8', right)
            template(#activator='{ on }')
              v-icon(v-on='on') {{ itemOne.action }}
            span {{ itemOne.title }}
        v-list-item-content
          v-list-item-title {{ itemOne.title }}

  v-list(v-if='!miniVariant')
    v-list-item
      s-layout-components-poll(:mini-variant='miniVariant')
</template>

<script>
export default {
  name: 'NavbarList',
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
    navbar: {
      type: [Array, Object],
      default: () => ({}),
    },
  },
}
</script>
