<template>
  <div class="layout-right h-1-1">
    <grid gtr="auto auto 1fr auto" class="h-1-1" justify-items-start align-items-start gap="2">
      <p class="letter-spacing-5">DESIGNING THE COMMONS</p>
      <p class="x-title">
        Holographically embedded into your arm and invisible to others, cadCAD can simulate millions
        of possible futures with just a few key inputs.
      </p>
      <grid class="x-points" gtc="auto 1fr" gap="2" align-items>
        <icon icon="Facebook" />
        <p>Educate the Radx community on what a Commons is and how the mechanisms work.</p>
        <icon icon="Facebook" />
        <p>Guide them in choosing parameters that will work for their unique situation.</p>
        <icon icon="Facebook" />
        <p>
          Sneak away and plug the chose parameters into cadCAD to see if their Commons is a success
          and will fix the future!
        </p>
      </grid>
      <button @click="$router.push('/level/1/2')" class="ml-2 mt-2 mb-3">next</button>
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
}
</style>
