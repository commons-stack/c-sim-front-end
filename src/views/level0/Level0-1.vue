<template>
  <div class="layout-center">
    <div class="x-home-bg"></div>
    <img class="x-home-bg-img" src="@/assets/home_bg.png" alt="background image" />
    <p class="letter-spacing-5" uppercase>Level 0</p>
    <h2 class="level-title">Choose the rules for the Commons</h2>
    <p class="level-text mt-2">
      To whom can we give these fantastical tools that will empower humanity to save life on earth?
      Are you ready to find out?
    </p>
    <form-input
      class="text-xxxl text-center mt-2"
      @valid="forms.vset.input.name"
      v-model="forms.input.name"
      required
      placeholder="Enter your name"
    />
    <button @click="goNext" class="mt-2" :disabled="!forms.vget.input.form">next</button>
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
  async created() {
    window.addEventListener('resize', this.windowWidthWatcher)
    const shapeDist = this.getShapeDistance()
    this.cssVars.shapeDistance = shapeDist * 2 + 'px'
    await this.$sleep(1)
    this.cssVars.shapeDistance = shapeDist + 'px'
    this.cssVars.bgY = 0
    this.cssVars.bgOpacity = 0.7
    await this.$sleep(1000)
    this.cssVars.bgDuration = '1s'
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowWidthWatcher)
  },
  data() {
    return {
      forms: {
        input: {
          name: this.$store.state.UserModule.name,
        },
      },
      cssVars: {
        bgY: '-20px',
        bgOpacity: 0,
        bgDuration: '3s',
        shapeDistance: '0px',
        shapeTop: '-700px',
      },
    }
  },
  watch: {
    'forms.input.name'(x) {
      this.$store.commit('UserModule/setName', x)
    },
  },
  methods: {
    windowWidthWatcher: utils.throttle(function() {
      this.cssVars.shapeDistance = `${this.getShapeDistance()}px`
    }),
    getShapeDistance: () => window.innerWidth / 2 - window.innerWidth / 4,
    goNext() {
      this.cssVars.shapeDistance = `${this.getShapeDistance() * 2.1}px`
      this.cssVars.bgOpacity = 0
      this.cssVars.bgY = '-20px'
      setTimeout(() => {
        this.$router.push('/level/0/2')
      }, 1100)
    },
  },
}
</script>

<style scoped lang="scss">
.x-input {
  border: solid 1px black;
}
.x-home-bg,
.x-home-bg-img {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  transition-property: opacity, transform;
  transition-duration: var(--bg-duration);
  transition-timing-function: cubic-bezier(0.2, -0.13, 0, 1);
  opacity: var(--bg-opacity);
}
.x-home-bg {
  background: black;
}
.x-home-bg-img {
  transform: translateY(var(--bg-y));
  object-position: top;
  object-fit: cover;
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
