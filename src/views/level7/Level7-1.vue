<template>
  <div class="layout-vertical relative">
    <icon icon="CircleNet" class="bg-net" />
    <commons-header @restart="() => {}" :help="false" />
    <h2 class="teko-subtitle">Inputs Received by cadCAD!</h2>
    <p class="font-ibm fs-20 text-center">
      Will the Commons succeed, the Movement take off, and new economy creation cascade around the
      world?
    </p>
    <div class="layout-form">
      <commons-navigation style="grid-area: nav;" />
      <flex class="text-center flex-center" style="grid-area: field;">
        <grid class="sim-data">
          <div>
            <p>{{ form.foundingMembers }}</p>
            <p>HATCHERS</p>
          </div>
          <div>
            <p>{{ form.proposals }}</p>
            <p>INITIAL PROPOSALS</p>
          </div>
          <div>
            <p>{{ form.funding }}%</p>
            <p>HATCH TRIBUTE</p>
          </div>
          <div>
            <p>{{ form.votingPower }}%</p>
            <p>MAX SPENDING</p>
          </div>
          <div>
            <p>{{ form.decisions }} Days</p>
            <p>VOTING SPEED</p>
          </div>
          <div>
            <p>{{ form.exiting }}%</p>
            <p>EXIT TRIBUTE</p>
          </div>
        </grid>
      </flex>
    </div>
    <button commons @click="$router.push('/submit')">run simulation</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'level-7-1',
  computed: { ...mapState('CommonsModule', ['form']) },
  methods: {
    runSimulation() {
      this.$store.dispatch('CommonsModule/runSimulation')
      this.$router.push('/submit')
    },
  },
}
</script>

<style scoped lang="scss">
.bg-net {
  position: fixed;
  z-index: -100;
  bottom: -200px;
  left: 0;
  @include l {
    bottom: -100px;
  }
  @include xl {
    bottom: 0;
  }
}
.layout-form {
  grid-template-areas: 'field';
  @include m {
    grid-template-areas: 'nav field nothing';
  }
}
.sim-data {
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  @include m {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
  }
  gap: 1rem;
  & > div {
    border: 2px solid #143b5f;
    height: 90px;
    width: 130px;
    justify-items: center;
    align-content: center;
    padding: 10px;
    & > * {
      &:first-child {
        @extend .font-teko;
        font-size: 18px;
        @include s {
          font-size: 22px;
        }
      }
      &:last-child {
        @extend .font-lato;
        font-size: 12px;
      }
    }
  }
}
</style>
