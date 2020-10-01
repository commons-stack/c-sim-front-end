<template>
  <div>
    <p class="mb-0p5">Store</p>
    <div>Store root state: {{ rootState }}</div>
    <div>Store root getter: {{ rootGetter }}</div>
    <div>Store module state: {{ moduleState }}</div>
    <div>Store module getter: {{ moduleGetter }}</div>
  </div>
</template>

<script>
export default {
  name: 'store-examples',
  props: {},
  methods: {},
  created() {
    setTimeout(() => {
      this.$store.commit('testMutation') // root
      this.$store.commit('ExampleModule/testMutation') // module
    }, 1000)
    setTimeout(() => {
      this.$store.dispatch('testAction') // root
      this.$store.dispatch('ExampleModule/testAction') // module
    }, 2000)
  },
  computed: {
    rootState() {
      return this.$store.state.testState
    },
    rootGetter() {
      return this.$store.getters['testGetter']
    },
    moduleState() {
      return this.$store.state.ExampleModule.testState
    },
    moduleGetter() {
      return this.$store.getters['ExampleModule/testGetter']
    },
  },
}
</script>

<style scoped lang="scss"></style>
