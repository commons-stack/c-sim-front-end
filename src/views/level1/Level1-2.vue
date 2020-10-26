<template>
  <div class="layout-vertical">
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" />
    <p text-xl text-center>
      How many ‘Hatchers’ will you choose to initialize the RadicalxChange Commons?
    </p>
    <div class="layout-form">
      <form-progress />
      <flex class="flex-column flex-center">
        <form-input type="range" store-model="CommonsModule/foundingMembers" min="0" max="300" />
        <p>{{ $store.state.CommonsModule.foundingMembers }}</p>
      </flex>
    </div>
    <button @click="$router.push('/level/1/3')">next</button>

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
}
</script>

<style scoped lang="scss"></style>
