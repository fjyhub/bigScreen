<!--  -->
<template>
  <div class="gao">
    <div class="flex" style="margin-bottom: 20px">
      <img class="pl18 pr10" src="../../../assets/imgs/1028.png" alt="" />
      <div class="gao-bottom-title title-color" style="font-size: 34px;color: #00C0FF">
        四高能力
      </div>
    </div>
    <div class="gao-top">
      <div class="flex aline ml20" style="margin-bottom: 24px">
        <div style="width: 5px;height: 26px;background: #00C0FF" class="mr16"></div>
        <div class="gao-bottom-title" style="font-size: 32px;color: #00C0FF">高比例外来电</div>
      </div>
      <div class="dianli between pl26" style="margin-bottom: 20px">
        <div class="dianliChart relative">
          <div id="dianliChart" style="width: 136px;height: 136px"></div>
          <img src="../../../assets/imgs/dli.png" alt="" />
          <span>电力</span>
        </div>
        <div style="width: 400px">
          <div class="fz40 flex mb12" style="color: #02FEFE">
            <div style="width: 135px">{{ provinceGetData.extElePowerRate }}%</div>
            <div>{{ provinceGetData.extElePower }} 万 kW</div>
          </div>
          <div class="cuxian"></div>
          <div class="flex fz24 mb12">
            <div style="width: 135px">{{ provinceGetData.extElePowerName1 }}</div>
            <div>{{ provinceGetData.extElePowerPower1 }} 亿kWh</div>
          </div>
          <div class="flex fz24">
            <div style="width: 135px">{{ provinceGetData.extElePowerName2 }}</div>
            <div>{{ provinceGetData.extElePowerPower2 }} 亿kWh</div>
          </div>
        </div>
      </div>

      <div class="dianliang between pl26">
        <div class="dianliangChart relative">
          <div id="dianliangChart" style="width: 136px;height: 136px"></div>
          <img src="../../../assets/imgs/dliang.png" alt="" />
          <span>电量</span>
        </div>
        <div style="width: 400px">
          <div class="fz40 flex mb12" style="color: #02FEFE">
            <div style="width: 135px">{{ provinceGetData.extEleQuantityRate }}%</div>
            <div>{{ provinceGetData.extEleQuantity }} 万 kW</div>
          </div>
          <div class="cuxian"></div>
          <div class="flex fz24 mb12">
            <div style="width: 135px">{{ provinceGetData.extEleQuantityName1 }}</div>
            <div style="width: 135px">{{ provinceGetData.extEleQuantityPower1 }} 亿kWh</div>
          </div>
          <div class="flex fz24">
            <div style="width: 135px">{{ provinceGetData.extEleQuantityName2 }}</div>
            <div>{{ provinceGetData.extEleQuantityPower2 }} 亿kWh</div>
          </div>
        </div>
      </div>
    </div>
    <div class="gao-bottom">
      <div class="flex aline ml20" style="margin-bottom: 20px">
        <div style="width: 5px;height: 26px;background: #00C0FF" class="mr16"></div>
        <div class="gao-bottom-title" style="font-size: 32px;color: #00C0FF">高比例新能源</div>
      </div>
      <div class="flex pl24 pb10" style="border-bottom: 1px solid #58D8E3">
        <div style="width: 230px" class="fz28 pl24">新能源装机</div>
        <div style="width: 180px" class="fz32 linear-blue">
          {{ provinceGetData.newEnergyInstalledRate }} %
        </div>
        <div class="fz32 linear-blue">{{ provinceGetData.newEnergyInstalledAmount }}万 KW</div>
      </div>
      <div class="flex pl24 mt10">
        <div style="width: 230px" class="fz28 pl24">新能源电量</div>
        <div style="width: 180px" class="fz32 linear-blue">
          {{ provinceGetData.newEnergyPowerRate }} %
        </div>
        <div class="fz32 linear-blue">{{ provinceGetData.newEnergyPower }}亿 KWh</div>
      </div>
      <div style="margin-left: 48px">
        <div class="bottom-items between" v-for="(item, i) in bottomList" :key="i">
          <img :src="item.img" alt="" />
          <div class="pl20">
            <div
              class="between align-center fz32 mb8 pb8"
              style="width: 469px;border-bottom:1px solid #58D8E3"
            >
              <span>装机</span>
              <span class="pl30 linear-blue">{{ provinceGetData[item.firstRate] }} %</span>
              <span class="linear-blue">{{ provinceGetData[item.firstValue] }}亿 KWh</span>
            </div>
            <div class="between align-center fz32" style="width: 469px;">
              <span>电量</span>
              <span class="pl30 linear-blue">{{ provinceGetData[item.sencondRate] }} %</span>
              <span class="linear-blue">{{ provinceGetData[item.sencondValue] }}亿 KWh</span>
            </div>
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
      dianliChart: null,
      dianliangChart: null,
      bottomList: [
        {
          img: require('@/assets/imgs/fdzj.png'),
          firstRate: 'windInstalleRate',
          firstValue: 'windInstalledAmount',
          sencondRate: 'windPowerRate',
          sencondValue: 'windPower',
          firstUnit: '万KW',
          sencondUnit: '亿kWh'
        },
        {
          img: require('@/assets/imgs/gfzj.png'),
          firstRate: 'photovoltaicInstalledRate',
          firstValue: 'photovoltaicInstalledAmount',
          sencondRate: 'photovoltaicPowerRate',
          sencondValue: 'photovoltaicPower',
          firstUnit: '万KW',
          sencondUnit: '亿kWh'
        }
      ]
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.dianliChart = Echarts.init(document.getElementById('dianliChart'), 'dark')
    this.loadDianliChart()
    this.dianliangChart = Echarts.init(document.getElementById('dianliangChart'), 'dark')
    this.loadDianliangChart()
  },

  methods: {
    loadDianliChart() {
      const handred = 100
      let point = this.provinceGetData.extElePowerRate

      const option = {
        title: {
          // text: point + '%',
          // x: 'center',
          // y: 'center',
          // textStyle: {
          //     fontWeight: 'normal',
          //     color: '#29EEF3',
          //     fontSize: '75'
          // }
        },
        tooltip: {
          formatter: function(params) {
            return params.name + '：' + params.percent + ' %'
          }
        },
        series: [
          {
            name: 'circle',
            type: 'pie',
            clockWise: true,
            radius: ['80%', '100%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: point,
                name: '占比',
                itemStyle: {
                  normal: {
                    color: {
                      // 颜色渐变
                      colorStops: [
                        {
                          offset: 0,
                          color: '#64fefe' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#64fefe' // 100% 处的颜色1
                        }
                      ]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: '剩余',
                value: handred - point,
                itemStyle: {
                  normal: {
                    color: '#42a7b3'
                  }
                }
              }
            ]
          }
        ]
      }
      this.dianliChart.setOption(option)
    },
    loadDianliangChart() {
      const handred = 100
      let point = this.provinceGetData.extEleQuantityRate

      const option = {
        title: {
          // text: point + '%',
          // x: 'center',
          // y: 'center',
          // textStyle: {
          //     fontWeight: 'normal',
          //     color: '#29EEF3',
          //     fontSize: '75'
          // }
        },
        tooltip: {
          formatter: function(params) {
            return params.name + '：' + params.percent + ' %'
          }
        },
        series: [
          {
            name: 'circle',
            type: 'pie',
            clockWise: true,
            radius: ['80%', '100%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: point,
                name: '占比',
                itemStyle: {
                  normal: {
                    color: {
                      // 颜色渐变
                      colorStops: [
                        {
                          offset: 0,
                          color: '#64fefe' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#64fefe' // 100% 处的颜色1
                        }
                      ]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: '剩余',
                value: handred - point,
                itemStyle: {
                  normal: {
                    color: '#42a7b3'
                  }
                }
              }
            ]
          }
        ]
      }
      this.dianliangChart.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
.gao {
  padding: 40px 10px;
  .gao-wailaidian {
    width: 316px;
    height: 316px;
    #wldzb {
      top: 92px;
      left: 92px;
      z-index: 10;
    }
    img {
      top: 0px;
      left: 0px;
      width: 316px;
      height: 316px;
    }
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.gao-wailaidian-border {
  // transform: rotate(360deg);
  // animation: rotation 20s linear infinite;
}

.gao-top {
  height: 350px;
  margin-bottom: 20px;
}

.top-right {
  .wai-gou {
    width: 307px;
    height: 138px;
    background: url('../../../assets/imgs/waigoudianliang.png');
  }
  .quan-shehui {
    width: 307px;
    height: 138px;
    background: url('../../../assets/imgs/quanshehuiyondian.png');
  }
}

.wai-gou-name {
  width: 72px;
  height: 30px;
  top: 93px;
  left: 24px;
}
.quan-shehui-name {
  width: 57px;
  height: 55px;
  top: 74px;
  left: 32px;
  // letter-spacing: 4px;
  line-height: 22px;
}
.dian-num {
  width: 120px;
  height: 40px;
  top: 42px;
  left: 110px;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  // background: pink;
}
.dian-unit {
  top: 65px;
  left: 227px;
  font-size: 15px;
}

.wai-gou-num {
  background: linear-gradient(to top, #02fefe, #b7fdff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.shehui-num {
  background: linear-gradient(to top, #ffff00, #b7fdff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.gao-bottom {
  .gao-bottom-title {
    background: linear-gradient(to top, #69daff, #b8f6ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
}

.linear-blue {
  background: linear-gradient(to top, #00ebff, #e4fff6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.linear-green {
  background: linear-gradient(to top, #aaffda, #aaffda);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.title-color {
  background: linear-gradient(to top, #00c0ff, #b7fdff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.bottom-items {
  width: 540px;
  height: 132px;
  padding: 26px 0;
  &:not(:last-child) {
    // border-bottom: 1px solid #59d7e5;
  }
  img {
    width: 79px;
    height: 79px;
  }
}

.dianliChart {
  img {
    position: absolute;
    width: 41px;
    height: 41px;
    top: 30px;
    left: 45px;
  }
  span {
    position: absolute;
    font-size: 26px;
    top: 80px;
    left: 40px;
  }
}

.dianliangChart {
  img {
    position: absolute;
    width: 41px;
    height: 41px;
    top: 30px;
    left: 45px;
  }
  span {
    position: absolute;
    font-size: 26px;
    top: 80px;
    left: 40px;
  }
}
.cuxian {
  width: 369px;
  height: 3px;
  opacity: 1;
  background: linear-gradient(
    -90deg,
    rgba(25, 254, 254, 0.5) 0%,
    #19fefe 50%,
    rgba(7, 176, 182, 0.5) 100%
  );
  margin-bottom: 10px;
}
</style>
