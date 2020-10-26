<template>
  <div class="layout-vertical">
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" />
    <p text-xl text-center>
      How many proposals should be collected for the Hatchers to kick off their voting?
    </p>
    <div class="layout-form">
      <form-progress />
      <flex class="flex-center flex-column">
        <form-input
          type="number"
          placeholder="0"
          text-xxxl
          text-center
          store-model="CommonsModule/proposals"
          min="0"
        />
        <p>{{ $store.state.CommonsModule.proposals }}</p>
      </flex>
    </div>

    <button @click="$router.push('/level/2/2')">next</button>

    <modal ref="modal" bg="" overlay="dark">
      <div class="layout-modal">
        <h2 class="level-title">Proposals</h2>
        <p class="level-text mt-1">
          It was evident from the introductions round at this kickoff of the Barcelona RxC Chapter
          that there are many great projects to create value for and by this community, and at a
          global scale for the RadicalxChange movement, too. However, it was not so clear on how to
          decide which proposals to start with!
        </p>
        <p class="level-text" italic>
          “This Commons can operate well on a work proposal system. RadicalxChange organizers can
          request funding to launch an initiative for reimbursement of expenses by submitting a
          proposal, and we can vote on whether or not to accept it.”
        </p>
        <p class="level-text">
          The initial conditions are critical to understand because they determine the outcomes for
          complex systems. You must find out how many proposals will be collected for when the
          Hatchers start their voting.
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
  name: 'level-2-1',
  components: {
    FormNavigation,
    FormProgress,
  },
  data() {
    return { proposals: undefined }
  },
  watch: {
    proposals: {
      immediate: true,
      handler(x) {
        this.$store.commit('CommonsModule/setProposals', x)
      },
    },
  },
}
</script>

<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
}

input[type='number'] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
