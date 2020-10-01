<template>
  <div>
    <p>Level 0-1</p>
    <button @click="$router.push('/level/0-2')">next</button>
  </div>
</template>

<script>
export default {
  name: 'level-0-1',
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
</style>
