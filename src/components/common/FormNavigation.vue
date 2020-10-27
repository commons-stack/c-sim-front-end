<template>
  <grid gtc="120px 1fr 120px" class="x-wrap">
    <div justify-self-start>
      <p class="text-button inline" @click="$router.push('/level/1/2').catch(() => {})">Restart</p>
    </div>
    <p class="x-title" justify-self>DESIGNING THE COMMONS</p>
    <flex gap="1" justify-self-end>
      <p class="text-button inline" v-if="help" @click="$emit('help')">Help</p>
      <p class="text-button inline" @click="$router.push('/')">Exit</p>
    </flex>
  </grid>
</template>

<script>
export default {
  name: 'form-navigation',
  props: {
    help: {
      type: Boolean,
      default: true,
    },
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.x-wrap {
  position: relative;
  top: -30px;
  width: 100%;
  @include m {
    top: -40px;
  }
}
.x-title {
  @include letter-spacing(8px);
  opacity: 0.4;
  text-align: center;
}
</style>
