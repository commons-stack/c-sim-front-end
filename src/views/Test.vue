<template>
  <div class="pt-2">
    <p class="qwe">test</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      cssVars: {
        size: '60px',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.qwe {
  font-size: var(--size);
  color: red;
}
</style>
