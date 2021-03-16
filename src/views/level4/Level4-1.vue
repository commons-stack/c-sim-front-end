<template>
  <div class="layout-vertical">
    <commons-header @help="$refs.modal.show()" @restart="() => {}" />
    <tippy to="trigger" :interactive="true" arrow>
      <flex :column="true" class="tippy-inner">
        <p>Funding Distribution: the maximum funds that can be withdrawn at any time by a large proposal or group of smaller proposals.</p>
        <div style="text-align:center;">
          <button class="x-text-button mh-0p5 inline" @click="$refs.modal.show()">More info</button>
        </div>
      </flex>
    </tippy>
    <h2 class="teko-subtitle text-center">
      How much of the community funds can be <span name="trigger" class="underline-pointer">distributed</span> at any given time?
    </h2>
    <p class="font-ibm fs-18 text-center">
      Capping the relative amount of spending determines how fast the Commons spend their funds.
    </p>
    <div class="layout-form">
      <commons-navigation />
      <grid class="layout-form-grid">
        <grid class="justify-items relative" gap="1.5">
          <p class="font-teko fs-24">Funding Pool</p>
          <icon
            icon="ElipseGradient"
            class="absolute"
            style="bottom: -20px; opacity: 0.8;"
          />
          <Cylinder
            :progress="votingPowerProgress"
            :maxProgress="50"
            type="green"
          />
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
            <p class="form-text-value justify-self">
              {{ forms.input.votingPower }}%
            </p>
            <p class="form-text">{{ minmax.votingPower.max }}%</p>
          </grid>
        </grid>
      </grid>
    </div>

    <button
      commons
      @click="$router.push('/level/4/2')"
      :disabled="!forms.vget.input.form"
    >
      next
    </button>

    <modal ref="modal" :bg="false" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Funding Distribution</h2>
        <p class="level-text mt-1">
          You must select what percentage of the available funds in the Funding Pool can be distributed at any one time. This effectively sets a maximum for a single proposal (or group of proposals), ensuring that larger proposals require a greater amount of collective voting power from the community in order to pass.
        </p>
        <p class="level-text">
          The maximum amount of funds that can be withdrawn at any given time is a percentage of the amount of funds that are remaining in the funding pool at that time. This means that as funds are allocated to projects, the total amount in the pool is less, and the max amount that can be withdrawn is also less. Hence you are selecting a cap on the "relative amount of spending".
        </p>
        <p class="level-text">
          The maximum percentage that you are able to select as this cap is 50%. This is to limit the rate at which the funding pool can be drained.
        </p>
        <p class="level-text">
          If the threshold you select is high, it will allow large proposals to pass but may drain the funding pool too quickly. If the threshold is low, it conserves the pool but can also block essential initiatives from being approved.
        </p>
        <button commons class="mt-2" @click="$refs.modal.hide()">OK</button>
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
        this.minmax.votingPower.max
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
