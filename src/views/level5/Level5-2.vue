<template>
  <div class="layout-right h-1-1">
    <presentation-image />
    <grid justify-items-start align-items-start gap="1">
      <h3 class="teko-title">Almost there...</h3>
      <grid gap="1" style="max-width: 650px;">
        <p>
          The last set of parameters that cadCAD requires to calculate are now being defined.
        </p>
        <p>
          Members choose to pass good proposals that produce valuable outcomes for the community.
          They contribute time and resources in exchange for their governance tokens. They continue
          to grow the RxC Commons and raise the price of the token.
        </p>
        <p>
          Some members may not like the results of the proposals passed by the RadicalxChange
          Commons, or may need to sell some of their tokens to cover their expenses. When they sell
          their RxC token, the overall price of the token decreases as value is being withdrawn from
          the community. At the same time, a portion of the withdrawal (5%, for example) feeds into
          the community funding pool, as an ‘exit tribute’ to the RadicalxChange community. This
          protects the RxC Commons from profit-extracting behaviour, and ensures continuous funding for
          the community pool of funds that can be put towards proposals.
        </p>
        <p>
          What percentage of the released Reserve goes to the Funding Pool when an exiting member
          sells their tokens, and how much of the value remains for the contributor to receive?
        </p>
      </grid>
      <button commons @click="$router.push('/level/6/1')" class="mt-2 mb-3">next</button>
    </grid>
  </div>
</template>

<script>
export default {
  name: 'level-5-2',
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
p {
  @extend .font-ibm, .fs-18;
}
</style>
