<!--  -->
<template>
  <div class="gaoziyu">
    <div class="card-title">
      <span><img src="../../../assets/imgs/1028.png" alt="" /></span>
      四高能力
    </div>
    <!-- <div class="between align-center four-height-item">
      <div class="chart-box relative">
        <div class="box">
          <div class="box2"></div>
        </div>
        <img class="absolute" src="../../../assets/imgs/121.png" alt="" />
      </div>
      <div class="">
        <div style="font-size: 90px; color: #FFF717;padding-right: 30px">
          ＜
          <span>{{ 72 }}</span>
        </div>
        <div class="line"></div>
        <div class="fz46 ta-center" style="width: 235px;line-height: 60px">灾后供电的 恢复时间</div>
      </div>
    </div> -->
    <!-- <div class="between align-center">
      <div class="chart-box relative">
        <div class="box" style="width: 276px; height: 276px;">
          <div class="box2"></div>
        </div>
        <img class="absolute" src="../../../assets/imgs/122.png" alt="" />
      </div>
      <div class="">
        <div style="font-size: 90px; color: #5BDEFF;padding-right: 0px;">
          ＝
          <span>{{ 77 }}%</span>
        </div>
        <div class="line"></div>
        <div class="fz46 ta-center" style="width: 235px;line-height: 60px">
          配电自动化 自愈占比
        </div>
      </div>
    </div> -->
    <!-- <div class="between align-center">
      <div class="chart-box relative">
        <div class="box" style="width: 276px; height: 276px;">
          <div class="box2"></div>
        </div>
        <img class="absolute" src="../../../assets/imgs/122.png" alt="" />
      </div>
      <div class="">
        <div style="font-size: 90px; color: #5BDEFF;padding-right: 0px;">
          ＝
          <span>{{ 77 }}%</span>
        </div>
        <div class="line"></div>
        <div class="fz46 ta-center" style="width: 235px;line-height: 60px">
          配电自动化 自愈占比
        </div>
      </div>
    </div> -->
    <div class="four-height-item">
      <div class="item-title">
        <p>灾后供电后恢复时间</p>
      </div>
      <div class="item-content">
        <div class="box relative" style="border:4px solid #B3AD11;">
          <div id="chart1"></div>
          <img class="absolute" src="/images/122.png" alt="" />
        </div>
        <div class="desc">
          <p class="top-desc linear-orange">
            ＜
            <span>{{ provinceGetData.disasterPowerRecoveryTime }}</span>
          </p>
          <p class="sub-desc">1级预警自然灾害事件后恢供电时间</p>
          <div class="line" style="opacity: 0.54;background: #b3ad11;"></div>
        </div>
      </div>
    </div>
    <div class="four-height-item">
      <div class="item-title">
        <p>配网自愈占比（核心区）</p>
      </div>
      <div class="item-content">
        <div class="box relative" style="border:4px solid #1175B3;">
          <div id="chart2"></div>
          <img class="absolute" src="/images/122.png" alt="" />
        </div>
        <div class="desc">
          <p class="top-desc linear-blue">
            ＝
            <span>{{ provinceGetData.selfHealingRate }}%</span>
          </p>
          <p class="sub-desc">三遥有效覆盖线路自愈功能投入占比</p>
          <div class="line" style="opacity: 0.54;background: #1175b3;"></div>
        </div>
      </div>
    </div>
    <div class="four-height-item">
      <div class="item-title">
        <p>可抵御大电源损失占比</p>
      </div>
      <div class="item-content">
        <div class="box relative" style="border:4px solid #1f947a;">
          <div id="chart3"></div>
          <img
            class="absolute"
            src="/images/news.png"
            alt=""
            style="    width: 80px;
    top: 60px;
    left: 56px;"
          />
        </div>
        <div class="desc">
          <p class="top-desc linear-green">
            ＝
            <span>{{ provinceGetData.resistBigPowerLossRate }}%</span>
          </p>
          <p class="sub-desc">可承受大电源功率损失占全社会最大负荷的比重</p>
          <div class="line" style="opacity: 0.54;background: #00ff84;"></div>
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
            color: ['#feff49', '#dfe57b']
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['70%', '90%'],
            center: ['48%', '48%'],
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
                borderColor: '#00111F'
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
      var num = (parseInt(this.provinceGetData.selfHealingRate) / 100) * 40
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
            radius: ['70%', '90%'],
            center: ['48%', '48%'],
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
                borderColor: '#00111F'
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
      var num = (parseInt(this.provinceGetData.resistBigPowerLossRate) / 100) * 40
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
            color: ['rgba(1,29,43,1)', 'rgba(0,255,132,1)']
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['70%', '90%'],
            center: ['48%', '48%'],
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
                borderColor: '#00111F'
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
  height: 920px;
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
.linear-blue {
  background: linear-gradient(to top, #009cff, #28d9ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.linear-green {
  background: linear-gradient(to top, #04b37f, #00ffd8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.linear-orange {
  background: linear-gradient(to top, #e57221, #ffca2e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
// .chart-box {
//   img {
//     width: 127px;
//     // height: 127px;
//     top: 85px;
//     left: 75px;
//     z-index: 9;
//   }
// }
// .line {
//   width: 260px;
//   height: 2px;
//   background: #b3ad11;
//   margin-top: 10px;
//   margin-bottom: 10px;
// }
.four-height-item {
  width: 650px;
  height: 265px;
  // border: 1px solid red;
  box-sizing: border-box;
  // padding: 0 50px;
  .item-title {
    width: 100%;
    height: 40px;
    // border: 1px solid pink;
    position: relative;
    text-align: left;
    text-indent: 0.5em;
    background: linear-gradient(0deg, #00c0ff 0%, #b7fdff 100%);
    background-clip: text;
    font-size: 32px;
    font-family: Source Han Sans CN, Source Han Sans CN-Medium;
    font-weight: 500;
    text-align: left;
    color: transparent;
    letter-spacing: 2px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 3px;
      width: 5px;
      height: 30px;
      background: #00c0ff;
    }
  }
  .item-content {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0 50px;
    .box {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      box-sizing: border-box;
      float: left;
      img {
        width: 100px;
        top: 48px;
        left: 48px;
      }
    }
    .desc {
      float: right;
      position: relative;
      width: 316px;
      height: 200px;
      // border: 1px solid red;
      box-sizing: border-box;
      text-align: center;
      .top-desc {
        font-size: 48px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        letter-spacing: 4px;
        margin-top: 40px;
      }
      .sub-desc {
        font-size: 24px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 500;
        text-align: center;
        color: #ffffff;
        letter-spacing: 1px;
        text-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.22);
        padding: 25px 20px;
        line-height: 30px;
      }
      .line {
        width: 100%;
        height: 2px;
        opacity: 0.54;
        background: #1175b3;
        position: absolute;
        top: 50%;
        margin-top: -1px;
      }
    }
  }
}

#chart1,
#chart2,
#chart3 {
  width: 200px;
  height: 200px;
}
</style>
