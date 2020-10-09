<template>
  <grid class="flex-center h-1-1" @click="$send('HERO')">
    <transition-group
      name="home-trans"
      tag="div"
      class="home-list"
      v-if="!['info', 'afterInfo'].includes(xstate)"
    >
      <grid key="0" class="logo">
        <transition name="fade">
          <p class="logo-loading" text-xl font-mono v-if="xstate === 'splash'">
            Loading
            <transition-group name="slide" tag="span" class="absolute">
              <span v-for="dot in dots.count" :key="dot">.</span>
            </transition-group>
          </p>
        </transition>
        <icon
          icon="Cad"
          ref="icon"
          class="logo-icon"
          v-if="xstate !== 'afterInfo'"
        />
      </grid>
      <home-hero
        key="1"
        class="pb-2"
        v-if="xstate === 'hero'"
        @click="$send('INFO')"
      />
    </transition-group>

    <transition-group
      name="home-trans-reverse"
      tag="div"
      class="home-list"
      v-if="['info', 'afterInfo'].includes(xstate)"
    >
      <home-info
        key="1"
        v-if="['info', 'afterInfo'].includes(xstate)"
        class="pb-2"
      />
    </transition-group>
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
  },
  beforeDestroy() {
    clearInterval(this.dots.interval)
  },
  data() {
    return {
      machine: xstate.interpret(machine),
      cssVars: {
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
  watch: {
    xstate(type) {
      if (type !== 'splash') {
        utils.body.style.overflowY = 'hidden'
        setTimeout(() => {
          utils.body.style.overflowY = 'auto'
        }, 2000)
      }
      if (type === 'hero') {
        this.cssVars.iconScale = 'scale(1)'
        clearInterval(this.dots.interval)
      }
      if (type === 'info') {
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
    transition: all 0.8s var(--bezier-home);
    position: absolute;
    text-align: center;
    top: -120px;
  }
}
.home-trans-reverse-leave-to,
.home-trans-reverse-enter {
  opacity: 0;
  // transform: translateY(-300px);
}
.home-trans-reverse-leave-active {
  position: absolute;
}
</style>
