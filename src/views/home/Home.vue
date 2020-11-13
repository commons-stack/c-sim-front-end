<template>
  <grid class="flex-center h-1-1" @click="$send('HERO')">
    <div class="x-home-bg"></div>
    <img class="x-home-bg-img" src="@/assets/home_bg.png" alt="background image" />

    <transition-group
      name="home-trans"
      tag="div"
      class="home-list"
      v-if="!['info', 'afterInfo'].includes(xstate)"
    >
      <grid key="0" class="logo">
        <transition name="fade">
          <p class="logo-loading" v-if="xstate === 'splash'">
            Loading
            <transition-group name="slide" tag="span" class="absolute">
              <span v-for="dot in dots.count" :key="dot" class="logo-loading-dot">.</span>
            </transition-group>
          </p>
        </transition>
        <icon icon="Cad" ref="icon" class="logo-icon" v-if="xstate !== 'afterInfo'" />
      </grid>
      <home-hero key="1" class="pb-2" v-if="xstate === 'hero'" @click="$send('INFO')" />
    </transition-group>

    <transition-group
      name="home-trans-reverse"
      tag="div"
      class="home-list"
      v-if="['info', 'afterInfo'].includes(xstate)"
    >
      <home-info key="1" v-if="['info', 'afterInfo'].includes(xstate)" class="pb-2" />
    </transition-group>

    <div class="x-home-shapes-wrap">
      <div class="x-home-shapes">
        <icon icon="ShapeRight" class="x-shape-right" />
        <icon icon="ShapeLeft" class="x-shape-left" />
      </div>
    </div>
  </grid>
</template>

<script>
import * as xstate from 'xstate'
import HomeHero from '../../components/home/HomeHero.vue'
import HomeInfo from '../../components/home/HomeInfo.vue'
import { utils } from '../../utils/utils.js'

const machine = xstate.Machine({
  initial: 'splash',
  states: {
    splash: { on: { HERO: 'hero' }, after: { 2000: 'hero' } },
    hero: { on: { INFO: 'info' } },
    info: { after: { 1400: 'afterInfo' } },
    afterInfo: { type: 'final' },
  },
})

export default {
  name: 'home',
  components: {
    HomeInfo,
    HomeHero,
  },
  created() {
    this.dots.interval = setInterval(() => {
      if (this.dots.count === 3) this.dots.count = 0
      else this.dots.count += 1
    }, 400)
    window.addEventListener('resize', this.windowWidthWatcher)
  },
  beforeDestroy() {
    clearInterval(this.dots.interval)
    window.removeEventListener('resize', this.windowWidthWatcher)
  },
  data() {
    return {
      machine: xstate.interpret(machine),
      cssVars: {
        bgY: '-30px',
        shapeDistance: '0px',
        shapeTop: '-1680px',
        shapeTransition: 'all 1.8s cubic-bezier(0.37, 0, 0.25, 1)',
        bgOpacity: 0.5,
        iconScale: 'scale(2)',
        iconOpacity: 1,
        iconHeight: '200px',
        iconPos: 'static',
        iconTransDuration: '3s',
      },
      dots: {
        interval: undefined,
        count: 0,
      },
    }
  },
  methods: {
    windowWidthWatcher: utils.throttle(function() {
      this.cssVars.shapeDistance = `${this.xstate === 'splash' ? 0 : this.getShapeDistance()}px`
    }),
    getShapeDistance: () => window.innerWidth / 2 - window.innerWidth / 4,
  },
  watch: {
    xstate(type) {
      // if (type === 'splash') {}
      if (type === 'hero') {
        this.cssVars.shapeDistance = `${this.getShapeDistance()}px`
        this.cssVars.bgY = 0
        this.cssVars.iconScale = 'scale(1)'
        this.cssVars.bgOpacity = 1
        utils.body.style.overflowY = 'hidden'
        setTimeout(() => (utils.body.style.overflowY = 'auto'), 2000)
        clearInterval(this.dots.interval)
      }
      if (type === 'info') {
        this.cssVars.shapeTransition = 'all 2.7s cubic-bezier(0.37, 0, 0.1, 1)'
        this.cssVars.shapeTop = '-500px'
        this.cssVars.bgY = '-10px'
        this.cssVars.bgOpacity = 0.5
        this.cssVars.iconTransDuration = '1.4s'
        this.cssVars.iconScale = 'scale(3)'
        this.cssVars.iconOpacity = 0
        this.cssVars.iconPos = 'absolute'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.x-home-bg,
.x-home-bg-img,
.x-home-shapes-wrap {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
}
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
  top: var(--shape-top);
  position: absolute;
  transition: var(--shape-transition);
}
.x-shape-left {
  left: calc(-963px + -1 * var(--shape-distance));
}
.x-shape-right {
  left: var(--shape-distance);
}
.x-home-bg {
  background: black;
}
.x-home-bg-img {
  transform: translateY(var(--bg-y));
  object-position: top;
  object-fit: cover;
  opacity: var(--bg-opacity);
  transition-property: opacity, transform;
  transition-duration: 3s;
  transition-timing-function: cubic-bezier(0.2, -0.13, 0, 1);
}
.logo {
  justify-items: center;
  min-width: 350px;
  position: relative;
  &-icon {
    transition-timing-function: cubic-bezier(0.2, -0.13, 0, 1);
    transition-property: all;
    transition-duration: var(--icon-trans-duration);
    position: var(--icon-pos);
    transform: var(--icon-scale);
    opacity: var(--icon-opacity);
    max-height: var(--icon-height);
  }
  &-loading {
    @extend .font-orbitron;
    font-size: 24px;
    background: linear-gradient(94.78deg, #67de69 -5.54%, #2c6bca 110.77%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.8s var(--bezier-home);
    position: absolute;
    text-align: center;
    top: -120px;
    &-dot {
      background: #2c6bca;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.home-trans-reverse-leave-to,
.home-trans-reverse-enter {
  opacity: 0;
}
.home-trans-reverse-leave-active {
  position: absolute;
}
</style>
