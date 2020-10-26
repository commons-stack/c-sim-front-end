<template>
  <div>
    <icon icon="Profile" color="primary" button></icon>
  </div>
</template>

<script>
export default {
  name: 'test',
  components: {},
  data() {
    return {
      shown: 0,
    }
  },
}
</script>

<style scoped lang="scss">
.list > div {
  margin-top: 2rem;
  transition: all 1s;
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  // transform: translateY(300px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
