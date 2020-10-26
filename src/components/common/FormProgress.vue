<template>
  <grid gap="1">
    <form-progress-button v-for="lvl in numOfLevels" :key="lvl" :level="lvl - 1" />
  </grid>
</template>

<script>
import FormProgressButton from './FormProgressButton.vue'

export default {
  name: 'form-progress',
  components: {
    FormProgressButton,
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
