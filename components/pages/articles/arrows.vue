<template>
  <v-card-actions class="pa-0">
    <v-list-item
      v-if="prev"
      class="px-0"
    >
      <v-list-item-icon>
        <v-btn
          :to="localePath(`/articles/${prev.slug}`)"
          icon
          large
        >
          <v-icon>{{ mdiChevronLeft }}</v-icon>
        </v-btn>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-if="$vuetify.breakpoint.smAndUp">
          {{ prev.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ $tc('events.prev', 1) }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <span v-else>&nbsp;</span>
    <v-divider />
    <v-list-item
      v-if="next"
      class="text-right px-0"
    >
      <v-list-item-content>
        <v-list-item-title v-if="$vuetify.breakpoint.smAndUp">
          {{ next.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ $tc('events.next', 1) }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-icon>
        <v-btn
          :to="localePath(`/articles/${next.slug}`)"
          icon
          large
        >
          <v-icon>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </v-list-item-icon>
    </v-list-item>
    <span v-else>&nbsp;</span>
  </v-card-actions>
</template>

<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

export default {
  name: 'ArtArrows',
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      mdiChevronLeft,
      mdiChevronRight,
    }
  },
}
</script>
