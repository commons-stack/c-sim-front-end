<template>
  <div class="layout-vertical relative">
    <icon icon="CircleNet" class="bg-net" />
    <form-navigation @restart="() => {}" :help="false" />
    <h2 class="teko-subtitle">Inputs Received by cadCAD!</h2>
    <p class="font-ibm fs-20 text-center">
      Will the Commons succeed, the Movement take off, and new economy creation cascade around the
      world?
    </p>
    <div class="layout-form">
      <form-progress style="grid-area: nav;" />
      <flex class="text-center flex-center" style="grid-area: field;">
        <grid class="sim-data">
          <div>
            <p>{{ form.foundingMembers }}</p>
            <p>FOUNDING MEMBERS</p>
          </div>
          <div>
            <p>{{ form.proposals }}</p>
            <p>PROPOSALS</p>
          </div>
          <div>
            <p>{{ form.funding }}%</p>
            <p>FUNDING</p>
          </div>
          <div>
            <p>{{ form.votingPower }}%</p>
            <p>VOTING POWER</p>
          </div>
          <div>
            <p>{{ form.decisions }} Days</p>
            <p>DECISIONS</p>
          </div>
          <div>
            <p>{{ form.exiting }}%</p>
            <p>EXITING</p>
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
  name: 'level-6-1',
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
  grid-template-areas: 'nav field field';
  @include m {
    grid-template-areas: 'nav field nothing';
  }
}
.sim-data {
  @include s {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    justify-self: flex-end;
  }
  @include m {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
  }
  gap: 1rem;
  & > div {
    border: 2px solid #143b5f;
    height: 70px;
    width: 120px;
    @include s {
      width: 130px;
      height: 90px;
    }
    display: grid;
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
