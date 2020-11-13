<template>
  <transition-group name="home-trans" tag="div" class="home-list" text-center>
    <h1 key="1" class="item hero" :class="state > 0 && 'item-active'">
      The Commons Simulator
    </h1>
    <p key="2" class="item sub" :class="state > 1 && 'item-active'">
      Designing the Commons with the power of cadCAD
    </p>
    <button @click="$emit('click')" key="3" class="item mt-3" :class="state > 2 && 'item-active'">
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
  transform: translateY(300px);
  opacity: 0;
}
.item-active {
  transform: translateY(0px);
  opacity: 1;
}
.hero {
  @extend .font-teko;
  font-size: 90px;
}
.sub {
  @extend .font-ibm;
  font-size: 20px;
  position: relative;
  top: -10px;
}
</style>
