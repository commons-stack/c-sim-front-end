<template>
  <div class="layout-vertical" text-center>
    <icon icon="CircleNet" class="bg-net" />
    <form-navigation :help="false" />
    <p class="teko-title">Your Commons...</p>
    <div class="level-text">
      <p>Do you think you did a good job?</p>
      <p>Analyze these charts and see if your commons is a success!</p>
    </div>
    <div class="graph-wrap">
      <grid class="graph-nav">
        <div>
          <p>{{ $store.state.CommonsModule.foundingMembers }}</p>
          <p>FOUNDING MEMBERS</p>
        </div>
        <div>
          <p>{{ $store.state.CommonsModule.proposals }}</p>
          <p>PROPOSALS</p>
        </div>
        <div>
          <p>{{ $store.state.CommonsModule.funding }}%</p>
          <p>FUNDING</p>
        </div>
        <div>
          <p>{{ $store.state.CommonsModule.votingPower }}%</p>
          <p>VOTING POWER</p>
        </div>
        <div>
          <p>{{ $store.state.CommonsModule.decisions }} Days</p>
          <p>DECISIONS</p>
        </div>
        <div>
          <p>{{ $store.state.CommonsModule.exiting }}%</p>
          <p>EXITING</p>
        </div>
      </grid>
      <div class="graph" style="grid-area: g1;"></div>
      <div class="graph-info" style="grid-area: ginfo1;">
        <p>Metrics glossary</p>
        <p>Example chart</p>
      </div>
      <div class="graph" style="grid-area: g2;"></div>
      <div class="graph-info" style="grid-area: ginfo2;">
        <p>Metrics glossary</p>
        <p>Example chart</p>
      </div>
      <div class="graph" style="grid-area: g3;"></div>
      <div class="graph-info" style="grid-area: ginfo3;">
        <p>Metrics glossary</p>
        <p>Example chart</p>
      </div>
    </div>
    <div style="text-align: start;">
      <template v-for="key in Object.keys(results)">
        <p :key="key">{{ key.toUpperCase() }}:</p>
        <div :key="`${key}-data`" style="font-size: 9px;">{{ results[key] }}</div>
      </template>
    </div>
    <p class="teko-subtitle mt-5">
      Did the RxC community create a sustainable Commons to support RxC gatherings?
    </p>
    <p class="level-text">
      Do you want to submit your score, or do you want to try to run another simulation?
    </p>
    <flex gap="2" class="mt-2">
      <button @click="$router.push('/outcome')">BACK TO THE FUTURE</button>
      <button @click="$router.push('/level/1/1')">play again</button>
    </flex>
  </div>
</template>

<script>
export default {
  name: 'results',
  computed: {
    results() {
      return this.$store.state.CommonsModule.response?.data || []
    },
  },
}
</script>

<style scoped lang="scss">
.graph-wrap {
  text-align: start;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'gnav g1 ginfo1'
    'gnav g2 ginfo2'
    'gnav g3 ginfo3';
  row-gap: 0.75rem;
  column-gap: 1.5rem;
}
.graph-nav {
  grid-area: gnav;
  align-content: flex-start;
  justify-self: center;
  @include l {
    justify-self: flex-end;
  }
  gap: 1rem;
  text-align: center;
  & > div {
    border: 2px solid #143b5f;
    height: 70px;
    width: 120px;
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
.graph-info {
  display: grid;
  align-content: flex-start;
  gap: 0.75rem;
  & > p {
    @extend .text-button;
  }
}
.graph {
  width: 400px;
  height: 200px;
  background: #43a98344;
  & > div {
    font-size: 11px;
  }
}
.bg-net {
  position: fixed;
  z-index: -100;
  bottom: -300px;
  left: 0;
}
</style>
