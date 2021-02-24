<template>
  <v-row>
    <v-col>
      <v-list-item :to="switchLocalePath('ru')">
        <v-list-item-icon>
          <v-icon>{{ mdiTranslate }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Ru</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
    <v-col>
      <v-list-item :to="switchLocalePath('en')">
        <v-list-item-icon>
          <v-icon>{{ mdiTranslate }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>En</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
import { mdiTranslate } from '@mdi/js'

export default {
  data() {
    return {
      mdiTranslate,
    }
  },
}
</script>
