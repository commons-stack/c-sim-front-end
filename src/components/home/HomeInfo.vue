<template>
  <transition-group name="home-trans" tag="div" class="home-list" text-center>
    <p
      uppercase
      key="1"
      class="item lato-header pt-3"
      :class="state > 4 && 'item-active'"
    >
      leap one
    </p>
    <p
      text-xxxl
      key="2"
      class="item mt-1p5"
      :class="state > 3 && 'item-active'"
    >
      Initiating the RadicalxChange Commons
    </p>
    <p
      style="max-width: 700px;"
      text-l
      key="3"
      class="item font-ibm mt-2"
      :class="state > 2 && 'item-active'"
    >
      Become the futuristic, solarpunk character in this Commons Simulator
      adventure to correct the course of history. Your mission is to travel back
      in time with cadCAD, and save the planet by teaching communities how to
      create a regenerative Commons.
    </p>
    <button
      commons
      @click="$router.push('/intro')"
      key="4"
      class="item mt-4"
      :class="state > 1 && 'item-active'"
    >
      watch intro
    </button>
    <p
      class="cursor-pointer item mt-3"
      :class="state > 0 && 'item-active'"
      @click="$router.push('/level/0/1')"
      key="5"
    >
      Skip
    </p>
  </transition-group>
</template>

<script>
export default {
  name: 'home-info',
  created() {
    const interval = setInterval(() => {
      if (this.state === 5) clearInterval(interval);
      this.state += 1;
    }, 200);
  },
  data() {
    return {
      state: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.item {
  transition: all 1.5s ease;
  transform: translateY(-400px);
  opacity: 0;
}
.item-active {
  transform: translateY(0px);
  opacity: 1;
}
</style>
