<!--  -->
<template>
  <div class="gaoziyu">
    <div class="card-title mb20">
      <span><img src="../../../assets/imgs/1028.png" alt="" /></span>
      高自愈
    </div>
    <div class="mb30" style="margin-bottom: 40px">
      <div class="fz34 fw600 ta-center chart-title mb20" style="color: #00ECF2;margin-bottom: 40px">
        灾后供电恢复时间
      </div>
      <div class="between align-center">
        <div class="chart-box relative">
          <div id="chart1" style="width: 134px; height: 134px"></div>
          <x color="#51acff" :width="160" class="absolute" style="top: -14px;left: -14px"></x>
          <img class="absolute" src="../../../assets/imgs/121.png" alt="" />
        </div>
        <div class="">
          <div style="font-size: 24px;padding-right: 30px" class="between">
            <div class="juzhon">13级及以下台风</div>
            <span style="color: #51fff6;font-size: 32px">
              {{ `<${provinceGetData.typhoonUnder13RecoveryTime}小时` }}
            </span>
          </div>
          <div class="line"></div>
          <div style="font-size: 24px;padding-right: 30px" class="between">
            <div class="juzhon">14级至15级强台风</div>
            <span style="color: #51fff6;font-size: 32px">
              {{ `<${provinceGetData.typhoon14RecoveryTime}小时` }}
            </span>
          </div>
          <div class="line"></div>
          <div style="font-size: 24px;padding-right: 30px" class="between">
            <div class="juzhon">16级及以上超强台风</div>
            <span style="color: #51fff6;font-size: 32px">
              {{ `<${provinceGetData.typhoonAbove16RecoveryTime}小时` }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="mb30" style="margin-bottom: 40px">
      <div class="fz34 fw600 ta-center chart-title mb20" style="color: #00ECF2;margin-bottom: 40px">
        配网自愈占比（核心区）
      </div>

      <div class="between align-center">
        <div class="chart-box relative">
          <div id="chart2" style="width: 134px; height: 134px"></div>
          <x color="#51acff" :width="160" class="absolute" style="top: -14px;left: -14px"></x>
          <img class="absolute" src="../../../assets/imgs/122.png" alt="" />
        </div>
        <div class="">
          <div style="font-size: 36px; color: #51fff6;padding-right: 0px; text-align: center">
            <span>{{ Math.round(provinceGetData.selfHealingRate) }}%</span>
          </div>
          <div class="line"></div>
          <div class="fz24 ta-center" style="width: 435px;line-height: 35px">
            三遥有效覆盖线路自愈功能投入占比
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div
        class="fz34 fw600 ta-center chart-title mb20"
        style="color: #00ECF2; margin-bottom: 40px"
      >
        可抵御大电源损失占比
      </div>
      <div class="between align-center">
        <div class="chart-box relative">
          <div id="chart3" style="width: 134px; height: 134px"></div>
          <x color="#51acff" :width="160" class="absolute" style="top: -14px;left: -14px"></x>
          <img class="absolute" src="../../../assets/imgs/343.png" alt="" />
        </div>
        <div class="">
          <div style="font-size:36px; color: #51fff6;padding-right: 0px; text-align: center">
            <span>{{ provinceGetData.resistBigPowerLossRate }}%</span>
          </div>
          <div class="line"></div>
          <div class="fz24 ta-center" style="width: 435px;line-height: 35px">
            可承受大电源功率损失占全社会最大负荷的比重
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
      chart2: null,
      chart3: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.chart1 = Echarts.init(document.getElementById('chart1'), 'dark')
    this.loadChart1()
    this.chart2 = Echarts.init(document.getElementById('chart2'), 'dark')
    this.loadChart2()
    this.chart3 = Echarts.init(document.getElementById('chart3'), 'dark')
    this.loadChart3()
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
    },
    loadChart3() {
      var data = []
      var num = (this.provinceGetData.resistBigPowerLossRate / 100) * 40
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
      this.chart3.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
.gaoziyu {
  // padding: 90px 44px;
  height: 860px;
}
.chart-box {
  img {
    width: 60px;
    // height: 127px;
    top: 40px;
    left: 40px;
  }
}
.line {
  width: 460px;
  height: 2px;
  background: #009cff;
  margin-top: 10px;
  margin-bottom: 10px;
}
.chart-title {
  // margin: 20px 0;
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
.juzhon {
  width: 250px;
  text-align: center;
}
</style>
