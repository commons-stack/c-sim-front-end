<template>
  <div class="layout-vertical">
    <commons-header @help="$refs.modal.show()" @restart="() => {}" />
    <h2 class="teko-subtitle text-center">What percentage goes to funding at exit?</h2>
    <div class="layout-form">
      <commons-navigation />
      <grid class="layout-form-grid">
        <grid class="layout-form-icons">
          <grid class="justify-self-start justify-items align-content relative" gap="1">
            <p class="font-teko fs-24">Your Wallet</p>
            <Cylinder :progress="100 - exitingProgress" type="green" />
            <exit-form-circles :progress="100 - exitingProgress" style="right: -90px;" />
          </grid>
          <icon icon="Man" v-if="$breakpoints.xl" />
          <grid class="justify-self-end justify-items align-content relative" gap="1">
            <p class="font-teko fs-24">Funding Pool</p>
            <Cylinder :progress="exitingProgress" type="blue" />
            <exit-form-circles
              :progress="exitingProgress"
              :style="$breakpoints.xl ? 'left: -90px;' : 'right: -90px;'"
            />
          </grid>
        </grid>
        <form-input
          type="range"
          v-model="forms.input.exiting"
          @valid="forms.vset.input.exiting"
          required
          :min="minmax.exiting.min"
          :max="minmax.exiting.max"
        />
        <grid gtc="auto 1fr auto">
          <p class="form-text">{{ minmax.exiting.min }}%</p>
          <p class="form-text-value justify-self">{{ forms.input.exiting }}%</p>
          <p class="form-text">{{ minmax.exiting.max }}%</p>
        </grid>
      </grid>
    </div>

    <button commons @click="$router.push('/level/7/1')" :disabled="!forms.vget.input.form">
      next
    </button>

    <modal ref="modal" :bg="false" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Exit Tribute</h2>
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
        <button commons class="mt-2" @click="$refs.modal.hide()">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cylinder from '../../components/common/Cylinder.vue'
import ExitFormCircles from '../../components/common/ExitFormCircles.vue'
import { utils } from '../../utils/utils'

export default {
  name: 'level-6-1',
  components: {
    Cylinder,
    ExitFormCircles,
  },
  data() {
    return {
      forms: {
        input: {
          exiting: this.$store.state.CommonsModule.form.exiting,
        },
      },
    }
  },
  computed: {
    ...mapState('CommonsModule', ['minmax']),
    exitingProgress() {
      return utils.changeScale(
        this.forms.input.exiting,
        this.minmax.exiting.min,
        this.minmax.exiting.max,
      )
    },
  },
  watch: {
    'forms.input.exiting'(x) {
      this.$store.commit('CommonsModule/setFormExiting', x)
    },
  },
}
</script>

<style scoped lang="scss">
.layout-form-icons {
  height: 300px;
  gap: 5rem;
  @include xl {
    grid-template-columns: 1fr auto 1fr;
    gap: 2rem;
  }
}
</style>
