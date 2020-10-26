<template>
  <div class="layout-center">
    <p class="letter-spacing-5" uppercase>Level 0</p>
    <h2 class="level-title">Choose the rules for the Commons</h2>
    <p class="level-text mt-2">
      To whom can we give these fantastical tools that will empower humanity to save life on earth?
      Are you ready to find out?
    </p>
    <form-input
      class="text-xxxl text-center mt-2"
      placeholder="Enter your name"
      store-model="UserModule/name"
    />
    <button @click="goNext" class="mt-2">next</button>
    <div class="x-home-shapes-wrap">
      <div class="x-home-shapes">
        <icon icon="ShapeRight" class="x-shape-right" />
        <icon icon="ShapeLeft" class="x-shape-left" />
      </div>
    </div>
  </div>
</template>

<script>
import { utils } from '../../utils/utils.js'

export default {
  name: 'level-0-1',
  created() {
    window.addEventListener('resize', this.windowWidthWatcher)
    this.cssVars.shapeDistance = this.getShapeDistance() + 'px'
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowWidthWatcher)
  },
  data() {
    return {
      cssVars: {
        shapeDistance: '0px',
        shapeTop: '-700px',
      },
    }
  },
  methods: {
    windowWidthWatcher: utils.throttle(function() {
      this.cssVars.shapeDistance = `${this.getShapeDistance()}px`
    }),
    getShapeDistance: () => window.innerWidth / 2 - window.innerWidth / 4,
    goNext() {
      this.cssVars.shapeDistance = `${this.getShapeDistance() * 2}px`
      setTimeout(() => {
        this.$router.push('/level/0/2')
      }, 1000)
    },
  },
}
</script>

<style scoped lang="scss">
.x-input {
  border: solid 1px black;
}
.x-home-shapes-wrap {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.x-home-shapes {
  position: relative;
}
.x-shape-left,
.x-shape-right {
  top: var(--shape-top);
  position: absolute;
  z-index: -1;
  transition: all 1s cubic-bezier(0.37, 0, 0.1, 1);
}
.x-shape-left {
  left: calc(-963px + -1 * var(--shape-distance));
}
.x-shape-right {
  left: var(--shape-distance);
}
</style>
