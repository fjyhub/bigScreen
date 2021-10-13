<!--  -->
<template>
  <div class="gaoziyu direction-column">
    <div class="card-title">
      <span><img src="../../../assets/imgs/1028.png" alt="" /></span>
      四高能力
    </div>
    <div class="">
      <div class="fz34 fw600 ta-center chart-title" style="color: #00ECF2">
        综合线损率
      </div>
      <div class="between align-center">
        <div class="chart-box relative">
          <div id="chart1" style="width: 200px; height: 200px"></div>
          <img class="absolute" src="../../../assets/imgs/121.png" alt="" />
        </div>
        <div class="">
          <div style="font-size: 30px; color: #FFF717;padding-right: 30px">
            ＜
            <span>{{ provinceGetData.disasterPowerRecoveryTime }}</span>
          </div>
          <div class="line"></div>
          <div class="fz34 ta-center" style="width: 235px;line-height: 60px">
            灾后供电的 恢复时间
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="fz34 fw600 ta-center chart-title" style="color: #00ECF2">
        综合线损率
      </div>

      <div class="between align-center">
        <div class="chart-box relative">
          <div id="chart2" style="width: 200px; height: 200px;"></div>
          <img class="absolute" src="../../../assets/imgs/122.png" alt="" />
        </div>
        <div class="">
          <div style="font-size: 30px; color: #5BDEFF;padding-right: 0px;">
            ＝
            <span>{{ Math.round(provinceGetData.selfHealingRate) }}%</span>
          </div>
          <div class="line"></div>
          <div class="fz34 ta-center" style="width: 235px;line-height: 60px">
            配电自动化 自愈占比
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="fz34 fw600 ta-center chart-title" style="color: #00ECF2">
        综合线损率
      </div>
      <div class="between align-center">
        <div class="chart-box relative">
          <div id="chart2" style="width: 200px; height: 200px;"></div>
          <img class="absolute" src="../../../assets/imgs/122.png" alt="" />
        </div>
        <div class="">
          <div style="font-size:30px; color: #5BDEFF;padding-right: 0px;">
            ＝
            <span>{{ Math.round(provinceGetData.selfHealingRate) }}%</span>
          </div>
          <div class="line"></div>
          <div class="fz34 ta-center" style="width: 235px;line-height: 60px">
            配电自动化 自愈占比
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Echarts from 'echarts'
export default {
  props: {
    provinceGetData: {
      require: true,
      type: Object
    }
  },
  data() {
    return {
      chart1: null,
      chart2: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.chart1 = Echarts.init(document.getElementById('chart1'), 'dark')
    this.loadChart1()
    this.chart2 = Echarts.init(document.getElementById('chart2'), 'dark')
    this.loadChart2()
  },
  methods: {
    loadChart1() {
      var data = []
      var num = (61.34 / 100) * 40
      for (var i = 0; i <= 40; i++) {
        if (i <= num) {
          data.push({
            value: [0, i],
            name: 'real'
          })
        } else {
          data.push({
            value: [0, i],
            name: 'unreal',
            visualMap: false
          })
        }
      }

      const option = {
        emphasis: {
          show: false
        },
        visualMap: {
          max: 40,
          show: false,
          hoverLink: false,
          inRange: {
            color: ['#feff49', '#dfe57b']
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['80%', '100%'],
            center: ['50%', '50%'],
            clockwise: true,
            data: data,
            color: 'transparent',
            hoverAnimation: false,
            legendHoverLink: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 5,
                borderColor: '#051F54'
              },
              emphasis: {
                show: false
              }
            }
          }
        ]
      }
      this.chart1.setOption(option)
    },
    loadChart2() {
      var data = []
      var num = (this.provinceGetData.selfHealingRate / 100) * 40
      for (var i = 0; i <= 40; i++) {
        if (i <= num) {
          data.push({
            value: [0, i],
            name: 'real'
          })
        } else {
          data.push({
            value: [0, i],
            name: 'unreal',
            visualMap: false
          })
        }
      }

      const option = {
        emphasis: {
          show: false
        },
        visualMap: {
          max: 40,
          show: false,
          hoverLink: false,
          inRange: {
            color: ['#169afe', '#6bdcfc']
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['80%', '100%'],
            center: ['50%', '50%'],
            clockwise: true,
            data: data,
            color: 'transparent',
            hoverAnimation: false,
            legendHoverLink: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 5,
                borderColor: '#051F54'
              },
              emphasis: {
                show: false
              }
            }
          }
        ]
      }
      this.chart2.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
.gaoziyu {
  // padding: 90px 44px;
  height: 920px;
}
.chart-box {
  img {
    width: 100px;
    // height: 127px;
    top: 50px;
    left: 50px;
  }
}
.line {
  width: 260px;
  height: 2px;
  background: #b3ad11;
  margin-top: 10px;
  margin-bottom: 10px;
}
.chart-title {
  margin: 20px 0;
  position: relative;
  text-align: left;
  text-indent: 1em;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #00c0ff),
    color-stop(1, #b7fdff)
  );
  color: transparent !important;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -ms-background-clip: text;
  &::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 3px;
    width: 5px;
    height: 30px;
    background: #00c0ff;
  }
}
.card-title {
  font-size: 34px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 8px;
  background: linear-gradient(to top, #00c0ff, #00c0ff);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #00c0ff),
    color-stop(1, #b7fdff)
  );
  color: transparent;
  background-clip: text;
  span {
    letter-spacing: 1px !important;
  }
}
</style>
