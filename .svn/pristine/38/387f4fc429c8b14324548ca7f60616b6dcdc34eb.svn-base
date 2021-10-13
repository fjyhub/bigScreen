<template>
  <div id="consumption" style="width:625px;height: 350px"></div>
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
      ConsumptionChart: null
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
    this.ConsumptionChart = Echarts.init(document.getElementById('consumption'), 'dark')

    let that = this
    setInterval(() => {
      that.ConsumptionChart.clear()
      that.loadChart()
    }, 10000)
  },

  methods: {
    loadChart() {
      let colors = ['#e55634', '#fdc70c', '#fe7920', '#1391ba', '#2a9810']
      let data1 = this.dataSource.map(function(item, index) {
        return {
          name: item.typeName,
          value: item.tpsj,
          label: {
            color: colors[index]
          }
        }
      })
      let data2 = this.dataSource.map(function(item, index) {
        return {
          name: item.typeName,
          value: item.tpsj
        }
      })
      let option = {
        title: {
          text: '消费量(亿吨标煤)',
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

        // grid: {
        //   left: '0%',
        //   right: '0%',
        //   bottom: '3%'
        // },
        color: ['#e55634', '#fdc70c', '#fe7920', '#1391ba', '#2a9810'],
        label: {
          fontSize: 14
        },
        legend: {
          orient: 'vertical',
          right: 70,
          bottom: 50,
          icon: 'rect',
          itemWidth: 20,
          itemHeight: 20,
          itemGap: 20,
          textStyle: {
            fontSize: 22,
            width: 70,
            color: '#fff'
          },
          formatter: function(name) {
            if (name.length > 3) {
              return name.substr(0, 3) + '\n' + name.substr(3)
            } else {
              return name
            }
          }
        },
        series: [
          {
            name: '浙江能源消费结构',
            type: 'pie',
            radius: '70%',
            z: 0,
            data: data1,
            itemStyle: {
              shadowBlur: 15,
              borderColor: 'rgba(0,0,0,0.5)',
              borderWidth: 2,
              shadowColor: 'rgba(50, 94, 118, 1)'
            },
            emphasis: {},
            selectedMode: 'single',
            avoidLabelOverlap: true,
            selectedOffset: 20,
            startAngle:200,
            label: {
              // alignTo: 'edge',
              position: 'outer',
              alignTo: 'labelLine',
              formatter: '{c}',
              fontSize: 27
              //  bleedMargin:50
            },
            labelLine: {
              showAbove: false,
              //  length2:50,
              lineStyle: {
                width: 2
              }
            },
            left: '-25%'
          },
          {
            name: '浙江能源消费结构1',
            type: 'pie',
            radius: ['30%', '50%'],
            z: 1,
            data: data2,
            itemStyle: {
              color: 'transparent'
            },
            silent: true,
            label: {
              formatter: function(data) {
                if (data.name === '外来电') {
                  return '21%'
                }
                return Math.round(data.percent) + '%'
                // return data.percent
              },
              position: 'inside',
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

      this.ConsumptionChart.setOption(option, true)
      this.ConsumptionChart.dispatchAction({
        type: 'select',
        seriesIndex: 0,
        dataIndex: 0
      })
    }
  }
}
</script>
