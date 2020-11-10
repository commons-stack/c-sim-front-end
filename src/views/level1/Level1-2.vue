<template>
  <div class="layout-vertical">
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" />
    <p text-xl text-center>
      How many ‘Hatchers’ will you choose to initialize the RadicalxChange Commons?
    </p>
    <div class="layout-form">
      <form-progress />
      <grid column class="align-content w-1-1 ph-5">
        <icon :icon="hatcherIcon" class="justify-self" />
        <form-input
          type="range"
          v-model="forms.input.foundingMembers"
          @valid="forms.vset.input.foundingMembers"
          required
          min="0"
          max="300"
        />
        <grid gtc="auto 1fr auto">
          <p>0</p>
          <p class="justify-self">{{ forms.input.foundingMembers }}</p>
          <p>300</p>
        </grid>
      </grid>
    </div>
    <button @click="$router.push('/level/1/3')" :disabled="!forms.vget.input.form">next</button>

    <modal ref="modal" bg="" overlay="dark">
      <div class="layout-modal">
        <h2 class="level-title">Founding members - ‘Hatchers’</h2>
        <p class="level-text mt-1">
          Only trusted experts who accept accountability for upholding the values and honorable
          intentions of the community should be chosen to be the founding members of your RxC
          Commons.
        </p>
        <p class="level-text">
          These founding members, referred to as <strong>‘Hatchers’</strong> are the first to take
          responsibility over the commons prioritizing the needs of the community.
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
  name: 'level-1-2',
  components: {
    FormNavigation,
    FormProgress,
  },
  data() {
    return {
      forms: {
        input: {
          foundingMembers: this.$store.state.CommonsModule.foundingMembers,
        },
      },
    }
  },
  watch: {
    'forms.input.foundingMembers'(x) {
      this.$store.commit('CommonsModule/setFoundingMembers', x)
    },
  },
  computed: {
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

<style scoped lang="scss"></style>
