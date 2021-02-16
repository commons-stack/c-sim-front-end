<template>
  <div class="layout-vertical">
    <commons-header @help="$refs.modal.show()" @restart="() => {}" />
    <v-popover trigger="click" :auto-hide="true">
      <template slot="popover">
        <flex :column="true">
          <p>Funding Distribution: the maximum funds that can be withdrawn at any time by a large proposal or group of smaller proposals.</p>
          <div style="text-align:center;">
            <button commons class="mt-1" @click="$refs.modal.show()" v-close-popover>More info</button>
          </div>
        </flex>
      </template>
      <h2 class="teko-subtitle text-center">
        How much time should pass before an individual’s <span class="underline-pointer">voting power</span> reaches 80%
        of it’s full power?
      </h2>
    </v-popover>
    <div class="layout-form">
      <commons-navigation />
      <grid class="layout-form-grid">
        <grid class="graph-section">
          <!-- <icon icon="GridNet" class="absolute" style="bottom: 23px; zoom: 1.3;" /> -->
          <icon
            icon="ElipseGradient"
            class="absolute"
            style="bottom: 20px; opacity: 0.2;"
          />
          <div class="relative">
            <Chart
              :responsive="true"
              :width="width"
              :chart="chart"
              gradient="#59c973dd #247c9744"
            />
          </div>
        </grid>
        <grid class="form-section">
          <label
            :id="`${day}-days`"
            v-for="day in [30, 45, 60, 90]"
            :key="day"
            @click="setOption(day)"
            class="radio"
          >
            <input
              class="cursor-pointer"
              type="radio"
              :id="`${day}-days`"
              :name="`${day} Days`"
              :value="day"
              v-model="forms.input.decisions"
            />
            <span class="radio-label">{{ day }} Days</span>
          </label>
          <label>
            <form-input
              id="days-input"
              type="number"
              placeholder="0"
              class="custom-input text-center"
              v-model="forms.input.decisions"
              @valid="forms.vset.input.decisions"
              required
              :min="minmax.decisions.min"
              :max="minmax.decisions.max"
            />
            <span class="radio-label">Custom Days</span>
          </label>
        </grid>
      </grid>
    </div>

    <button
      commons
      @click="$router.push('/level/5/2')"
      :disabled="!forms.vget.input.form"
    >
      next
    </button>

    <modal ref="modal" :bg="false" overlay="dark">
      <div class="layout-modal">
        <h2 class="teko-title">Conviction Voting</h2>
        <p class="level-text mt-1">
          Conviction Voting is a continuous process - kind of like ‘vote streaming’.
        </p>
        <p class="level-text">
          Each proposal is like a battery and tokens are the power source. The more tokens held by 
          a community member, the greater the power they have to charge up proposals. RxC token 
          holders express the degree of their conviction on a proposal by deciding how much of 
          their battery power will go towards each proposal, and the longer they hold their tokens 
          there, the more charge the proposal gets.
        </p>
        <p class="level-text">
          When voting power accrues quickly, the tokens actually have less power but the 
          RadicalxChange Commons is able to quickly make decisions on funding. When voting power 
          accrues slowly, the tokens actually have more power and the individuals in the 
          RadicalxChange Commons can better predict what proposals are likely to pass in advance.
        </p>
        <p class="level-text">
          You must decide how much time should pass before an individual’s voting power reaches 80% 
          of its full power.
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
    width() {
      return (window.innerWidth <= 750) ? '300' : '600'
    },
    chart() {
      const input =
        this.forms.input.decisions && this.forms.input.decisions > 2
          ? this.forms.input.decisions
          : 3
      const H = this.$store.state.CommonsModule.conviction.halfLife
      const H2 = this.$store.state.CommonsModule.conviction.inflectionPoint
      const alpha = (1 - H) ** (1 / input)
      const S = 1 - alpha
      const t = Math.log(((alpha - 1) * H2 + S) / S) / Math.log(alpha)
      const maxBound = 180
      const labels = [...Array(maxBound + 1).keys()]
      const conviction_lbound = x => (S * (1 - alpha ** x)) / (1 - alpha)
      const conviction_ubound = (x, t) =>
        H2 * (S / (1 - alpha)) * alpha ** (x - t)
      const data = labels.map(
        x => 100 * (x < t ? conviction_lbound(x) : conviction_ubound(x, t))
      )
      const maxTicksLimit = (window.innerWidth <= 750) ? 10 : 20
      const timeStep = [1, 2, 5, 10, 25, 50, 100, 200, 250].find(function (value) {
        return (data.length / value) < maxTicksLimit
      })
      return {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Conviction',
              data: data,
              strokeColor: '#ff6c23',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 8,
              pointBorderColor: '#fff4',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderWidth: 12,
              pointRadius: ctx =>
                ctx.dataIndex === labels.findIndex(x => x === input) ||
                ctx.dataIndex === labels.findIndex(x => x === Math.floor(t))
                  ? 3
                  : 0,
              pointHitRadius: ctx =>
                ctx.dataIndex === labels.findIndex(x => x === input) ||
                ctx.dataIndex === labels.findIndex(x => x === Math.floor(t))
                  ? 10
                  : 0,
              borderColor: '#67DE69',
              borderWidth: 0.5,
              hoverRadius: 4,
            },
            {
              label: '80p',
              data: labels.map(x => 100 * (H * (S / (1 - alpha))) + x * 0),
              borderColor: '#67DE69',
              borderDash: [10, 10],
              borderWidth: 0.5,
              fill: false,
              pointRadius: 0,
              pointHitRadius: 0,
            },
          ],
        },
        options: {
          elements: {
            // default
            point: {
              hoverRadius: 0,
            },
          },
          legend: {
            display: false,
          },
          scales: {
            // xAxes: [{ type: 'logarithmic' }],
            xAxes: [
              {
                ticks: {
                  autoSkip: false,
                  maxTicksLimit: 20,
                  maxRotation: 0,
                  minRotation: 0,
                  callback: function(index) {
                    if (index % timeStep === 0)
                      return index
                    return
                  }
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Days',
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: '%',
                },
                ticks: { beginAtZero: true },
              },
            ],
          },
          tooltips: {
            callbacks: {
              title: () => {
                return ''
              },
              label: function (tooltipItem) {
                let label = ''
                if (Math.round(tooltipItem.yLabel) === 100 * H) {
                  label = `Conviction reaches ${
                    Math.round(tooltipItem.yLabel * 100) / 100
                  }% in ${tooltipItem.xLabel} days`
                } else if (tooltipItem.xLabel === Math.floor(t)) {
                  label =
                    'Conviction decays in a similar way when support is withdrawn from a proposal'
                  // label = `Inflection Point at day ${tooltipItem.xLabel}`
                }
                return label
              },
            },
            custom: function (tooltip) {
              if (!tooltip) return
              // disable displaying the color box;
              tooltip.displayColors = false
            },
            filter: function (tooltipItem) {
              return tooltipItem.datasetIndex === 0
            },
            titleFont: {
              family: "'Teko', sans-serif",
            },
            bodyFont: {
              family: "'Teko', sans-serif",
            },
            footerFont: {
              family: "'Teko', sans-serif",
            },
            backgroundColor: 'rgb(44,44,44)',
            cornerRadius: 0,
            xPadding: 24,
            yPadding: 12,
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
  column-gap: 1rem;
  grid-template-columns: repeat(2, auto);
  @include l {
    grid-template-columns: repeat(5, auto);
  }
  & > label {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5rem;
    @extend .font-teko;
    font-size: 26px;
  }
}
.custom-input {

  border: 2px solid #32373e;
  border-radius: 15px;
  background: #182932;
  font-size: 26px;
  width: 56px;
  height: 40px;
  align-items: middle;
}
.radio {
  .radio-label {
    @extend .font-teko;
    font-size: 26px;
  }
  margin: 0.5rem;
  input[type='radio'] {
    position: absolute;
    opacity: 0;
    + .radio-label {
      &:before {
        content: '';
        background: #182932;
        border-radius: 100%;
        border: 2px solid #32373e;
        display: inline-block;
        width: 1em;
        height: 1em;
        position: relative;
        margin-right: 0.5em;
        vertical-align: middle;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background: linear-gradient(180deg, #67de69 0%, #0047b0 100%);
          box-shadow: inset 0 0 0 5px #182932;
        }
      }
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: #32373e;
        }
      }
    }
    &:disabled {
      + .radio-label {
        &:before {
          background: #182932;
        }
      }
    }
    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
