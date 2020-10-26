<template>
  <div class="layout-vertical">
    <h2 class="level-title">
      You have been chosen to bring cadCAD back in time
    </h2>
    <p class="level-text mt-1">
      You don’t land in a different time-space so much as you appear in it, the sensation of gravity
      slowly returning to each of your trillions of cells.
    </p>
    <img class="level-image" src="@/assets/level_0_img_1.png" alt="" />
    <p class="level-text mt-1">
      Despite never being in the 21st century before, strangely enough, the smell is instantly
      familiar. The vaguely metallic and dusty aroma of this bygone industrialized era mingles with
      the odor of the back alley you find yourself in.
    </p>
    <p class="level-text">
      Walking through the bustling pre-apocalyptic city, you are awed by the unanticipated warmth of
      sunshine and catch a glimpse of yourself in a store window. A cheery woman with definitive
      style and charisma is reflected back!
    </p>
    <h2 class="level-title mt-3">Who am I?</h2>
    <p class="level-text mt-1">
      Looking at the phone in your pocket you intuitively know how to unlock it and scroll through
      to find out that your name is Nik.
    </p>
    <img class="level-image" src="@/assets/level_0_img_2.png" alt="" />
    <h2 class="level-title mt-3">Your mission</h2>
    <p class="level-text mt-1">
      You determine that your mission is to initiate the design of a self-sustaining Commons at a
      strategic open source distribution point. This could ripple the needed economic value
      throughout concentric spheres of human interaction worldwide regardless of class or access.
    </p>
    <img class="level-image" src="@/assets/level_0_img_3.png" alt="" />
    <h2 class="level-title mt-3">Commons</h2>
    <p class="level-text mt1">
      A Commons is a well- engineered, community- focused economy that can reward value creation
      where business models fail to do so. They can be formed whenever a community is creating value
      for society as a whole.
    </p>
    <p class="level-text mt1">
      These Commons emerge out of the relationships between three main components:
      <strong>the community, their shared resources, and the protocols</strong>
      they use to make decisions and reward continued value creation.
    </p>
    <p class="level-text mt1">
      Designing the protocols that can successfully govern Commons can only be done by the community
      that are intimately connected to the shared resource... <br /><strong
        >your task is to guide them down that path.</strong
      >
    </p>
    <button @click="$router.push('/level/1/1')" class="mt-3">
      DESIGN THE COMMONS
    </button>
    <transition name="fade" appear>
      <div class="x-home-shapes-wrap">
        <div class="x-home-shapes">
          <icon icon="ShapeRight" class="x-shape-right" />
          <icon icon="ShapeLeft" class="x-shape-left" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { utils } from '../../utils/utils.js'

export default {
  name: 'level-0-2',
  created() {
    window.addEventListener('resize', this.windowWidthWatcher)
    window.addEventListener('scroll', this.windowScrollWatcher)
  },
  mounted() {
    const distance = this.getShapeDistance()
    this.cssVars.shapeDistance = distance * 2 + 'px'
    setTimeout(() => {
      this.cssVars.shapeDistance = distance + 'px'
    })
    this.maxScrollPos =
      document.documentElement.scrollHeight - document.documentElement.clientHeight
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowWidthWatcher)
    window.removeEventListener('scroll', this.windowScrollWatcher)
  },
  data() {
    return {
      maxScrollPos: undefined,
      shapeBounds: [-1620, -4200],
      cssVars: {
        shapeDistance: undefined,
        offsetTop: '-4200px',
      },
    }
  },
  methods: {
    windowWidthWatcher: utils.throttle(function() {
      this.cssVars.shapeDistance = `${this.getShapeDistance()}px`
    }),
    getShapeDistance: () => window.innerWidth / 2 - window.innerWidth / 4,
    windowScrollWatcher: utils.throttle(function() {
      const offset = Math.floor((window.scrollY / this.maxScrollPos) * 100) / 100
      const value = `${offset * 2580 - 4200}px`
      this.cssVars.offsetTop = value
    }),
  },
}
</script>

<style scoped lang="scss">
.x-home-shapes-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.x-home-shapes {
  position: relative;
}
.x-shape-left,
.x-shape-right {
  top: var(--offset-top);
  position: absolute;
  z-index: -1;
  transition: all 1.8s cubic-bezier(0.35, 0.14, 0.23, 0.93);
}
.x-shape-left {
  left: calc(-963px + -1 * var(--shape-distance));
}
.x-shape-right {
  left: var(--shape-distance);
}
</style>
