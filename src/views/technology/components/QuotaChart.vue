<!--  -->
<template>
  <div id="QuotaChart" :style="{ width: width + 'px', height: height + 'px' }"></div>
</template>

<script>
import * as Echarts from 'echarts'
import TaiFeng from '../../../data/taifeng'
export default {
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      myChart: null,
      echartsData: TaiFeng
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.myChart = Echarts.init(document.getElementById('QuotaChart'), 'dark')
    this.loadEchart()
  },

  methods: {
    loadEchart() {
      let arr = this.echartsData.map(item => item.areaDetailScoreList)
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {
          data: ['电网坚强指数', '设备可靠指数', '运维管理指数', '应急保障指数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: this.echartsData.map(item => item.areaName)
        },
        series: [
          {
            name: '电网坚强指数',
            type: 'bar',
            barWidth: 30,
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: arr.map(item => item[0])
          },
          {
            name: '设备可靠指数',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: arr.map(item => item[1])
          },
          {
            name: '运维管理指数',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: arr.map(item => item[2])
          },
          {
            name: '应急保障指数',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: arr.map(item => item[3])
          }
        ]
      }
      this.myChart.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped></style>
