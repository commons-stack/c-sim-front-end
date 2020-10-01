<template>
  <grid gap="1">
    <p>Notifications</p>
    <grid
      gap="1"
      gtc="1fr 1fr"
      gtr="auto auto"
      gta="'form form' 'success error'"
    >
      <form-input
        style="grid-area: form"
        placeholder="Notification message"
        v-model="message"
      />
      <button
        style="grid-area: success"
        success
        expand
        @click="$notification.success(message)"
      >
        Send Success
      </button>
      <button
        style="grid-area: error"
        error
        expand
        @click="$notification.error(message)"
      >
        Send Error
      </button>
    </grid>
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
}
</script>

<style scoped lang="scss"></style>
