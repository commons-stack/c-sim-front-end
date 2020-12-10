<template>
  <div class="border-radius-rounded" :class="classes" :style="styles"></div>
</template>

<script>
export default {
  name: 'break',
  props: {
    height: {
      type: String,
      default: '2',
    },
    color: {
      type: String,
      default: 'dark',
    },
  },
  computed: {
    styles() {
      return {
        height: `${this.height}px`,
      }
    },
    classes() {
      return [`bg-${this.color}`]
    },
  },
}
</script>

<style scoped lang="scss"></style>
