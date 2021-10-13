<template>
  <div id="strength" style="width:625px;height: 380px"></div>
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
      StrengthChart: null
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
    this.StrengthChart = Echarts.init(document.getElementById('strength'), 'dark')

     let that = this
    setInterval(() => {
      that.StrengthChart.clear()
      that.loadChart()
    }, 10000)
  },
  methods: {
    loadChart() {
      let yData = this.dataSource.map(item => item.name)
      let Data = this.dataSource.map(item => item.qd)

      let option = {
        title: {
          text: '吨/万元',
          textAlign: 'left',
          right: 60,
          textStyle: {
            color: '#e5feff',
            fontSize: 30,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['碳排强度'],
          show: false,
          textStyle: {
            fontSize: 14
          }
        },
        grid: {
          left: '0%',
          right: '10%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          max: 1.5,
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', //更改坐标轴文字颜色
              fontSize: 18 //更改坐标轴文字大小
            }
          }
        },
        yAxis: {
          type: 'category',
          data: yData.reverse(),
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', //更改坐标轴文字颜色
              fontSize: 18 //更改坐标轴文字大小
            },
            formatter: '{icon|} {value}',
            rich: {
              icon: {
                width: 11,
                height: 13,
                lineHeight: 15,
                align: 'left',
                verticalAlign: 'top',
                backgroundColor: {
                  image: require('../../../assets/imgs/label_icon.png')
                }
              }
            }
          }
        },
        series: [
          {
            showBackground: true,
            name: '碳排强度',
            type: 'bar',
            data: Data.reverse(),
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#fec74d',
                fontSize: 22
              },
              offset:[0,2],
              formatter: '{icon| } {c}',
              rich: {
                icon: {
                  width: 9,
                  height: 11,
                  lineHeight: 11,
                  align: 'left',
                  verticalAlign: 'middle',
                  backgroundColor: {
                    image: require('../../../assets/imgs/bar_chart_icon.png')
                  }
                },
                text: {
                  align: 'right'
                }
              }
            },
            itemStyle: {
              //颜色渐变
              color: new Echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#4db1e6'
                },
                {
                  offset: 0.5,
                  color: '#5ebab2'
                },
                {
                  offset: 1,
                  color: '#73c570'
                }
              ])
            },
            barWidth: 30,
            backgroundStyle: {
              color: 'rgba(29, 61, 75, .6)',
              borderWidth: 2,
              borderColor: '#5b9699'
            }
          }
        ]
      }
      this.StrengthChart.setOption(option, true)
    }
  }
}
</script>
