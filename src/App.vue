<template>
  <grid gtr="auto 1fr" class="h-1-1">
    <Notification />
    <Navigation />
    <main class="app-main" container-expand>
      <router-view />
    </main>
  </grid>
</template>

<script>
import Navigation from '@/components/app/Navigation.vue'
import Notification from '@/components/app/Notification.vue'

export default {
  name: 'app',
  props: {},
  methods: {},
  components: {
    Navigation,
    Notification,
  },
}
</script>

<style scoped lang="scss">
// leave this comment if style tag is empty; scss doesn't compile properly otherwise
.app-main {
  @extend .pt-1, .pb-2;
}
</style>
