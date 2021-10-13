<template>
  <div id="trend" style="width:625px;height: 380px"></div>
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
      TrendChart: null
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
    this.TrendChart = Echarts.init(document.getElementById('trend'), 'dark')

    let that = this
    setInterval(() => {
      that.TrendChart.clear()
      that.loadChart()
    }, 10000)
  },
  methods: {
    loadChart() {
      let xData = this.dataSource.map(item => item.year)
      let Data1 = this.dataSource.map(item => Number(item.qshtpf).toFixed(1))
      let Data2 = this.dataSource.map(item => item.dllytpf)
      let Data3 = this.dataSource.map(item => item.qshydl)

      let option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xData,
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', //更改坐标轴文字颜色
              fontSize: 16 //更改坐标轴文字大小
            },
            formatter: function(value, index) {
              if (value == 2021 || value == 2025 || value == 2027 || value == 2030) {
                return value
              } else {
                return ''
              }
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            label: {
              backgroundColor: '#6a7985'
            },
            lineStyle: {
              width: 3
            }
          }
        },
        color: ['#fec74d', '#a0e8a3', '#00f5fe'],
        yAxis: [
          {
            name: '',
            axisLabel: {
              margin: 10,
              formatter: '{value} {icon|}',
              rich: {
                icon: {
                  width: 5,
                  height: 5,
                  lineHeight: 10,
                  align: 'right',
                  verticalAlign: 'middle',
                  backgroundColor: '#fff',
                  borderRadius: 5
                }
              },
              textStyle: {
                color: '#fff', //更改坐标轴文字颜色
                fontSize: 16 //更改坐标轴文字大小
              }
            },
            min: 0,
            max: 5,
            type: 'value',
            nameTextStyle: {
              color: '#aaa',
              textStyle: {
                fontStyle: 'oblique',
                fontWeight: 500,
                fontSize: 14
              }
            },
            splitLine: {
              lineStyle: {
                color: '#415666'
              }
            }
          },
          {
            name: '',
            type: 'value',
            scale: true,
            splitNumber: 8,
            min: 4000,
            max: 7500,
            axisLabel: {
              margin: 10,
              formatter: '{icon|} {value}',
              rich: {
                icon: {
                  width: 5,
                  height: 5,
                  lineHeight: 30,
                  align: 'left',
                  verticalAlign: 'middle',
                  backgroundColor: '#fff',
                  borderRadius: 5
                }
              },
              textStyle: {
                color: '#fff', //更改坐标轴文字颜色
                fontSize: 13 //更改坐标轴文字大小
              }
            },
            nameTextStyle: {
              color: '#aaa'
            },

            splitLine: {
              lineStyle: {
                color: '#415666'
              }
            }
          }
        ],
        legend: {
          data: [
            '浙江全社会碳排放(亿吨)',
            '浙江电力领域碳排放(亿吨)',
            '浙江全社会用电量(亿千瓦时)'
          ],
          icon: 'rect',
          itemWidth: 30,
          itemHeight: 2,
          right: '60px',
          top: 0,
          itemGap: 8,
          orient: 'vertical',
          textStyle: {
            fontSize: 18
          }
        },
        grid: {
          left: '0%',
          right: '10%',
          bottom: '3%',
          top: '26%',
          containLabel: true
        },
        series: [
          {
            name: '浙江全社会碳排放(亿吨)',
            data: Data1,
            type: 'line',
            lineStyle: {
              width: 4
            },
            markPoint: {
              symbol: 'image://' + require('../../../assets/imgs/technologyicon-dot.png'),
              symbolSize: 10,
              data: [
                { type: 'max', name: '碳达峰' }
                // {type: 'min', name: '最小值'}
              ],
              label: {
                show: true,
                position: 'bottom',
                offset: [0, 10],
                formatter: '全社会碳达峰 {active|{c}} 亿吨★',
                fontSize: 18,
                rich: {
                  active: {
                    color: '#fec74d',
                    fontSize: 18
                  }
                }
              }
            },
            areaStyle: {
              opacity: 0.2
            },
            smooth: true
          },
          {
            name: '浙江电力领域碳排放(亿吨)',
            data: Data2,
            type: 'line',
            lineStyle: {
              width: 4
            },
            areaStyle: {
              opacity: 0.2
            },
            markPoint: {
              symbol: 'image://' + require('../../../assets/imgs/technologyicon-dot-2.png'),
              symbolSize: 10,
              data: [
                { type: 'max', name: '碳达峰' }
                // {type: 'min', name: '最小值'}
              ],
              label: {
                show: true,
                position: 'bottom',
                offset: [0, 10],
                formatter: '电力领域碳达峰 {active|{c}} 亿吨★',
                fontSize: 18,
                rich: {
                  active: {
                    color: '#a0e8a3',
                    fontSize: 18
                  }
                }
              }
            },
            smooth: true
          },
          {
            name: '浙江全社会用电量(亿千瓦时)',
            data: Data3,
            type: 'line',
            lineStyle: {
              width: 4
            },
            yAxisIndex: 1,
            areaStyle: {
              opacity: 0.2
            },
            smooth: true
          }
        ]
      }
      this.TrendChart.setOption(option, true)
    }
  }
}
</script>
