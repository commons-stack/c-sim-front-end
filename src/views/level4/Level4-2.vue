<template>
  <div class="layout-right h-1-1">
    <presentation-image />
    <grid justify-items-start align-items-start gap="2">
      <h3 class="teko-title">You did good.</h3>
      <grid gap="2" style="max-width: 650px;">
        <p>
          Conviction Voting is a continuous process - kind of like ‘vote streaming’. Token holders 
          express the degree of their conviction on a proposal by deciding how much of their voting 
          power will go towards each proposal. As tokens are held there over time, the weight 
          increases.
        </p>
        <p>
          When voting power accrues quickly, the Commons is able to quickly make decisions on 
          funding. When voting power accrues slowly the individuals in the Commons can better 
          predict what proposals are likely to pass in advance.
        </p>
        <p>
          For cadCAD to run its simulation, you must define how long it takes to demonstrate 
          conviction.
        </p>
      </grid>
      <button commons @click="$router.push('/level/5/1')" class="mt-2 mb-3">next</button>
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
