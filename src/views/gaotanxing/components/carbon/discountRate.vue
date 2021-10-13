<!--  -->
<template>
  <div class="external_elec">
    <div class="sub_title">{{echartData.title}}</div>
    <div class="inner_content clearfix">
      <div class="echart_pie">
        <div id="echarts_dom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import zhejiang from '../../../../assets/carbon/zhejiang.png'
import others from '../../../../assets/carbon/others.png'
import * as Echarts from 'echarts'
export default {
  data() {
    return {
      xData: ['浙江', '韩国', '德国'],
      yData: [3.7, 3.8, 3.5],
      myChart: null
    }
  },
  props: {
    echartData: {}
  },
  watch: {
    //观察option的变化
    echartData: {
      handler(newVal, oldVal) {
        console.log('9999')
        this.initEcharts()
      },
      deep: true //对象内部属性的监听，关键。
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.xData = this.echartData.xData
    this.yData = this.echartData.yData
    this.initEcharts()
  },

  methods: {
    initEcharts() {
      this.myChart = Echarts.init(document.getElementById('echarts_dom'))
      // 指定图表的配置项和数据
      var option = {
        grid: {
          left: '0',
          top: 60,
          containLabel: true,
          width: '80%',
          height: '60%'
        },
        xAxis: {
          type: 'category',
          data: this.xData,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#9f9f9f'
            }
          },
          axisLabel: {
            show: true,
            color: 'rgba(255, 255, 255, .8)',
            fontSize: 18,
            fontWeight: 'bold',
            margin: 6
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)',
              type: 'dotted'
            }
          },
          splitNumber: 5,
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            // formatter: "{value} %",
            textStyle: {
              color: 'rgba(255, 255, 255, .8)',
              fontSize: 18,
              fontWeight: 'bold'
            }
          }
        },
        series: [
          {
            data: this.yData,
            type: 'bar',
            barWidth: 50,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorlist = [
                    new Echarts.graphic.LinearGradient(
                      0,
                      1,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: '#FF8A2A' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#FDE14B' // 100% 处的颜色
                        }
                      ],
                      false
                    ),
                    new Echarts.graphic.LinearGradient(
                      0,
                      1,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: '#3295B9' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#09F3FE' // 100% 处的颜色
                        }
                      ],
                      false
                    ),
                    new Echarts.graphic.LinearGradient(
                      0,
                      1,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: '#3295B9' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#09F3FE' // 100% 处的颜色
                        }
                      ],
                      false
                    )
                  ]
                  return colorlist[params.dataIndex]
                }
              }
            },
            markPoint: {
              data: [
                {
                  name: this.xData[0],
                  value: this.yData[0],
                  xAxis: this.xData[0],
                  yAxis: this.yData[0],
                  itemStyle: {
                    color: '#FDE14B',
                  }
                  // symbol: `image://${zhejiang}`,
                  // symbolSize: [50, 35],
                  // symbolOffset: [0, -100]
                },
                {
                  name: this.xData[1],
                  value: this.yData[1],
                  xAxis: this.xData[1],
                  yAxis: this.yData[1],
                  itemStyle: {
                    color: '#09F3FE',
                  }
                  // symbol: `image://${others}`,
                  // symbolSize: [50, 35],
                  // symbolOffset: [100, 100]
                },
                {
                  name: this.xData[2],
                  value: this.yData[2],
                  xAxis: this.xData[2],
                  yAxis: this.yData[2],
                  itemStyle: {
                    color: '#09F3FE',
                  },
                  // symbol: `image://${others}`,
                  // symbolSize: [50, 35],
                  // symbolOffset: [0, '-50%']
                }
              ],
              symbol: 'pin',
              symbolSize: [70, 65],
              label: {
                color: '#000',
                fontSize: 18,
                fontWeight: 'bold'
              }
              // symbolOffset: [0, -100]
            }
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    }
  },
  beforeDestroy() {
    this.myChart.clear() // 清空画布
    this.myChart.dispose() // 释放实例
  }
}
</script>
<style lang="less" scoped>
.external_elec {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .sub_title {
    height: 70px;
    line-height: 70px;
    color: #38e6fc;
    font-size: 24px;
    font-weight: bold;
    padding-left: 30px;
    background: url('../../../../assets/carbon/sub_title_bg.png') left center no-repeat;
    background-size: 5px 34px;
  }
  .inner_content {
    height: 100%;
    margin-top: -70px;
    padding-top: 70px;
  }
  .echart_pie {
    width: 50%;
    height: 100%;
    float: left;
  }
  #echarts_dom {
    width: 580px;
    height: 280px;
  }
}
</style>
