<template>
  <div class="layout-vertical">
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" />
    <p text-xl text-center>
      How much time should pass before an individual’s voting power reaches 80% of it’s full power?
    </p>
    <div class="layout-form">
      <form-progress />
      <grid class="align-content w-1-1 ph-5" gap="2">
        <grid class="justify-items relative" gap="1.5">
          <p>TODO RADIO</p>
          <icon icon="GridNet" class="absolute" style="bottom: -10px; zoom: 1.3;" />
          <icon icon="ElipseGradient" class="absolute" style="bottom: -20px; opacity: 0.8;" />
          <Cylinder :progress="forms.input.decisions" type="teal" />
        </grid>
        <div>
          <form-input
            type="range"
            v-model="forms.input.decisions"
            @valid="forms.vset.input.decisions"
            required
            min="1"
            max="50"
          />
          <grid gtc="auto 1fr auto">
            <p>{{ min }}</p>
            <p class="justify-self">{{ forms.input.decisions }}</p>
            <p>{{ max }}</p>
          </grid>
        </div>
      </grid>
    </div>

    <button @click="submit" :disabled="!forms.vget.input.form">next</button>

    <modal ref="modal" bg="" overlay="dark">
      <div class="layout-modal">
        <h2 class="level-title">Conviction Voting</h2>
        <p class="level-text mt-1">
          Conviction Voting is a continuous process - kind of like ‘vote streaming’.
        </p>
        <p class="level-text">
          Each proposal is like a battery and tokens are the power source. The more tokens held by a
          community member, the greater the power they have to charge up proposals. Token holders
          express the degree of their conviction on a proposal by deciding how much of their battery
          power will go towards each proposal, and the longer they hold their tokens there, the more
          charge the proposal gets.
        </p>
        <p class="level-text">
          When voting power accrues quickly, the tokens actually have less power but the Commons is
          able to quickly make decisions on funding. When voting power accrues slowly, the tokens
          actually have more power and the individuals in the Commons can better predict what
          proposals are likely to pass in advance.
        </p>
        <p class="level-text">
          How much time should pass before an individual’s voting power reaches 80% of it’s full
          power?
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
  name: 'level-5-1',
  components: {
    FormNavigation,
    FormProgress,
  },
  created() {
    this.forms.input.decisions = this.$store.state.CommonsModule.decisions
  },
  data() {
    return {
      forms: {
        input: {
          decisions: undefined,
        },
      },
    }
  },
  methods: {
    submit() {
      this.$store.commit('CommonsModule/setDecisions', this.forms.input.decisions)
      this.$router.push('/level/5/2')
    },
  },
}
</script>

<style scoped lang="scss"></style>
