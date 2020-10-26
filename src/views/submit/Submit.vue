<template>
  <div class="layout-vertical">
    <p text-xl text-center>Generating your Commons Simulation</p>
    <p class="text-center mt-2" style="max-width: 800px;">
      This is the moment of truth! Did they choose the right parameters to yield positive results
      for the success of the RxC community, and the continuation of humankind into a just,
      prosperous, and decentralized future?
    </p>

    <grid key="0" class="logo">
      <transition name="fade">
        <p class="logo-loading" text-xl font-mono>
          Loading
          <transition-group name="slide" tag="span" class="absolute">
            <span v-for="dot in dots.count" :key="dot">.</span>
          </transition-group>
        </p>
      </transition>
      <icon icon="Cad" ref="icon" class="logo-icon" />
    </grid>
    <button class="mt-2" @click="$router.push('/results')">results</button>
    <icon icon="CircleNet" class="bg-net" />
  </div>
</template>

<script>
export default {
  name: 'submit',
  created() {
    this.dots.interval = setInterval(() => {
      if (this.dots.count === 3) this.dots.count = 0
      else this.dots.count += 1
    }, 400)
    // setTimeout(() => this.$router.push('/results'), 5000)
  },
  data() {
    return {
      dots: {
        interval: undefined,
        count: 0,
      },
    }
  },
}
</script>

<style scoped lang="scss">
.bg-net {
  position: fixed;
  z-index: -100;
  bottom: -100px;
  left: 0;
  @include l {
    bottom: 0;
  }
}
.logo {
  padding: 2rem 0 1rem;
  @include m {
    padding: 4rem 0 2rem;
  }
  @include l {
    padding: 6rem 0 3rem;
  }
  @include xl {
    padding: 10rem 0 4rem;
  }
  justify-items: center;
  &-icon {
    margin-top: 3rem;
    transform: scale(1.5);
  }
}
</style>
