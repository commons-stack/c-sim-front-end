<template>
  <grid gap="1" class="align-self-start">
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
  data() {
    return {
      numOfLevels: 8,
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

<style scoped lang="scss"></style>
