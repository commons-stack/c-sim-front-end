<template>
  <div>
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
    <div class="x-img-wrap">
      <img src="@/assets/outcome_good.png" class="image-center" alt="" />
      <div class="x-img-overlay"></div>
    </div>
  </div>
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

<style scoped lang="scss">
.x-img-wrap {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  & > img {
    width: 100vw;
    height: 100vh;
  }
}
.x-img-overlay {
  position: fixed;
  transform: translateX(-50%);
  mix-blend-mode: multiply;
  top: 0;
  left: 50%;
  width: 686px;
  height: 100vh;
  background: linear-gradient(180deg, #67de69 0%, #0047b0 100%);
  mix-blend-mode: multiply;
  opacity: 0.8;
}
</style>
