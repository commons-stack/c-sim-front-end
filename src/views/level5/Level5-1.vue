<template>
  <div class="layout-vertical">
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" />
    <h2 class="teko-subtitle text-center">
      How much time should pass before an individual’s voting power reaches 80% of it’s full power?
    </h2>
    <div class="layout-form">
      <form-progress />
      <grid class="layout-form-grid">
        <grid class="graph-section">
          <!-- <icon icon="GridNet" class="absolute" style="bottom: 23px; zoom: 1.3;" /> -->
          <icon icon="ElipseGradient" class="absolute" style="bottom: 20px; opacity: 0.2;" />
          <div class="relative">
            <Chart :chart="chart" width="600" gradient="#59c973dd #247c9744" />
          </div>
        </grid>
        <grid class="form-section">
          <label
            :id="`${day}-days`"
            v-for="day in [3, 10, 30, 60]"
            :key="day"
            @click="setOption(day)"
          >
            <input
              class="cursor-pointer"
              type="radio"
              :id="`${day}-days`"
              :name="`${day} Days`"
              :value="day"
              v-model="forms.input.decisions"
            />
            <span>{{ day }} Days</span>
          </label>
          <label>
            <form-input
              id="days-input"
              type="number"
              placeholder="Custom value"
              class="text-center"
              style="font-size: 26px; width: 125px;"
              v-model="forms.input.decisions"
              @valid="forms.vset.input.decisions"
              required
              :min="minmax.decisions.min"
              :max="minmax.decisions.max"
            />
            <span style="font-size: 16px;">Days</span>
          </label>
        </grid>
      </grid>
    </div>

    <button commons @click="$router.push('/level/5/2')" :disabled="!forms.vget.input.form">
      next
    </button>

    <modal ref="modal" :bg="false" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Conviction Voting</h2>
        <p class="level-text mt-1">
          Conviction Voting is a continuous process - kind of like ‘vote streaming’.
        </p>
        <p class="level-text">
          Each proposal is like a battery and tokens are the power source. The more tokens held by a
          community member, the greater the power they have to charge up proposals. Token holders
          express the degree of their conviction on a proposal by deciding how much of their battery
          power will go towards each proposal, and the longer they hold their tokens there, the more
          charge the proposal gets.
        </p>
        <p class="level-text">
          When voting power accrues quickly, the tokens actually have less power but the Commons is
          able to quickly make decisions on funding. When voting power accrues slowly, the tokens
          actually have more power and the individuals in the Commons can better predict what
          proposals are likely to pass in advance.
        </p>
        <p class="level-text">
          How much time should pass before an individual’s voting power reaches 80% of it’s full
          power?
        </p>
        <button commons class="mt-2" @click="$refs.modal.hide()">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Chart from '../../components/common/Chart.vue'

export default {
  name: 'level-5-1',
  components: { Chart },
  data() {
    return {
      forms: {
        input: {
          decisions: this.$store.state.CommonsModule.form.decisions,
        },
      },
    }
  },
  watch: {
    'forms.input.decisions'(x) {
      this.$store.commit('CommonsModule/setFormDecisions', x)
    },
  },
  methods: {
    setOption(day) {
      this.forms.input.decisions = day
      this.forms.vset.input.decisions(true)
    },
  },
  computed: {
    ...mapState('CommonsModule', ['minmax']),
    chart() {
      const input = this.forms.input.decisions
      return {
        type: 'line',
        data: {
          labels: [0, 3, 10, 30, 60],
          datasets: [
            {
              data: [0, input, 3, 5, 0],
              strokeColor: '#ff6c23',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 8,
              pointBorderColor: '#fff4',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderWidth: 12,
              pointRadius: ctx => (ctx.dataIndex === 1 ? 3 : 0),
              pointHitRadius: ctx => (ctx.dataIndex === 1 ? 10 : 0),
              borderColor: '#67DE69',
              borderWidth: 0.5,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{ ticks: { beginAtZero: true } }],
            // xAxes: [{ type: 'logarithmic' }],
          },
        },
      }
    },
  },
}
</script>

<style scoped lang="scss">
.graph-section {
  justify-items: center;
  position: relative;
  gap: 1.5rem;
}
.form-section {
  justify-content: center;
  justify-items: center;
  align-items: center;
  column-gap: 2rem;
  grid-template-columns: repeat(5, auto);
  & > label {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5rem;
    @extend .font-teko;
    font-size: 26px;
  }
}
</style>
