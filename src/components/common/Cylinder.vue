<template>
  <div class="wrap">
    <div class="top-section">
      <icon icon="CylinderTop" color="#00f" />
    </div>
    <icon icon="CylinderEmpty" class="cyl" />
    <div class="fill-bot"></div>
    <div class="bot-section">
      <icon icon="CylinderBottom" color="#f00" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'cylinder',
  props: {
    percentage: Number,
  },
  created() {
    this.setBotOffset()
  },
  data() {
    return {
      percent: 1,
      cssVars: {
        botOffset: 0,
      },
    }
  },
  watch: {
    percent() {
      this.setBotOffset()
    },
  },
  methods: {
    setBotOffset() {
      const progress = this.percent ? 0 : (this.percent / 100) * 68
      this.cssVars.botOffset = 9.3 + progress
    },
  },
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
}
.cyl {
  position: relative;
  left: -1px;
}
.top-section {
  position: absolute;
  // top: 13.5px;
  z-index: 2;
  // bottom: 77.3px;
  bottom: var(--bot-offset);
}
.fill-bot {
  height: 15px;
  position: absolute;
  bottom: 14px;
  background: red;
  width: 135px;
}
.bot-section {
  position: absolute;
  bottom: 0;
}
</style>
