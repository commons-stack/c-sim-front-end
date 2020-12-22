<template>
  <div class="layout-vertical" text-center>
    <icon icon="CircleNet" class="bg-net" />
    <commons-header :help="false" />
    <p class="teko-title">Your Commons...</p>
    <div class="level-text">
      <p>Do you think you did a good job?</p>
      <p>Analyze these charts and see if your commons is a success!</p>
    </div>
    <div class="graph-wrap">
      <grid class="graph-nav">
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
      <div class="graph" style="grid-area: graph1;">
        <Chart
          responsive="true"
          :chart="buildChart(chart1)"
          :width="cssVars.graphWidth"
          :height="cssVars.graphHeight"
          :gradient="`${color11}dd ${color12}44`"
        />
      </div>
      <div class="graph-info" style="grid-area: desc1;">
        <p @click="$refs.glossary1.show()">Metrics glossary</p>
        <modal :bg="false" :overlay="modalBg" ref="glossary1">
          Metric glossary 1
        </modal>
        <p @click="$refs.chart1.show()">Example chart</p>
        <modal :bg="false" :overlay="modalBg" ref="chart1">
          Example chart 1
        </modal>
      </div>
      <div class="graph" style="grid-area: graph2;">
        <Chart
          :chart="buildChart(chart2)"
          :width="cssVars.graphWidth"
          :height="cssVars.graphHeight"
          :gradient="`${color21}44 #000000`"
        />
      </div>
      <div class="graph-info" style="grid-area: desc2;">
        <p @click="$refs.glossary2.show()">Metrics glossary</p>
        <modal :bg="false" :overlay="modalBg" ref="glossary2">
          Metric glossary 2
        </modal>
        <p @click="$refs.chart2.show()">Example chart</p>
        <modal :bg="false" :overlay="modalBg" ref="chart2">
          Example chart 2
        </modal>
      </div>
      <div class="graph" style="grid-area: graph3;">
        <Chart
          :chart="buildChart(chart3)"
          :width="cssVars.graphWidth"
          :height="cssVars.graphHeight"
          :gradient="`${color31}44 #000000`"
        />
      </div>
      <div class="graph-info" style="grid-area: desc3;">
        <p @click="$refs.glossary3.show()">Metrics glossary</p>
        <modal :bg="false" :overlay="modalBg" ref="glossary3">
          Metric glossary 3
        </modal>
        <p @click="$refs.chart3.show()">Example chart</p>
        <modal :bg="false" :overlay="modalBg" ref="chart3">
          Example chart 3
        </modal>
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
      color31: '#94b418',
      cssVars: {
        graphWidth: '400',
        graphHeight: '200',
      },
    }
  },
  computed: {
    ...mapState('CommonsModule', ['form', 'outcome']),
    data() {
      const d = {}
      Object.entries(this.outcome.result?.data || {}).forEach(
        ([k, v]) => (d[k] = v.map(x => Math.round(x))),
      )
      return d
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
.graph-wrap {
  text-align: start;
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'gnav graph1 desc1'
    'gnav graph2 desc2'
    'gnav graph3 desc3';
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
  width: 40vw;
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
