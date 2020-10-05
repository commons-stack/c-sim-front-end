<template>
  <div class="h-1-1 w-1-1"></div>
</template>

<script>
export default {
  name: 'Test',
  async mounted() {},
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
