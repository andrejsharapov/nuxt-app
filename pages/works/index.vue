<template>
  <div />
</template>

<script>
export default {
  name: 'WorksIndex',
  middleware({ redirect }) {
    redirect(301, '/')
  },
}
</script>
