<template>
  <div class="x-home-shapes">
    <icon icon="ShapeRight" class="x-shape-right" />
    <icon icon="ShapeLeft" class="x-shape-left" />
  </div>
</template>

<script>
import { utils } from '../../utils/utils'

export default {
  name: 'scrollable-gfx',
  created() {
    window.addEventListener('resize', this.windowResize)
    window.addEventListener('scroll', this.windowScroll)
  },
  async mounted() {
    const distance = this.getShapeDistance()
    this.windowResize()
    this.windowScroll()
    this.cssVars.shapeDistance = distance * 2 + 'px'
    setTimeout(() => {
      this.cssVars.shapeDistance = distance + 'px'
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowResize)
    window.removeEventListener('scroll', this.windowScroll)
  },
  data() {
    return {
      maxScrollPos: undefined,
      cssVars: {
        shapeDistance: undefined,
        offsetTop: undefined,
      },
    }
  },
  methods: {
    windowResize: utils.throttle(function() {
      this.cssVars.shapeDistance = `${this.getShapeDistance()}px`
      this.maxScrollPos =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
    }),
    getShapeDistance: () => window.innerWidth / 1.8 - window.innerWidth / 4,
    windowScroll: utils.throttle(function() {
      const offset = Math.floor((window.scrollY / this.maxScrollPos) * 100) / 100
      const wHeight = window.innerHeight
      const value = `${-1750 + wHeight * offset - 250 * offset}px`
      this.cssVars.offsetTop = value
    }),
  },
}
</script>

<style scoped lang="scss">
.x-home-shapes {
  @extend .center;
  z-index: -2;
}
.x-shape-left,
.x-shape-right {
  top: var(--offset-top);
  position: absolute;
  z-index: -1;
  transition: all 1.4s cubic-bezier(0.35, 0.14, 0.23, 0.93);
}
.x-shape-left {
  left: calc(-963px + -1 * var(--shape-distance));
}
.x-shape-right {
  left: var(--shape-distance);
}
</style>
