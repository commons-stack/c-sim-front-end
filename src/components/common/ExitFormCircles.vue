<template>
  <grid gtc-fill="30px" class="x-grid">
    <icon icon="ExitFormCircle" v-for="i in dotNum" :key="i" :style="styles(i)" class="x-circle" />
  </grid>
</template>

<script>
export default {
  name: 'exit-form-circles',
  props: {
    progress: {
      type: Number,
      required: true,
    },
    dots: {
      type: Number,
      default: 9,
    },
  },
  methods: {
    styles(i) {
      if (!(((i - 1) % 3) % 2)) return { position: 'relative', top: '15px' }
    },
  },
  computed: {
    dotNum() {
      return Math.round((this.progress / 100) * this.dots)
    },
  },
}
</script>

<style scoped lang="scss">
.x-grid {
  width: 90px;
  position: absolute;
  top: 0;
  grid-auto-rows: 30px;
  align-items: center;
  justify-items: center;
}
</style>
