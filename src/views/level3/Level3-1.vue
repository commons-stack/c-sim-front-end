<template>
  <div class="layout-vertical">
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" />
    <h2 class="teko-subtitle text-center">
      What ercent of the contributions will be allocated to the Funding Pool?
    </h2>
    <p class="font-ibm fs-20 text-center">
      The balance will be the Reserve that backs the RxC tokens.
    </p>
    <div class="layout-form">
      <form-progress />
      <grid class="align-content w-1-1 ph-5" gap="2">
        <grid gtc="1fr 1fr" gap="2" class="ph-5">
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
            :min="min"
            :max="max"
          />
          <grid gtc="auto 1fr auto">
            <p class="form-text">{{ min }}%</p>
            <p class="form-text-value justify-self">{{ forms.input.funding }}%</p>
            <p class="form-text">{{ max }}%</p>
          </grid>
        </div>
      </grid>
    </div>

    <button @click="$router.push('/level/3/2')" :disabled="!forms.vget.input.form">next</button>

    <modal ref="modal" bg="" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Funding Pools</h2>
        <p class="level-text mt-1">
          The RxC Reserve backs the RxC token, guaranteeing liquidity for all tokens issued so that
          they will always have monetary value. The Funding Pool will be used to fund RadicalxChange
          initiatives.
        </p>
        <grid class="x-subsection" gtc="1fr 1fr" gap="3">
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
        <button class="mt-2" @click="$refs.modal.hide()">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import Cylinder from '../../components/common/Cylinder.vue'

export default {
  name: 'level-3-1',
  components: {
    Cylinder,
  },
  data() {
    return {
      min: 30,
      max: 70,
      forms: {
        input: {
          funding: this.$store.state.CommonsModule.funding,
        },
      },
    }
  },
  computed: {
    fundingProgress() {
      const input = this.forms.input.funding
      return ((input - this.min) / (this.max - this.min)) * 100
    },
  },
  watch: {
    'forms.input.funding'(x) {
      this.$store.commit('CommonsModule/setFunding', x)
    },
  },
}
</script>

<style scoped lang="scss">
.x-subsection {
  max-width: 800px;
}
</style>
