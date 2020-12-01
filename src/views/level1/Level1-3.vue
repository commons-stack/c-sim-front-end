<template>
  <div class="layout-right h-1-1">
    <presentation-img />
    <grid justify-items-start align-items-start gap="2">
      <h3 class="teko-title">Great!</h3>
      <grid gap="2" style="max-width: 650px;">
        <p>
          Now you know how many Hatchers will contribute to the first round of funding. But what
          will be funded? There are many great projects to create value for this community, but it
          was not so clear on how to decide which proposals to start with!
        </p>
        <p>
          The initial conditions are critical to understand because they determine the outcomes for
          complex systems. You must find out how many proposals will be collected for when the
          Hatchers start their voting.
        </p>
      </grid>
      <button commons @click="$router.push('/level/2/1')" class="mt-2 mb-3">next</button>
    </grid>
  </div>
</template>

<script>
export default {
  name: 'level-1-3',
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
p {
  @extend .font-ibm, .fs-20;
}
</style>
