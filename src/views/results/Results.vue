<template>
  <div class="layout-vertical" text-center>
    <icon icon="CircleNet" class="bg-net" />
    <commons-header :exit="false" :help="false" :restart="false" />
    <p class="teko-title">Your RxC Commons...</p>
    <div class="level-text">
      <p>Do you think you did a good job?</p>
      <p>Analyze these charts and see if your commons is a success!</p>
    </div>
    <div class="graph-wrap">
      <grid class="graph-nav">
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
      <div class="graph" style="grid-area: graph1;">
        <div class="graph-example">
          <p style="color: #43a983;" @click="$refs.chart1.show()">
            What do good Funding Pool results look like?
          </p>
          <modal :bg="false" :overlay="modalBg" ref="chart1">
            Example chart 1
          </modal>
        </div>
        <Chart
          responsive="true"
          :chart="buildChart(chart1)"
          :width="cssVars.graphWidth"
          :height="cssVars.graphHeight"
          :gradient="`${color11}dd ${color12}44`"
        />
      </div>
      <div class="graph" style="grid-area: graph2;">
        <div class="graph-example">
          <p style="color: #156ce2;" @click="$refs.chart1.show()">
            What do good Sentiment results look like?
          </p>
          <modal :bg="false" :overlay="modalBg" ref="chart1">
            Example chart 1
          </modal>
        </div>
        <Chart
          :chart="buildChart(chart2)"
          :width="cssVars.graphWidth"
          :height="cssVars.graphHeight"
          :gradient="`${color21}dd ${color21}44`"
        />
      </div>
      <div class="graph" style="grid-area: graph3;">
         <div class="graph-example">
          <p style="color: #94b418;" @click="$refs.chart1.show()">
            What do good Token Price results look like?
          </p>
          <modal :bg="false" :overlay="modalBg" ref="chart1">
            Example chart 1
          </modal>
        </div>
        <Chart
          :chart="buildChart(chart3)"
          :width="cssVars.graphWidth"
          :height="cssVars.graphHeight"
          :gradient="`${color31}dd ${color32}44`"
        />
      </div>
    </div>
    <p class="teko-subtitle mt-5">
      Did the RxC community create a sustainable Commons to support RxC gatherings?
    </p>
    <p class="level-text">
      Do you want to submit your score, or do you want to try to run another simulation?
    </p>
    <flex gap="2" class="mt-2">
      <button commons @click="$router.push('/outcome')">SEE YOUR FUTURE</button>
      <button commons @click="$router.push('/level/1/1')">play again</button>
    </flex>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Chart from '../../components/common/Chart.vue'

export default {
  name: 'results',
  components: { Chart },
  data() {
    return {
      modalBg: '#0008',
      color11: '#17b160',
      color12: '#247c97',
      color21: '#156ce2',
      color22: '#011638',
      color31: '#94b418',
      color32: '#364958',
      cssVars: {
        graphWidth: '400',
        graphHeight: '200',
      },
    }
  },
  computed: {
    ...mapState('CommonsModule', ['form', 'outcome']),
    data() {
      // TODO: disabled but it requires a review of why this was implemeted
      // const d = {}
      // Object.entries(this.outcome.result?.data || {}).forEach(
      //   ([k, v]) => (d[k] = v.map(x => Math.round(x))),
      // )
      // return d
      return this.outcome.result?.data
    },
    chart1() {
      return {
        datasets: [
          {
            data: this.data.funding_pool,
            borderColor: this.color11,
            yAxisID: 'funding-pool',
            label: 'Funding pool',
          }
        ],
        yAxes: [
          {
            id: 'funding-pool',
          }
        ],
        title: 'Funding Pool'
      }
    },
    chart2() {
      return {
        datasets: [
          {
            data: this.data.sentiment,
            borderColor: this.color21,
            yAxisID: 'sentiment',
            label: 'Sentiment',
          }
        ],
        yAxes: [
          {
            id: 'sentiment',
          }
        ],
        title: 'Sentiment'
      }
    },
    chart3() {
      return {
        datasets: [
          {
            data: this.data.token_price,
            borderColor: this.color31,
            yAxisID: 'token-price',
            label: 'Token Price',
          }
        ],
        yAxes: [
          {
            id: 'token-price',
            ticks: {
              suggestedMin: 0,
              beginAtZero: true,
            },
          }
        ],
        title: 'Token Price'
      }
    },
  },
  methods: {
    buildChart(input) {
      const d = this.data
      return {
        type: 'line',
        data: {
          labels: d.timestep,
          datasets: input.datasets.map(x => ({
            ...x,
            pointRadius: 0,
            pointHitRadius: 0,
            strokeColor: '#ff6c23',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 8,
            pointBorderColor: '#fff4',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderWidth: 12,
            borderWidth: 0.5,
            hoverRadius: 4,
          })),
        },
        options: {
          elements: { // default
            point:{
              hoverRadius: 0
            }
          },
          title: {
            display: true,
            text: input.title
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: input.yAxes,
            xAxes: [
              {
                ticks: {
                  autoSkip: false,
                  maxTicksLimit: 20,
                  callback: function(value, index) {
                    if (index % 25 === 0)
                      return index
                    return
                  }
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Days'
                }
              },
            ],
          },
        },
      }
    },
  },
}
</script>

<style scoped lang="scss">
.graph-example {
  text-align: center;
  cursor: pointer;
  & > p {
    font-size: 14px;
  }
}
.graph-wrap {
  text-align: start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'gnav graph1'
    'gnav graph2'
    'gnav graph3';
  row-gap: 10rem;
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
.graph-info {
  display: grid;
  align-content: flex-start;
  gap: 0.75rem;
  & > p {
    @extend .text-button;
  }
}
.graph {
  width: 50vw;
  height: 20vw;
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
