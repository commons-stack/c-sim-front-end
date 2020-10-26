<template>
  <grid gtc="120px 1fr 120px" class="x-wrap">
    <div>
      <p class="x-button" @click="$emit('restart')">Restart</p>
    </div>
    <p class="x-title" justify-self>DESIGNING THE COMMONS</p>
    <flex gap="1" justify-self-end>
      <p class="x-button" v-if="help" @click="$emit('help')">Help</p>
      <p class="x-button" @click="$router.push('/')">Exit</p>
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
.x-button {
  @extend .transition;
  color: #43a983;
  font-size: 16px;
  display: inline;
  cursor: pointer;
  &:hover {
    color: lighter(#43a983, 5%);
  }
}
</style>
