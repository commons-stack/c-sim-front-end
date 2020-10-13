<template>
  <div class="layout-vertical">
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" />
    <p text-xl>Inputs Received by cadCAD!</p>
    <p>
      Will the Commons succeed, the Movement take off, and new economy creation cascade around the
      world?
    </p>
    <div class="layout-form">
      <form-progress />
    </div>

    <button @click="$router.push('/submit')">run simulation</button>

    <modal ref="modal" bg="" overlay="dark">
      <div class="layout-modal">
        <h2 class="level-title">Exit Tribute</h2>
        <p class="level-text mt-1">
          Members choose to pass good proposals that produce valuable outcomes for the community.
          They contribute time and resources in exchange for their governance tokens. They continue
          to grow the Commons and raise the price of the token.
        </p>
        <p class="level-text">
          Some members may not like the results of the proposals passed by the RadicalxChange
          Commons, or may need to sell some of their tokens to cover their expenses. When they sell
          their RxC token, the overall price of the token decreases as value is being withdrawn from
          the community. At the same time, a portion of the withdrawal (5%, for example) feeds into
          the community funding pool, as an ‘exit tribute’ to the RadicalxChange community. This
          protects the Commons from profit-extracting behaviour, and ensures continuous funding for
          the community pool of funds that can be put towards proposals.
        </p>
        <p class="level-text">
          What percentage of the released Reserve goes to the Funding Pool when an exiting member
          sells their tokens, and how much of the value remains for the contributor to receive?
        </p>
        <button class="mt-2" @click="$refs.modal.hide()">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import FormNavigation from '../../components/common/FormNavigation.vue'
import FormProgress from '../../components/common/FormProgress.vue'

export default {
  name: 'level-6-1',
  components: {
    FormNavigation,
    FormProgress,
  },
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
