<template>
  <div class="layout-right h-1-1">
    <presentation-image />
    <grid gtr="auto auto 1fr auto" class="h-1-1" justify-items-start align-items-start gap="2">
      <p class="lato-title">DESIGNING THE COMMONS</p>
      <p class="x-title font-ibm fs-20">
        Holographically embedded into your arm and invisible to others, cadCAD can simulate millions 
        of possible futures with just a few key inputs. First, you must collect those inputs from the
        assembled group by:
      </p>
      <grid class="x-points" gtc="auto 1fr" gap="2" align-items>
        <img src="@/assets/p-button-1.png" alt="" />
        <p>
          Educating the RadicalxChange community on what a Commons is and how the mechanisms work.
        </p>
        <img src="@/assets/p-button-2.png" alt="" />
        <p>Guiding them in choosing parameters that will work for their unique situation.</p>
        <img src="@/assets/p-button-3.png" alt="" />
        <p>
          Entering the chosen parameters into cadCAD to see if their Commons is a success and will 
          fix the future!
        </p>
      </grid>
      <button commons @click="$router.push('/level/1/2')" class="mt-2 mb-3">next</button>
    </grid>
  </div>
</template>

<script>
export default {
  name: 'level-1-1',
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
.x-title {
  max-width: 700px;
}
.x-points {
  max-width: 600px;
  & > *:nth-child(odd) {
    align-self: start;
  }
  & > p {
    @extend .fs-18, .font-ibm;
  }
}
</style>
