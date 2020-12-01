<template>
  <div class="layout-vertical">
    <commons-header @help="$refs.modal.show()" @restart="() => {}" />
    <h2 class="teko-subtitle text-center">
      How many proposals should be collected for the Hatchers to kick off their voting?
    </h2>
    <div class="layout-form">
      <commons-navigation />
      <flex column class="flex-center">
        <form-input
          type="number"
          placeholder="0"
          class="text-center font-teko"
          style="font-size: 124px;"
          v-model="forms.input.proposals"
          @valid="forms.vset.input.proposals"
          required
          :min="minmax.proposals.min"
          :max="minmax.proposals.max"
        />
      </flex>
    </div>

    <button commons @click="$router.push('/level/2/2')" :disabled="!forms.vget.input.form">
      next
    </button>

    <modal ref="modal" :bg="false" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Proposals</h2>
        <p class="level-text mt-1">
          It was evident from the introductions round at this kickoff of the Barcelona RxC Chapter
          that there are many great projects to create value for and by this community, and at a
          global scale for the RadicalxChange movement, too. However, it was not so clear on how to
          decide which proposals to start with!
        </p>
        <p class="level-text fs-24 italic">
          “This Commons can operate well on a work proposal system. RadicalxChange organizers can
          request funding to launch an initiative for reimbursement of expenses by submitting a
          proposal, and we can vote on whether or not to accept it.”
        </p>
        <p class="level-text">
          The initial conditions are critical to understand because they determine the outcomes for
          complex systems. You must find out how many proposals will be collected for when the
          Hatchers start their voting.
        </p>
        <button commons class="mt-2" @click="$refs.modal.hide()">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'level-2-1',
  data() {
    return {
      forms: {
        input: {
          proposals: this.$store.state.CommonsModule.form.proposals,
        },
      },
    }
  },
  watch: {
    'forms.input.proposals'(x) {
      this.$store.commit('CommonsModule/setFormProposals', x)
    },
  },
  computed: {
    ...mapState('CommonsModule', ['minmax']),
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
