<template>
  <div class="relative">
    <div class="cylinder-top">
      <icon icon="CylinderTop" :color="cssVars.topColor" />
    </div>
    <icon icon="CylinderEmpty" class="cylinder-body" />
    <div class="cylinder-progrss"></div>
    <div class="cylinder-bottom">
      <div class="cylinder-bottom-fill"></div>
      <icon icon="CylinderBottom" :color="cssVars.baseColor" />
    </div>
  </div>
</template>

<script>
// TODO - colors

const colors = {
  blue: { min: '#007bb0', max: '#1294C4' },
  teal: { min: '#', max: '#' },
  green: { min: '#34C28D', max: '#1AB39E' },
}

const topColor = {
  blue: `${colors.blue.min}`,
  teal: '',
  green: `${colors.green.min}`,
}
const botColor = {
  // blue: `linear-gradient(180deg, ${colors.blue.min} 0%, #46deff 100%)`,
  blue: `linear-gradient(180deg, ${colors.blue.min} 0%, ${colors.blue.max} 100%)`,
  teal: '',
  // green: `linear-gradient(180deg, #34C28D 0%, #67de69 100%)`,
  green: `linear-gradient(180deg, ${colors.green.min} 0%, ${colors.green.max} 100%)`,
}
const baseColor = {
  blue: `${colors.blue.max}`,
  teal: '',
  green: `${colors.green.max}`,
}

export default {
  name: 'cylinder',
  props: {
    progress: {
      type: Number,
      default: 0,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: x => ['blue', 'green', 'teal'].includes(x),
    },
  },
  data() {
    return {
      cssVars: {
        botOffset: 0,
        cylWidth: '135px',
        progressHeight: 0,
        topColor: topColor[this.type],
        botColor: botColor[this.type],
        baseColor: baseColor[this.type],
      },
    }
  },
  watch: {
    progress: {
      immediate: true,
      handler(x) {
        this.cssVars.botOffset = `${9.6 + (x / 100) * 68}px`
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
  background: var(--bot-color);
  width: var(--cyl-width);
}
.cylinder-progrss {
  position: absolute;
  bottom: 29px;
  height: var(--progress-height);
  background: var(--top-color);
  width: var(--cyl-width);
}
.plavi {
  background: linear-gradient(180deg, #007bb0 0%, #46deff 100%);
}
.zeleni {
  background: linear-gradient(180deg, #00a5b0 0%, #67de69 100%);
  opacity: 0.8;
}
</style>
