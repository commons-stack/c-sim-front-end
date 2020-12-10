<template>
  <div class="layout-vertical">
    <commons-header @help="$refs.modal.show()" @restart="() => {}" />
    <h2 class="teko-subtitle text-center">
      What ercent of the contributions will be allocated to the Funding Pool?
    </h2>
    <p class="font-ibm fs-20 text-center">
      The balance will be the Reserve that backs the RxC tokens.
    </p>
    <div class="layout-form">
      <commons-navigation />
      <grid class="layout-form-grid">
        <grid class="layout-form-icons">
          <grid class="justify-self-start justify-items" gap="1">
            <p class="font-teko fs-24">Funding Pool</p>
            <Cylinder :progress="100 - fundingProgress" type="green" />
          </grid>
          <grid class="justify-self-end justify-items" gap="1">
            <p class="font-teko fs-24">Commons Reserve</p>
            <Cylinder :progress="fundingProgress" type="blue" />
          </grid>
        </grid>
        <div>
          <form-input
            type="range"
            v-model="forms.input.funding"
            @valid="forms.vset.input.funding"
            required
            :min="minmax.funding.min"
            :max="minmax.funding.max"
          />
          <grid gtc="auto 1fr auto" class="w-1-1">
            <p class="form-text">{{ minmax.funding.min }}%</p>
            <p class="form-text-value justify-self">{{ forms.input.funding }}%</p>
            <p class="form-text">{{ minmax.funding.max }}%</p>
          </grid>
        </div>
      </grid>
    </div>

    <button commons @click="$router.push('/level/3/2')" :disabled="!forms.vget.input.form">
      next
    </button>

    <modal ref="modal" :bg="false" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Funding Pools</h2>
        <p class="level-text mt-1">
          The RxC Reserve backs the RxC token, guaranteeing liquidity for all tokens issued so that
          they will always have monetary value. The Funding Pool will be used to fund RadicalxChange
          initiatives.
        </p>
        <grid gtc="1fr 1fr" gap="3" style="max-width: 800px;">
          <div>
            <p class="teko-subtitle" style="text-align: start;">Hatch Tribute</p>
            <p class="fs-20 font-ibm">
              The total funds raised are split between the 2 pools, with the amount going to the
              Funding Pool being called <strong>the Hatch Tribute</strong>
            </p>
          </div>
          <div>
            <p class="teko-subtitle" style="text-align: start;">RxC token</p>
            <p class="fs-20 font-ibm">
              The RxC Reserve backs the RxC token, guaranteeing liquidity for all tokens issued so
              that they will always have monetary value.
            </p>
          </div>
        </grid>
        <p class="level-text">
          If you put too much funds in the Funding Pool, the token may have trouble maintaining
          value, and if you put too much in the RxC Reserve, the Commons won’t be able to support
          very many projects.
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
  name: 'level-3-1',
  components: {
    Cylinder,
  },
  data() {
    return {
      forms: {
        input: {
          funding: this.$store.state.CommonsModule.form.funding,
        },
      },
    }
  },
  computed: {
    ...mapState('CommonsModule', ['minmax']),
    fundingProgress() {
      return utils.changeScale(
        this.forms.input.funding,
        this.minmax.funding.min,
        this.minmax.funding.max,
      )
    },
  },
  watch: {
    'forms.input.funding'(x) {
      this.$store.commit('CommonsModule/setFormFunding', x)
    },
  },
}
</script>

<style scoped lang="scss"></style>
