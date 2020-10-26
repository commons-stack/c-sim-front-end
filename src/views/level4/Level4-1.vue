<template>
  <div class="layout-vertical">
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" />
    <p text-xl text-center>How much of the community funds can be distributed at any given time?</p>
    <p style="opacity: 0.6;" text-center>
      Ensuring that larger proposals require a greater amount of collective voting power from the
      community in order to pass.
    </p>
    <div class="layout-form">
      <form-progress />
      <flex class="flex-center flex-column">
        <form-input type="range" store-model="CommonsModule/votingPower" min="0" max="100" />
        <p>{{ $store.state.CommonsModule.votingPower }}</p>
      </flex>
    </div>

    <button @click="$router.push('/level/4/2')">next</button>

    <modal ref="modal" bg="" overlay="dark">
      <div class="layout-modal">
        <h2 class="level-title">Funding distribution</h2>
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
import FormNavigation from '../../components/common/FormNavigation.vue'
import FormProgress from '../../components/common/FormProgress.vue'

export default {
  name: 'level-4-1',
  components: {
    FormNavigation,
    FormProgress,
  },
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
