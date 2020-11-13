<template>
  <div class="layout-vertical">
    <form-navigation title-only />
    <p class="teko-subtitle">Generating your Commons Simulation</p>
    <p class="text-center font-ibm fs-20 mt-2" style="max-width: 800px;">
      This is the moment of truth! Did they choose the right parameters to yield positive results
      for the success of the RxC community, and the continuation of humankind into a just,
      prosperous, and decentralized future?
    </p>

    <grid key="0" class="logo">
      <transition name="fade">
        <p class="logo-loading">
          Loading
          <transition-group name="slide" tag="span" class="absolute">
            <span v-for="dot in dots.count" :key="dot" class="logo-loading-dot">.</span>
          </transition-group>
        </p>
      </transition>
      <icon icon="Cad" ref="icon" class="logo-icon" />
    </grid>
    <icon icon="CircleNet" class="bg-net" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'submit',
  created() {
    this.dots.interval = setInterval(() => {
      if (this.dots.count === 3) this.dots.count = 0
      else this.dots.count += 1
    }, 400)
    this.runSimulationWithTimer()
  },
  beforeDestroy() {
    clearInterval(this.dots.interval)
  },
  data() {
    return {
      dots: {
        interval: undefined,
        count: 0,
      },
    }
  },
  computed: {
    ...mapState('CommonsModule', [
      'foundingMembers',
      'proposals',
      'funding',
      'votingPower',
      'decisions',
      'exiting',
      'response',
    ]),
  },
  methods: {
    runSimulation() {
      const input = {
        hatchers: this.foundingMembers,
        proposals: this.proposals,
        hatch_tribute: this.funding / 100,
        vesting_80p_unlocked: 60,
        exit_tribute: this.exiting / 100,
        kappa: 3,
        days_to_80p_of_max_voting_weight: this.decisions,
        proposal_max_size: this.votingPower / 100,
      }
      return this.$store.dispatch('CommonsModule/fetch', input)
    },
    runTimer: () =>
      new Promise(resolve => {
        setTimeout(() => resolve(true), 2500)
      }),
    runSimulationWithTimer() {
      Promise.all([this.runSimulation(), this.runTimer()]).finally(() =>
        this.$router.push('/results'),
      )
    },
  },
}
</script>

<style scoped lang="scss">
.bg-net {
  position: fixed;
  z-index: -100;
  bottom: -100px;
  left: 0;
  @include l {
    bottom: 0;
  }
}
.logo {
  padding: 2rem 0 1rem;
  @include m {
    padding: 4rem 0 2rem;
  }
  @include l {
    padding: 6rem 0 3rem;
  }
  @include xl {
    padding: 7rem 0 4rem;
  }
  justify-items: center;
  &-icon {
    margin-top: 3rem;
    transform: scale(1.5);
  }
  &-loading {
    @extend .font-orbitron;
    font-size: 24px;
    background: linear-gradient(94.78deg, #67de69 -5.54%, #2c6bca 110.77%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.8s var(--bezier-home);
    text-align: center;
    top: -120px;
    &-dot {
      background: #2c6bca;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
