<template>
  <div class="layout-right h-1-1">
    <presentation-img />
    <grid justify-items-start align-items-start gap="2">
      <h3 class="teko-title">You did good.</h3>
      <grid gap="2" style="max-width: 650px">
        <p>
          Seizing the opportunity to harvest another parameter from the wisdom of the group, one of
          a few you need to configure the Conviction Voting simulator, you ask about how much of the
          community funds can be distributed at any given time.
        </p>
        <p>
          This parameter is defined by selecting a percentage of the available funding pool that can
          be distributed at any time. It effectively sets a maximum for a single proposal (or for a
          group of smaller proposals), ensuring that larger proposals require a greater amount of
          collective voting power from the community in order to pass.
        </p>
      </grid>
      <button @click="$router.push('/level/5/1')" class="mt-2 mb-3">next</button>
    </grid>
  </div>
</template>

<script>
export default {
  name: 'level-4-2',
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
p {
  @extend .font-ibm, .fs-20;
}
</style>
