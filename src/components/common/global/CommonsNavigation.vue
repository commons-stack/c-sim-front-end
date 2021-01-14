<template>
  <grid gap="1" class="align-self-start commons-nav">
    <commons-navigation-button v-for="lvl in numOfLevels" :key="lvl" :level="lvl - 1" />
  </grid>
</template>

<script>
import CommonsNavigationButton from './CommonsNavigationButton.vue'

export default {
  name: 'commons-navigation',
  components: {
    CommonsNavigationButton,
  },
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      numOfLevels: 8,
      cssVars: {
        display: this.mobile ? 'grid' : 'none'
      },
    }
  },
  computed: {
    currentLevel() {
      const routeLevelIndex = '/level/level-number/'.split('/').findIndex(x => x === 'level-number')
      return Number(this.$route.path.split('/')[routeLevelIndex])
    },
  },
}
</script>

<style scoped lang="scss">
.commons-nav {
  display: var(--display) !important;
  @include m {
    display: grid !important;
  }
}
</style>
