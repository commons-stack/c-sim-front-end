<template>
  <transition-group name="home-trans" tag="div" class="home-list">
    <h1 text-xxxl bold key="1" class="item" :class="state > 0 && 'item-active'">
      The Commons Simulator
    </h1>
    <p key="2" class="item" :class="state > 1 && 'item-active'">
      Designing the Commons with the power of cadCAD
    </p>
    <button
      @click="$emit('click')"
      key="3"
      class="item mt-1"
      :class="state > 2 && 'item-active'"
    >
      Enter
    </button>
  </transition-group>
</template>

<script>
export default {
  name: 'home-hero',
  created() {
    const interval = setInterval(() => {
      if (this.state === 3) clearInterval(interval)
      this.state += 1
    }, 200)
  },
  data() {
    return {
      state: 0,
    }
  },
}
</script>

<style scoped lang="scss">
.item {
  transition: all 1.7s ease;
  // position: relative;
  transform: translateY(300px);
  opacity: 0;
}
.item-active {
  transform: translateY(0px);
  opacity: 1;
}
</style>
