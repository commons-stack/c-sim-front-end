<template>
  <div class="x-wrap">
    <grid :gtc="`repeat(9, ${size}px)`" :gtr="`repeat(9, ${size}px)`" class="x-form-grid">
      <!-- row -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <!-- row -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <!-- row -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <!-- row -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <!-- row -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <!-- row -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <!-- row -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <!-- row -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <!-- row -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </grid>
  </div>
</template>

<script>
export default {
  name: 'form-grid',
  props: {
    size: {
      type: String,
      default: '50',
    },
  },
}
</script>

<style scoped lang="scss">
.x-wrap {
  perspective: 800px;
  @extend .absolute-center;
  z-index: -100;
}
.x-form-grid {
  gap: 1px;
  padding: 1px;
  opacity: 0.5;
  background: linear-gradient(#0047b0, #67de69);
  & > div {
    @extend .bg-dark;
  }
  transform: rotate3d(1, 0, 0, 75deg);
}
</style>
