<template>
  <flex tag="nav" justify-content container-expand>
    <router-link v-for="route in $routes" :to="route.path" :key="route.name">
      <button dark>{{ route.name }}</button>
    </router-link>
  </flex>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {},
}
</script>

<style scoped lang="scss">
.router-link-exact-active button {
  @extend .underline;
}
</style>
