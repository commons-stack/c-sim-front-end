<template>
  <div class="layout-right h-1-1">
    <presentation-image />
    <grid justify-items-start align-items-start gap="1">
      <h3 class="teko-title">Well done!</h3>
      <grid gap="1" style="max-width: 650px;">
        <p>
          There are a few parameters you need to configure the Conviction Voting simulator. Seizing
          the opportunity to harvest another parameter, you ask about how much of the community funds can be
          distributed at any given time.
        </p>
        <p>
          This parameter will determine the percentage of the available funding pool that can
          be distributed at any time. It effectively sets a maximum for a single proposal (or for a
          group of smaller proposals), creating a sort of budget for the community that is realtive to how much funding the community has.
        </p>
      </grid>
      <button commons @click="$router.push('/level/4/1')" class="mt-2 mb-3">next</button>
    </grid>
  </div>
</template>

<script>
export default {
  name: 'level-3-2',
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
p {
  @extend .font-ibm, .fs-18;
}
</style>
