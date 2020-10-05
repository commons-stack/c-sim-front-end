<template>
  <div class="h-1-1 w-1-1">
    <flex column align-items class="wrap pb-5">
      <transition name="tr-icon">
        <icon icon="Cad" class="icon" v-if="stage < 2" />
      </transition>
      <transition name="tr-hero">
        <grid
          class="gap-0p25 mt-2"
          justify-items
          text-center
          v-if="stage === 1"
        >
          <h1 text-xxxl bold>The Commons Simulator</h1>
          <p>Designing the Commons with the power of cadCAD</p>
        </grid>
      </transition>
      <transition name="tr-hero">
        <button
          class="mt-3"
          v-if="stage === 1"
          @click="
            nextStage()
            enterHandler()
          "
          style="transition-delay: 0.3s"
        >
          Enter
        </button>
      </transition>
      <transition name="tr-hero-2" appear>
        <grid
          gap="2"
          v-if="stage === 2"
          justify-items
          text-center
          style="transition-delay: 1s"
        >
          <p uppercase>leap one</p>
          <p text-xxxl>Initiating the RadicalXChange Commons</p>
          <p style="max-width: 700px" text-l>
            The Commons Simulator main character is creating a solar punk themed
            future. Your mission is to travel back to 2020 with cadCAD to save
            the planet and create a Solarpunk future by teaching important
            communities to set up their own Commons.
          </p>
          <button class="mt-2" @click="$router.push('/intro')">
            watch intro
          </button>
          <p class="cursor-pointer" @click="$router.push('/level/0-1')">Skip</p>
        </grid>
      </transition>
    </flex>
  </div>
</template>

<script>
import { utils } from '../../utils/utils.js'
export default {
  name: 'Home',
  async mounted() {
    await this.$sleep(2000)
    this.cssVars.beforeHeight = '30vh'
    this.cssVars.iconScale = 'scale(1.1)'
    await this.$sleep(300)
    if (this.stage < 1) this.stage += 1
  },
  data() {
    return {
      stage: 0,
      cssVars: {
        beforeHeight: '40vh',
        iconScale: 'scale(1.5)',
      },
    }
  },
  methods: {
    nextStage() {
      this.stage += 1
    },
    enterHandler() {
      this.cssVars.beforeHeight = '28vh'
      this.cssVars.iconScale = 'scale(2.5)'
      utils.body.style.overflowY = 'hidden'
      setTimeout(() => {
        utils.body.style.overflowY = 'auto'
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  &::before {
    content: '';
    transition: all cubic-bezier(0.28, 0.04, 0.34, 1.02) 1s;
    height: var(--before-height);
  }
}
.icon {
  transition: all ease-in-out 1s;
  transform: var(--icon-scale);
}

.tr-icon-leave-active {
  transition: all ease-in-out 1s;
}
.tr-icon-leave-to {
  opacity: 0;
}

.tr-hero-enter-active,
.tr-hero-leave-active {
  transition: all 1s cubic-bezier(0.28, 0.04, 0.34, 1.02);
}
.tr-hero-leave-to,
.tr-hero-enter {
  opacity: 0;
  transform: translateY(30vh);
}
.tr-hero-2-enter-active,
.tr-hero-2-leave-active {
  transition: all 1s cubic-bezier(0.28, 0.04, 0.34, 1.02);
}
.tr-hero-2-enter,
.tr-hero-2-leave-to {
  transform: translateY(-30vh);
  opacity: 0;
}
</style>
