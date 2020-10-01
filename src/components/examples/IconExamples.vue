<template>
  <grid gap="1">
    <p>Icons</p>
    <flex gap="1" align-items>
      <icon button icon="Facebook" hover="primary" />
      <icon button icon="Google" hover="secondary" />
      <icon button icon="Twitter" />
      <icon icon="ArrowBack" color="primary" />
      <icon icon="ArrowForward" />
      <icon icon="Heart" />
      <icon icon="Profile" />
      <icon icon="Settings" />
      <icon icon="Search" />
    </flex>
  </grid>
</template>

<script>
export default {
  name: 'notification-examples',
  props: {},
  data() {
    return {
      message: '',
    }
  },
  methods: {
    successNotification() {
      this.$store.dispatch('NotificationModule/success', this.message)
    },
    errorNotification() {
      this.$store.dispatch('NotificationModule/error', this.message)
    },
  },
}
</script>

<style scoped lang="scss"></style>
