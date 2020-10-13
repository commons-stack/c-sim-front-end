<template>
  <div class="layout-right h-1-1">
    <grid justify-items-start align-items-start gap="2">
      <p class="level-title">Well done!</p>
      <grid gap="2" style="max-width: 650px">
        <p text-m>
          Seizing the opportunity to harvest another parameter from the wisdom of the group, one of
          a few you need to configure the Conviction Voting simulator, you ask about how much of the
          community funds can be distributed at any given time.
        </p>
        <p text-m>
          This parameter is defined by selecting a percentage of the available funding pool that can
          be distributed at any time. It effectively sets a maximum for a single proposal (or for a
          group of smaller proposals), ensuring that larger proposals require a greater amount of
          collective voting power from the community in order to pass.
        </p>
      </grid>
      <button @click="$router.push('/level/4/1')" class="mt-2 mb-3">next</button>
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

<style scoped lang="scss"></style>
