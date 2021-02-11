<template>
  <div class="layout-vertical">
    <commons-header @help="$refs.modal.show()" @restart="() => {}" />
    <h2 class="teko-subtitle text-center">
      What percent of the contributions will be allocated to the Funding Pool?
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
            <Cylinder :progress="fundingProgress" type="green" />
          </grid>
          <grid class="justify-self-end justify-items" gap="1">
            <p class="font-teko fs-24">RxC Reserve</p>
            <Cylinder :progress="100 - fundingProgress" type="blue" />
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
            <p class="form-text-value justify-self">
              {{ forms.input.funding }}%
            </p>
            <p class="form-text">{{ minmax.funding.max }}%</p>
          </grid>
        </div>
      </grid>
    </div>

    <button
      commons
      @click="$router.push('/level/3/2')"
      :disabled="!forms.vget.input.form"
    >
      next
    </button>

    <modal ref="modal" :bg="false" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Funding Pools</h2>
        <p class="level-text mt-1">
          The total initial funds raised are to be split between the two pools: the Funding Pool 
          and the RxC Reserve. The initial funding allocated to the Funding Pool is referred to as 
          <strong>the Hatch Tribute</strong>. 
        </p>
        <grid gtc="1fr 1fr" gap="3" style="max-width: 800px;">
          <div>
            <p class="teko-subtitle" style="text-align: start;">
              Funding Pool
            </p>
            <p class="fs-20 font-ibm">
              Contains the total funds available for funding approved RadicalxChange initiatives.
            </p>
          </div>
          <div>
            <p class="teko-subtitle" style="text-align: start;">RxC Reserve</p>
            <p class="fs-20 font-ibm">
              Backs the RxC token, guaranteeing liquidity for all tokens issued so that they will 
              always have a monetary value.
            </p>
          </div>
        </grid>
        <p class="level-text">
          You must decide what percentage of funding will be allocated to each pool. If you put too 
          much funding in the Funding Pool, the token may have trouble maintaining value. If you 
          put too much in the RxC Reserve, the Commons won’t be able to support very many projects.
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
        this.minmax.funding.max
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
