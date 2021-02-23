<template>
  <div class="layout-vertical" text-center>
    <icon icon="CircleNet" class="bg-net" />
    <commons-header title-only />
    <p class="teko-title">Your RxC Commons...</p>
    <div>
      <p class="level-text">Do you think you did a good job?</p>
      <p class="level-text">Analyze these charts and see if your commons is a success!</p>
      <p class="level-text results-text mv-2">
        You initiated
      </p>
      <grid class="graph-nav">
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
          <p>HATCH TRIBUTE</p>
        </div>
        <div
          v-tooltip="{
            content: 'The maximum percentage of the funds within the Funding Pool that can be withdrawn at any one time',
            placement: 'top',
          }"
        >
          <p>{{ form.votingPower }}%</p>
          <p>MAX SPENDING</p>
        </div>
        <div
          v-tooltip="{
            content: 'The amount of time it takes for an individual’s voting power to reach 80% of its full power',
            placement: 'top',
          }"
        >
          <p>{{ form.decisions }} Days</p>
          <p>VOTING SPEED</p>
        </div>
        <div
          v-tooltip="{
            content: 'The percentage of funds that feeds back into the Funding Pool when members choose to sell their RxC tokens',
            placement: 'top',
          }"
        >
          <p>{{ form.exiting }}%</p>
          <p>EXIT TRIBUTE</p>
        </div>
      </grid>
      <p class="level-text results-text mv-2">
        Results after the simulation
      </p>
      <div class="graph-results mb-2">
        <div>
          <p>PARTICIPANTS</p>
          <p>{{ data.participants }}</p>
        </div>
        <div>
          <p>TOTAL PROPOSALS</p>
          <p>{{ data.proposals.total }}</p>
        </div>
        <div>
          <p>CANDIDATE PROPOSALS</p>
          <p>{{ data.proposals.candidates }}</p>
        </div>
        <div>
          <p>ACTIVE PROPOSALS</p>
          <p>{{ data.proposals.actives }}</p>
        </div>
        <div>
          <p>COMPLETED PROPOSALS</p>
          <p>{{ data.proposals.completed }}</p>
        </div>
        <div>
          <p>FAILED PROPOSALS</p>
          <p>{{ data.proposals.failed }}</p>
        </div>
      </div>
    </div>
    <div class="graph-wrap">
      <div class="graph" style="grid-area: graph1;">
        <div class="graph-example">
          <p style="color: #43a983;" @click="$refs.chart1.show()">
            What do good Funding Pool results look like?
          </p>
          <modal :bg="false" overlay="dark" ref="chart1">
            <div class="layout-modal">
              <h2 class="teko-title">Funding Pool</h2>
              <p class="level-text mt-1 mb-1">
                The portion of total community funds that is allocated to support RxC projects. The 
                funding pool is initialized by the starting investment of the Hatchers (the Hatch 
                tribute). When projects are approved by the community, the funds required are 
                withdrawn from the funding pool. The funding pool grows when members choose to sell 
                their tokens because a portion of their withdrawal, called “the exit tribute”, is 
                feedback into the community funding pool.
              </p>
            </div>
            <p class="level-text mt-1">
              The chart below is an example of a successful Commons.
            </p>
            <Chart
              responsive="true"
              :chart="buildChart(goodChart1)"
              :width="cssVars.graphWidth"
              :height="cssVars.graphHeight"
              :gradient="`${color11}dd ${color12}44`"
            />
            <button commons class="mt-2" @click="$refs.chart1.hide()">OK</button>
          </modal>
        </div>
        <Chart
          :responsive="true"
          :chart="buildChart(chart1)"
          :width="cssVars.graphWidth"
          :height="cssVars.graphHeight"
          :gradient="`${color11}dd ${color12}44`"
        />
      </div>
      <div class="graph" style="grid-area: graph2;">
        <div class="graph-example">
          <p style="color: #156ce2;" @click="$refs.chart2.show()">
            What do good Sentiment results look like?
          </p>
          <modal :bg="false" overlay="dark" ref="chart2">
            <div class="layout-modal">
              <h2 class="teko-title">Sentiment</h2>
              <p class="level-text mt-1">
                The average opinion of the commons community, as indicated by conviction voting and 
                expressed as a numerical value. As people vote in favour of a proposal, the overall 
                sentiment for that proposal increases.
              </p>
            </div>
            <p class="level-text mt-1">
              The chart below is an example of a successful Commons.
            </p>
            <Chart
              :chart="buildChart(goodChart2)"
              :width="cssVars.graphWidth"
              :height="cssVars.graphHeight"
              :gradient="`${color21}dd ${color21}44`"
            />
            <button commons class="mt-2" @click="$refs.chart2.hide()">OK</button>
          </modal>
        </div>
        <Chart
          :responsive="true"
          :chart="buildChart(chart2)"
          :width="cssVars.graphWidth"
          :height="cssVars.graphHeight"
          :gradient="`${color21}dd ${color21}44`"
        />
      </div>
      <div class="graph" style="grid-area: graph3;">
          <div class="graph-example">
          <p style="color: #94b418;" @click="$refs.chart3.show()">
            What do good Token Price results look like?
          </p>
          <modal :bg="false" overlay="dark" ref="chart3">
            <div class="layout-modal">
              <h2 class="teko-title">Token Price</h2>
              <p class="level-text mt-1">
                The monetary value associated with the purchase of a token. RxC tokens are backed by 
                the RxC reserve, ensuring that they always have monetary value. Token price, however, 
                can fluctuate – decreasing if members sell their tokens (withdrawing value from the 
                community), and increasing as members contribute time and resources (growing the 
                commons and adding value to the community).
              </p>
            </div>
            <p class="level-text mt-1">
              The chart below is an example of a successful Commons.
            </p>
            <Chart
              class="mt-10"
              :chart="buildChart(goodChart3)"
              :width="cssVars.graphWidth"
              :height="cssVars.graphHeight"
              :gradient="`${color31}dd ${color32}44`"
            />
            <button commons class="mt-2" @click="$refs.chart3.hide()">OK</button>
          </modal>
        </div>
        <Chart
          :responsive="true"
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
    <flex gap="2" class="mt-2" style="flex-wrap: wrap;">
      <button commons @click="$router.push('/level/1/1')">play again</button>
      <button commons @click="$router.push('/outcome')">SEE YOUR FUTURE</button>
    </flex>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Chart from '../../components/common/Chart.vue'
import goodChart from '../../assets/charts/charts.json'

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
            ticks: {
              callback: value => this.addSuffix(value)
            }
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
    goodChart1() {
      return {
        datasets: [
          {
            data: goodChart.funding_pool,
            borderColor: this.color11,
            yAxisID: 'funding-pool',
            label: 'Funding pool',
          }
        ],
        yAxes: [
          {
            id: 'funding-pool',
            ticks: {
              callback: value => this.addSuffix(value)
            }
          }
        ],
        title: 'Funding Pool'
      }
    },
    goodChart2() {
      return {
        datasets: [
          {
            data: goodChart.sentiment,
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
    goodChart3() {
      return {
        datasets: [
          {
            data: goodChart.token_price,
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
    addSuffix(value) {
      const ranges = [
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'K' }
      ]
      for (var i = 0; i < ranges.length; i++) {
        if (value >= ranges[i].divider) {
          return (value / ranges[i].divider).toString() + ranges[i].suffix
        }
      } 
      return value
    }, 
    buildChart(input) {
      const d = this.data
      const maxTicksLimit = 20
      const timeStep = [1, 3, 6].find(function (value) {
        return (input.datasets[0].data.length / (30* value)) < maxTicksLimit
      })
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
                  maxRotation: 0,
                  minRotation: 0,
                  callback: function(index) {
                    const indexToMonths = index / 30
                    if (indexToMonths % timeStep === 0)
                      return indexToMonths
                    return
                  }
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Months'
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
.results-text {
  color: #E5F0FF;
  font-size: 16px;
}
.graph-results {
  @extend .font-lato;
  font-size: 12px;
  div {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > * {
      &:last-child {
        @extend .font-teko;
        font-size: 24px;
        @include s {
          font-size: 22px;
        }
      }
      &:first-child {
        @extend .font-lato;
        font-size: 12px;
      }
    }
  }
  div:not(:last-child) {
    border-bottom: 2px solid #143B5F;
  }
}
.graph-example {
  text-align: center;
  cursor: pointer;
  & > p {
    font-size: 14px;
  }
}
.graph-wrap {
  text-align: start;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'graph1'
    'graph2'
    'graph3';
  row-gap: 2rem;
  column-gap: 1.5rem;
  @include l {
    row-gap: 10rem;
  }
}
.graph-nav {
  grid-area: gnav;
  align-content: center;
  justify-self: center;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  @include l {
    grid-template-columns: repeat(6, auto);
  }
  gap: 1rem;
  text-align: center;
  & > div {
    border: 2px solid #143b5f;
    height: 70px;
    @media (max-width: 750px) {
      padding: 4px;
    }
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
  width: 90vw;
  @include l {
    width: 50vw;
    height: 20vw;
  }
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
