<template>
  <flex :gap="gap">
    <icon :icon="icon" v-for="x in Number(count)" :key="x" :color="color" />
  </flex>
</template>

<script>
export default {
  name: 'icon-list',
  props: {
    count: {
      type: [Number, String],
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    gap: {
      type: String,
      default: '0.5',
    },
    color: {
      type: String,
      default: 'white',
    },
  },
}
</script>

<style scoped lang="scss">
</style>
