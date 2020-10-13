<template>
  <div class="layout-vertical" text-center>
    <form-navigation />
    <p class="level-title">Your Commons...</p>
    <div>
      <p>Do you think you did a good job?</p>
      <p>Analyze these charts and see if your commons is a success!</p>
    </div>
    <div class="graphs">GRAPHS...</div>
    <p class="level-subtitle mt-5">
      Did the RxC community create a sustainable Commons to support RxC gatherings?
    </p>
    <p>Do you want to submit your score, or do you want to try to run another simulation?</p>
    <flex gap="2" class="mt-2">
      <button @click="$router.push('/outcome')">BACK TO THE FUTURE</button>
      <button @click="$router.push('/level/1/1')">play again</button>
    </flex>
  </div>
</template>

<script>
import FormNavigation from '../../components/common/FormNavigation.vue'

export default {
  name: 'results',
  components: {
    FormNavigation,
  },
}
</script>

<style scoped lang="scss">
.graphs {
  width: 400px;
  height: 600px;
  background: #43a98344;
}
</style>
