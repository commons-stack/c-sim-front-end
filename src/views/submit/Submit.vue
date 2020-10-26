<template>
  <div class="layout-vertical">
    <icon icon="CircleNet" class="bg-net" />
    <p text-xl>Generating your Commons Simulation</p>
    <p class="text-center mt-2" style="max-width: 800px;">
      This is the moment of truth! Did they choose the right parameters to yield positive results
      for the success of the RxC community, and the continuation of humankind into a just,
      prosperous, and decentralized future?
    </p>
    <button class="mt-2" @click="$router.push('/results')">results</button>
  </div>
</template>

<script>
export default {
  name: 'submit',
  created() {
    // setTimeout(() => this.$router.push('/results'), 5000)
  },
}
</script>

<style scoped lang="scss">
.bg-net {
  position: fixed;
  bottom: -100px;
  left: 0;
  @include l {
    bottom: 0;
  }
}
</style>
