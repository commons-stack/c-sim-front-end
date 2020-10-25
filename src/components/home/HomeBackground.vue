<template>
  <div class="x-wrap">
    <div class="x-bg" v-if="state === 'hero'"></div>
  </div>
</template>

<script>
export default {
  name: 'home-background',
  props: ['state'],
  methods: {},
}
</script>

<style scoped lang="scss">
.x-wrap,
::after,
::before {
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
}
.x-bg {
  top: 0;
  left: 0;
  &::before {
    background: url('~@/assets/home_bg.png');
    background-position: top;
    background-size: cover;
  }
  &::after {
    background: linear-gradient(180deg, #67de69 0%, #0047b0 100%);
    mix-blend-mode: color-burn;
  }
}
</style>
