<template>
  <div class="h-1-1">
    <Notification />
    <main class="app-content" container-expand>
      <router-view />
    </main>
  </div>
</template>

<script>
import Notification from '@/components/app/Notification.vue'

export default {
  name: 'app',
  props: {},
  methods: {},
  components: {
    Notification,
  },
}
</script>

<style lang="scss">
// leave this comment if style tag is empty; scss doesn't compile properly otherwise
.app-content {
  height: 100%;
  & > *:first-child {
    padding-bottom: var(--app-vertical-padding);
  }
}
</style>
