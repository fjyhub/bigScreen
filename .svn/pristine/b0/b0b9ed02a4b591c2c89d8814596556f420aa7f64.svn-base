<template>
  <div id="discharge" style="width:625px;height: 350px"></div>
</template>
<script>
import * as Echarts from 'echarts'
export default {
  props: {
    dataSource: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      DischargeChart: null
    }
  },
  watch: {
    dataSource: {
      handler() {
        this.loadChart()
      }
    }
  },
  mounted() {
    // 消费结构图
    this.DischargeChart = Echarts.init(document.getElementById('discharge'), 'dark')

    let that = this
    setInterval(() => {
      that.DischargeChart.clear()
      that.loadChart()
    }, 10000)
  },
  methods: {
    loadChart() {
      let colors = ['#00c0ff', '#fe7920', '#e55634', '#fdc70c', '#797a7e']

      let data = this.dataSource.map(function(item, index) {
        return {
          name: item.typeName,
          value: item.tpsj
        }
      })
      let data1 = this.dataSource.map(function(item, index) {
        return {
          name: item.typeName,
          value: item.tpsj,
          label: { color: colors[index] }
        }
      })
      let option = {
        title: {
          text: '碳排量(亿吨)',
          textAlign: 'left',
          right: 60,
          textStyle: {
            color: '#e5feff',
            fontSize: 30,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        color: ['#00c0ff', '#fe7920', '#e55634', '#fdc70c', '#797a7e'],
        label: {
          fontSize: 14
        },
        legend: {
          orient: 'vertical',
          right: 70,
          bottom: 70,
          icon: 'rect',
          itemWidth: 20,
          itemHeight: 20,
          itemGap: 20,
          textStyle: {
            fontSize: 22,
            width: 70,
            color: '#fff'
          }
        },
        series: [
          {
            name: '浙江碳排放结构',
            type: 'pie',
            radius: '70%',
            z: 0,
            data: data1,
            // minAngle: 20,
            selectedMode: 'single',
            avoidLabelOverlap: true,
            selectedOffset: 20,
            itemStyle: {
              borderColor: 'rgba(0,0,0,0.5)',
              borderWidth: 2,
              shadowBlur: 15,
              shadowColor: 'rgba(50, 94, 118, 1)'
            },
            label: {
              position: 'outer',
              alignTo: 'labelLine',
              formatter: '{c}',
              fontSize: 27
            },
            labelLine: {
              showAbove: true,
              lineStyle: {
                width: 2
              }
            },
            left: '-25%'
          },
          {
            name: '浙江碳排放结构1',
            type: 'pie',
            radius: ['30%', '50%'],
            z: 1,
            data: data,
            minAngle: 20,
            silent: true,
            itemStyle: {
              color: 'transparent'
            },
            label: {
              formatter: function(data) {
                return Math.round(data.percent) + '%'
              },
              position: 'inner',
              fontSize: 25,
              color: '#fff'
            },
            labelLine: {
              showAbove: true
            },
            left: '-25%'
          }
        ]
      }
      this.DischargeChart.setOption(option, true)

      this.DischargeChart.dispatchAction({
        type: 'select',
        seriesIndex: 0,
        dataIndex: 0
      })
    }
  }
}
</script>
