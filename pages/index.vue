<template>
  <v-row justify="center" align="center" class="base">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-16">
        <h1>Hello</h1>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style>
.base .v-card {
  background-color: #ccc;

  @media (--sm-min) {
    background-color: red;
  }
}
</style>
