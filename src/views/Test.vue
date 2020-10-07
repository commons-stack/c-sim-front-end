<template>
  <grid h-1-1 flex-center @click="shown++">
    <transition-group name="list-complete" tag="div" class="list">
      <div key="1">qweqweqweqwe</div>
      <div v-if="shown === 0" key="2">2</div>
      <div v-if="shown > 0" key="3">3</div>
    </transition-group>
  </grid>
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
