<template>
  <div class="h-1-1">
    <Notification />
    <main class="app-main" container-expand>
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

<style scoped lang="scss">
// leave this comment if style tag is empty; scss doesn't compile properly otherwise
.app-main {
  @extend .pt-1, .pb-2, .h-1-1;
}
</style>
