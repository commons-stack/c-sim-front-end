<template>
  <div class="layout-vertical relative">
    <icon icon="CircleNet" class="bg-net" />
    <commons-header @restart="() => {}" :help="false" />
    <h2 class="teko-subtitle">Inputs Received by cadCAD!</h2>
    <p class="font-ibm fs-18 text-center">
      Will the RadicalxChange Commons succeed, the Movement take off, and new economy creation cascade around the
      world?
    </p>
    <div class="layout-form">
      <commons-navigation style="grid-area: nav;" />
      <flex class="text-center flex-center" style="grid-area: field;">
        <grid class="sim-data">
          <div
            v-tooltip="{
              content: 'The founding members of the RadicalxChange Commons',
              placement: 'top',
            }"
          >
            <p>{{ form.foundingMembers }}</p>
            <p>HATCHERS</p>
          </div>
          <div
            v-tooltip="{
              content: 'The number of project proposals initially collected before the Hatchers begin their voting',
              placement: 'top',
            }"
          >
            <p>{{ form.proposals }}</p>
            <p>INITIAL PROPOSALS</p>
          </div>
          <div
            v-tooltip="{
              content: 'The percentage of total initial funds delegated to the funding pool to fund approved RadicalxChange initiatives',
              placement: 'top',
            }"
          >
            <p>{{ form.funding }}%</p>
            <p>COMMONS TRIBUTE</p>
          </div>
          <div
            v-tooltip="{
              content: 'The maximum percentage of the funds within the Funding Pool that can be withdrawn at any one time',
              placement: 'bottom',
            }"
          >
            <p>{{ form.votingPower }}%</p>
            <p>MAX SPENDING</p>
          </div>
          <div
            v-tooltip="{
              content: 'The amount of time it takes for an individual’s voting power to reach 80% of its full power',
              placement: 'bottom',
            }"
          >
            <p>{{ form.decisions }} Days</p>
            <p>VOTING SPEED</p>
          </div>
          <div
            v-tooltip="{
              content: 'The percentage of funds that feeds back into the Funding Pool when members choose to sell their RxC tokens',
              placement: 'bottom',
            }"
          >
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
    transition: all 250ms ease;
    border: 2px solid #143b5f;
    height: 90px;
    width: 130px;
    justify-items: center;
    align-content: center;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: rgba(20, 59, 95, 0.4);
      border: 2px solid #1565A2;
    }
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
