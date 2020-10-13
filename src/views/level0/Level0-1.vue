<template>
  <transition name="dropdown" appear>
    <div class="layout-center">
      <p class="letter-spacing-5" uppercase>Level 0</p>
      <h2 class="level-title">Choose the rules for the Commons</h2>
      <p class="level-text mt-2">
        To whom can we give these fantastical tools that will empower humanity to save life on
        earth? Are you ready to find out?
      </p>
      <form-input
        class="text-xxl text-center mt-2"
        placeholder="Enter your name"
        store-model="UserModule/name"
      />
      <button @click="$router.push('/level/0/2')" class="mt-2">next</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'level-0-1',
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
.x-input {
  border: solid 1px black;
}
</style>
