<template>
  <div class="layout-vertical">
    <commons-header @help="$refs.modal.show()" :restart="false" />
    <tippy to="trigger" :interactive="true" arrow>
      <flex :column="true" class="tippy-inner">
        <p>Hatchers: founding members of the RadicalxChange Commons.</p>
        <div style="text-align:center;">
          <button class="x-text-button mh-0p5 inline" @click="$refs.modal.show()">More info</button>
        </div>
      </flex>
    </tippy>
    <h2 class="teko-subtitle text-center">
      How many ‘<span name="trigger" class="underline-pointer">Hatchers</span>’ will you choose to initialize the RadicalxChange Commons?
    </h2>
    <div class="layout-form">
      <commons-navigation />
      <grid class="layout-form-grid">
        <flex class="container relative flex-center">
          <icon icon="Hatchers3" class="icon justify-self" />
          <icon
            :icon="hatcherIcon"
            class="icon absolute-center"
            style="z-index: -1;"
            v-if="forms.input.foundingMembers > 10"
          />
        </flex>
        <form-input
          type="range"
          v-model="forms.input.foundingMembers"
          @valid="forms.vset.input.foundingMembers"
          required
          :min="minmax.foundingMembers.min"
          :max="minmax.foundingMembers.max"
        />
        <grid gtc="auto 1fr auto">
          <p class="form-text">{{ minmax.foundingMembers.min }}</p>
          <p class="form-text-value justify-self">{{ forms.input.foundingMembers }}</p>
          <p class="form-text">{{ minmax.foundingMembers.max }}</p>
        </grid>
      </grid>
    </div>
    <button commons @click="$router.push('/level/1/2')" :disabled="!forms.vget.input.form">
      next
    </button>

    <modal ref="modal" :bg="false" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Founding members - ‘Hatchers’</h2>
        <p class="level-text mt-1">
          <strong>'Hatchers'</strong> are the founding members of the RadicalxChange Commons. They 
          are the first to take responsibility over the Commons, prioritizing the needs of the 
          community.
        </p>
        <p class="level-text">
          Only trusted experts who accept accountability for upholding the values and honorable 
          intentions of the community should be chosen to be the founding members of your 
          RadicalxChange Commons.
        </p>
        <p class="level-text">
          A larger number of Hatchers means there will be a larger amount of initial funds in the 
          Funding Pool (to fund projects) and the RxC reserve (to give value to the RxC token). 
          However, a larger number of Hatchers may make the token price more volatile after the 
          initial vesting period. Also, consider that the success of the Commons depends on the 
          success of projects which is affected by the number of proposals and the ability for 
          proposals to receive enough support (conviction) to be passed.
        </p>
        <p class="level-text">
          YOU must decide how many Hatchers are needed for the RadicalxChange community to initiate 
          their Commons...
        </p>
        <button commons class="mt-2" @click="$refs.modal.hide()">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'level-1-1',
  data() {
    return {
      forms: {
        input: {
          foundingMembers: this.$store.state.CommonsModule.form.foundingMembers,
        },
      },
    }
  },
  watch: {
    'forms.input.foundingMembers'(x) {
      this.$store.commit('CommonsModule/setFormFoundingMembers', x)
    },
  },
  computed: {
    ...mapState('CommonsModule', ['minmax']),
    hatcherIcon() {
      const entries = [30, 60, 90, 120, 150, 180, 240, 300]
      const num =
        entries.reduce((a, c, i) => {
          if (this.forms.input.foundingMembers > c) return entries[i + 1]
          return a
        }, 30) || entries.slice(-1)[0]
      return `Hatchers${num}`
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  max-width: 300px;
}
</style>
