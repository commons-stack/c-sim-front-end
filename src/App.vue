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
  components: { Notification },
  data() {
    return {
      cssVars: {
        height: '100vh',
      }
    }
  },
  watch: {
    $route() {
      if(this.$route.path === '/level/0/2') {
        this.cssVars.height = '100%'
      }
    }
  }
}
</script>

<style lang="scss">
// leave this comment if style tag is empty; scss doesn't compile properly otherwise
.app-content {
  width: 100%;
  height: var(--height);
  & > *:first-child {
    padding-bottom: var(--app-vertical-padding);
  }
}
</style>
