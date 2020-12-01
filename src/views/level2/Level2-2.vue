<template>
  <div class="layout-right h-1-1">
    <presentation-image />
    <grid justify-items-start align-items-start gap="2">
      <h3 class="teko-title">You are on a roll!</h3>
      <grid gap="2" style="max-width: 650px;">
        <p>
          The crowd is engaged, we have many proposals on the table - now how will they be funded
          once passed?
        </p>
        <p>
          The second parameter that cadCAD requires is: What percent of the contributions will be
          allocated to the Funding Pool? The balance will be the Reserve that backs the RxC tokens.
        </p>
      </grid>
      <p class="teko-subtitle">Funding Pools</p>
      <grid gap="2" style="max-width: 650px;">
        <p>
          The RxC Reserve backs the RxC token, guaranteeing liquidity for all tokens issued so that
          they will always have monetary value. The Funding Pool will be used to fund RadicalxChange
          initiatives.
        </p>
        <p>
          The total funds raised are split between the 2 pools, with the amount going to the Funding
          Pool being called the Hatch Tribute. If you put too much funds in the Funding Pool, the
          token may have trouble maintaining value, and if you put too much in the RxC Reserve, the
          Commons won’t be able to support very many projects.
        </p>
      </grid>
      <button commons @click="$router.push('/level/3/1')" class="mt-2 mb-3">next</button>
    </grid>
  </div>
</template>

<script>
export default {
  name: 'level-2-3',
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
p {
  @extend .font-ibm, .fs-20;
}
</style>
