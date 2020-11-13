<template>
  <grid :gtc="titleOnly ? '1fr' : '120px 1fr 120px'" class="x-wrap">
    <div justify-self-start v-if="!titleOnly">
      <p class="x-text-button inline" @click="$router.push('/level/1/2').catch(() => {})">
        Restart
      </p>
    </div>
    <p class="x-title" justify-self align-self>DESIGNING THE COMMONS</p>
    <flex gap="1" justify-self-end v-if="!titleOnly">
      <p class="x-text-button inline" v-if="help" @click="$emit('help')">Help</p>
      <p class="x-text-button inline" @click="$router.push('/')">Exit</p>
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
    titleOnly: Boolean,
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
  font-size: 12px;
  font-weight: bold;
  @extend .font-lato;
  opacity: 0.4;
  text-align: center;
}
.x-text-button {
  @extend .text-button, .font-ibm;
  font-size: 16px;
}
</style>
