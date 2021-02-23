<template>
  <div class="h-vh">
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
  components: { Notification },
}
</script>

<style lang="scss">
// leave this comment if style tag is empty; scss doesn't compile properly otherwise
.app-content {
  min-height: 100vh;
  width: 100%;
  & > *:first-child {
    padding-bottom: var(--app-vertical-padding);
  }
}
</style>
