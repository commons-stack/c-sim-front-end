<template>
  <transition name="dropdown" appear>
    <div class="layout-vertical">
      <p class="level-subtitle">Good future</p>
      <p class="level-title mt-5">You made a High Score, {{ name }}!</p>
      <p text-hero>800</p>
      <p class="level-subtitle mt-4">Try to improve your score</p>
      <button @click="$router.push('/')">play again</button>
      <flex gap="1" align-items class="mt-2">
        <p>Share your score:</p>
        <icon class="ml-1" icon="Facebook" button color="secondary" />
        <icon icon="Facebook" button color="secondary" />
        <icon icon="Facebook" button color="secondary" />
      </flex>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'outcome',
  props: {},
  computed: {
    name() {
      return this.$store.getters['UserModule/getName'] || 'Sample Name'
    },
  },
}
</script>

<style scoped lang="scss"></style>
