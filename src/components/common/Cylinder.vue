<template>
  <div class="relative">
    <div class="cylinder-top">
      <icon icon="CylinderTop" color="#00f" />
    </div>
    <icon icon="CylinderEmpty" class="cylinder-body" />
    <div class="cylinder-progrss"></div>
    <div class="cylinder-bottom">
      <div class="cylinder-bottom-fill"></div>
      <icon icon="CylinderBottom" color="#f00" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'cylinder',
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      cssVars: {
        botOffset: 0,
        cylWidth: '135px',
        progressHeight: 0,
      },
    }
  },
  watch: {
    progress: {
      immediate: true,
      handler(x) {
        this.cssVars.botOffset = `${9.5 + (x / 100) * 68}px`
        this.cssVars.progressHeight = `${(x / 100) * 66}px`
      },
    },
  },
  methods: {
    setBotOffset() {},
  },
}
</script>

<style scoped lang="scss">
.cylinder-body {
  position: relative;
  left: -1px;
}
.cylinder-top {
  position: absolute;
  z-index: 2;
  bottom: var(--bot-offset);
}
.cylinder-bottom {
  position: absolute;
  bottom: 0;
}
.cylinder-bottom-fill {
  height: 15px;
  position: absolute;
  bottom: 14px;
  background: red;
  width: var(--cyl-width);
}
.cylinder-progrss {
  position: absolute;
  bottom: 29px;
  height: var(--progress-height);
  background: yellow;
  width: var(--cyl-width);
}
</style>
