<template>
  <canvas :height="height" :width="width" ref="chart" />
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'chart',
  props: {
    height: {
      type: String,
      default: '400',
    },
    width: {
      type: String,
      default: '400',
    },
    chart: {
      type: Object,
      required: true,
    },
    gradient: String
  },
  mounted() {
    if (this.gradient) {
      const carouselCtx = this.$refs.chart.getContext('2d')
      this.chartGradient = carouselCtx.createLinearGradient(0, 0, 0, Number(this.height))
      this.gradient.split(' ').forEach((col, i) => this.chartGradient.addColorStop(i, col))
    }
    this.$watch('chart', this.init, { immediate: true, deep: true })
  },
  data() {
    return {
      instance: undefined,
      chartGradient: undefined
    }
  },
  methods: {
    init() {
      this.instance?.destroy()
      this.instance = new Chart(this.$refs.chart, this.chartData)
    },
  },
  computed: {
    chartData() {
      const chart = { ...this.chart }
      if (this.chartGradient) {
        chart.data.datasets.forEach(x => (x.backgroundColor = this.chartGradient))
      }
      return chart
    },
  },
}
</script>

<style scoped lang="scss"></style>
