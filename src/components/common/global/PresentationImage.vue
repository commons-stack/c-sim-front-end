<template>
  <img v-if="alternative" class="x-img" src="@/assets/presentation_1.jpg" />
  <img v-else class="x-img" src="@/assets/presentation_2.jpg" />
</template>

<script>
export default {
  name: 'presentation-image',
  props: {
    alternative: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped lang="scss">
.x-img {
  position: fixed;
  left: 0;
  height: 100%;
  top: 0;
  z-index: -100;
  @extend .transition;
  opacity: 0.3;
  @include m {
    opacity: 0.5;
  }
  @include l {
    opacity: 1;
  }
}
</style>
