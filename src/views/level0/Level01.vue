<template>
  <div class="level-wrap">
    <p class="level-number" uppercase>Level 0</p>
    <h2 class="level-title">Choose the rules for the Commons</h2>
    <p class="level-text mt-2">To whom can we give these fantastical tools that will empower humanity to save life on earth? Are you ready to find out?</p>
    <input type="text" placeholder="Enter your name" class="text-xxl text-center mt-2">
    <button @click="$router.push('/level/0-2')" class="mt-2">next</button>
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
.level-number {
  @include letter-spacing(5px);
}
</style>
