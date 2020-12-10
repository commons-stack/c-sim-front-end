<template>
  <div class="x-wrap">
    <transition-group name="my-list" tag="div">
      <div
        v-for="notification in notifications"
        class="x-notification"
        :class="getClass(notification.type)"
        :key="notification.id"
      >
        {{ notification.message }}
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'notification',
  props: {},
  computed: {
    notifications() {
      return this.$store.state.NotificationModule.notifications
    },
  },
  methods: {
    getClass(type) {
      return [`x-${type}`]
    },
  },
})
</script>

<style scoped lang="scss">
.x-wrap {
  @extend .fixed, .w-200;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.x-notification {
  @extend .color-dark, .mb-1, .text-center, .w-1-1, .ph-0p5, .pv-1, .border-radius-s;
  transition: all 0.6s ease-in-out;
}
.x-success {
  @extend .border-success;
  background: lighter($color-success, 80%);
}
.x-error {
  @extend .border-error;
  background: lighter($color-error, 85%);
}
.my-list-enter-active,
.my-list-leave-active {
  transition: all 0.3s ease-in-out;
  position: absolute;
}
.my-list-enter {
  opacity: 0;
  transform: translateY(10px);
}
.my-list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
