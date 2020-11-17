<template>
  <div class="layout-vertical">
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" />
    <h2 class="teko-subtitle text-center">
      How much of the community funds can be distributed at any given time?
    </h2>
    <p class="font-ibm fs-20 text-center">
      Ensuring that larger proposals require a greater amount of collective voting power from the
      community in order to pass.
    </p>
    <div class="layout-form">
      <form-progress />
      <grid class="layout-form-grid">
        <grid class="justify-items relative" gap="1.5">
          <p class="font-teko fs-24">Funding Pool</p>
          <icon icon="ElipseGradient" class="absolute" style="bottom: -20px; opacity: 0.8;" />
          <Cylinder :progress="votingPowerProgress" type="green" />
        </grid>
        <grid class="justify-items">
          <form-input
            type="range"
            v-model="forms.input.votingPower"
            @valid="forms.vset.input.votingPower"
            required
            :min="minmax.votingPower.min"
            :max="minmax.votingPower.max"
          />
          <grid gtc="auto 1fr auto" class="w-1-1">
            <p class="form-text">{{ minmax.votingPower.min }}%</p>
            <p class="form-text-value justify-self">{{ forms.input.votingPower }}%</p>
            <p class="form-text">{{ minmax.votingPower.max }}%</p>
          </grid>
        </grid>
      </grid>
    </div>

    <button @click="$router.push('/level/4/2')" :disabled="!forms.vget.input.form">next</button>

    <modal ref="modal" bg="" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Funding distribution</h2>
        <p class="level-text mt-1">
          The graph demonstrates how if the threshold is high it will allow large proposals to pass,
          however it may drain your funding pool too fast, weakening the economy. A lower threshold
          conserves the pool but then blocks essential initiatives from being approved.
        </p>
        <p class="level-text">
          This parameter is defined by selecting a percentage of the available funding pool that can
          be distributed at any time. It effectively sets a maximum for a single proposal (or for a
          group of smaller proposals), ensuring that larger proposals require a greater amount of
          collective voting power from the community in order to pass.
        </p>
        <button class="mt-2" @click="$refs.modal.hide()">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cylinder from '../../components/common/Cylinder.vue'
import { utils } from '../../utils/utils'

export default {
  name: 'level-4-1',
  components: {
    Cylinder,
  },
  data() {
    return {
      forms: {
        input: {
          votingPower: this.$store.state.CommonsModule.form.votingPower,
        },
      },
    }
  },
  computed: {
    ...mapState('CommonsModule', ['minmax']),
    votingPowerProgress() {
      return utils.changeScale(
        this.forms.input.votingPower,
        this.minmax.votingPower.min,
        this.minmax.votingPower.max,
      )
    },
  },
  watch: {
    'forms.input.votingPower'(x) {
      this.$store.commit('CommonsModule/setFormVotingPower', x)
    },
  },
}
</script>

<style scoped lang="scss"></style>
