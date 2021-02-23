<template>
  <div class="layout-vertical">
    <commons-header @help="$refs.modal.show()" @restart="() => {}" />
    <v-popover>
      <template slot="popover">
        <flex :column="true">
          <p>Proposals: projects suggested by RadicalxChange members requesting funds.</p>
          <div style="text-align:center;">
            <button class="x-text-button mh-0p5 inline" @click="$refs.modal.show()" v-close-popover>More info</button>
          </div>
        </flex>
      </template>
      <h2 class="teko-subtitle text-center">
        How many <span class="underline-pointer">proposals</span> should be collected for the Hatchers to kick off their
        voting?
      </h2>
    </v-popover>
    <div class="layout-form">
      <commons-navigation />
      <grid class="layout-form-grid">
        <p class="text-center font-teko" style="font-size: 124px;">
          {{ forms.input.proposals }}
        </p>
        <form-input
          type="range"
          v-model="forms.input.proposals"
          @valid="forms.vset.input.proposals"
          required
          :min="minmax.proposals.min"
          :max="minmax.proposals.max"
        />
        <grid gtc="1fr 1fr">
          <p class="form-text">{{ minmax.proposals.min }}</p>
          <p class="form-text text-right">{{ minmax.proposals.max }}</p>
        </grid>
      </grid>
    </div>

    <button
      commons
      @click="$router.push('/level/2/2')"
      :disabled="!forms.vget.input.form"
    >
      next
    </button>

    <modal ref="modal" :bg="false" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Proposals</h2>
        <p class="level-text mt-1">
          It was evident from the introductions round at RadicalxChange’s new chapter kickoff in 
          Barcelona that there are many great projects to create value for and by the community, 
          and for the global RadicalxChange movement. To determine where to initially focus their 
          efforts, they will collect a series of proposals and then vote on whether or not to 
          accept them.
        </p>
        <p class="level-text">
          RadicalxChange project organizers can submit proposals to launch an initiative to request 
          funding for reimbursement of expenses for their projects. The RadicalxChange commons 
          can then vote on whether or not to accept it.
        </p>
        <p class="level-text">
          The initial conditions are critical to understanding because they determine the outcomes 
          for complex systems. You must determine how many proposals will be collected for when the 
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
