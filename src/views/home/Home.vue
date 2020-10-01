<template>
  <grid justify-items align-content gap="3" class="h-1-1">
    <icon icon="Cad" class="icon" />
    <grid gap="1" text-center>
      <h1 text-xxxl bold>The Commons Simulator</h1>
      <p>Designing the Commons with the power of cadCAD</p>
    </grid>
    <div>
      <button @click="$router.push('/intro')">Enter</button>
    </div>
  </grid>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      progress: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
