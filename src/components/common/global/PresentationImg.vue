<template>
  <img class="x-img" src="@/assets/presentation.jpg" />
</template>

<script>
export default {
  name: 'presentation-img',
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
