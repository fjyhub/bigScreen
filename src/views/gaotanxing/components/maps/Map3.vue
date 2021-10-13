<template>
  <div class="map">
    <div id="map"></div>
    <div class="load-chart-container">
      <div class="chart-title"><h2>经济负载设备占比排名</h2></div>
      <div class="load-chart" ref="loadChart"></div>
    </div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as apis from '@/service/gaotanxing'
import * as maptalks from 'maptalks'
import { map3Data } from './../../../../data/data.js'
import axios from 'axios'
import * as Echarts from 'echarts'
import { getRangeHeight } from './../../../../utils/tool'

let map

let loadChart

export default {
  props: {
    // index: {
    //   type: Number,
    //   required: true
    // }
    cityGetData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      map: null
    }
  },
  created() {},
  mounted() {
    // console.log(this.mapGetData)
    this.initMap()
    this.renderLabelMarkers()
    loadChart = Echarts.init(this.$refs.loadChart)
    this.renderBarMarkers()
    this.loadChart()

    //
  },
  watch: {
    // cityGetData: {
    //   handler() {
    //     console.log('aaa')
    //     this.renderBarMarkers()
    //     this.loadChart()
    //   }
    // }
  },
  methods: {
    initMap() {
      map = new maptalks.Map('map', {
        center: [121, 29],
        zoom: 8,
        pitch: 10,
        maxPitch: 60,
        draggable: true, //disable drag
        dragPan: true, //disable drag panning
        dragRotate: true, //disable drag rotation
        dragPitch: true, //disable drag pitch
        scrollWheelZoom: true, //disable wheel zoom
        touchZoom: false, //disable touchzoom
        doubleClickZoom: false, //disable doubleclick zoom
        minZoom: 7, // set map's min zoom to 14
        maxZoom: 9 // set map's max zoom to 14
      })

      var imageLayer = new maptalks.ImageLayer('images', [
        {
          url: './../images/map_layer3.png',
          extent: [118, 27, 124, 31],
          opacity: 1
        }
      ])
      map.addLayer(imageLayer)

      new maptalks.VectorLayer('layer').addTo(map)

      map.on('click', function(e) {
        console.log(e.coordinate)
      })
    },
    renderLabelMarkers() {
      // map3Data.labels.forEach(element => {
      //   new maptalks.Marker(element.point, {
      //     properties: {
      //       name: element.name
      //     },
      //     symbol: [
      //       {
      //         markerFile: element.unique ? './images/label-icon.png' : './images/label-icon.png',
      //         markerWidth: element.unique ? 86 : 86,
      //         markerHeight: element.unique ? 88 : 97,
      //         markerDx: element.unique ? -2 : 0
      //       },
      //       {
      //         textFaceName: 'sans-serif',
      //         textName: '{name}',
      //         textSize: 28,
      //         textFill: element.unique ? '#fff' : '#fff',
      //         textDy: element.unique ? -70 : -77,
      //         textWeight: 'bold',
      //         textHaloFill: '#000',
      //         textHaloRadius: element.unique ? 1 : 3,
      //         textHorizontalAlignment: 'middle' //left | middle | right | auto
      //       }
      //     ]
      //   }).addTo(map.getLayer('layer'))
      // })

      map3Data.labels.forEach(element => {
        let classStr = element.unique ? 'y-marker-label-active' : 'y-marker-label'
        let marker = new maptalks.ui.UIMarker(element.point, {
          draggable: false,
          single: false,
          dx: 40,
          content: `
          <div class="${classStr}">
            <div class="text-label"><p>${element.name}</p></div>
            <div class="triangle-up"></div>
            <div class="ring">
                  <div class="dot wave2" style="z-index: 5;"></div>
                  <div class="dot wave1 dot_left" style="z-index: 8;"></div>
                  <div class="dot wave0 dot_left" style="z-index: 9;"></div>
                  <div class="dot dot_left" style="z-index: 10; transform:scale(2)"></div>
            </div>
          </div>`
        })
        // labels2.push(marker)
        marker.addTo(map.getLayer('layer'))
      })
    },
    renderBarMarkers() {
      // let labels = []
      let max = Math.max(...this.cityGetData.map(item => item.economicLoadEquipRate))
      let min = Math.min(...this.cityGetData.map(item => item.economicLoadEquipRate))

      map3Data.bars.forEach(element => {
        var list = this.cityGetData.filter(item => item.cityCode === element.cityCode)
        let currentH = getRangeHeight(min, max, 20, 70, list[0]?.economicLoadEquipRate)
        var marker = new maptalks.ui.UIMarker(element.point, {
          draggable: false,
          single: false,
          content: `<div class="bar-marker"><h2>${list[0]?.economicLoadEquipRate}%</h2><div class="bar-content" style="height:${currentH}px"></div></div>`
        })
        // labels.push(marker)
        marker.addTo(map.getLayer('layer'))
      })
    },
    loadChart() {
      let xData = []
      let yData = []

      let tempArr = this.cityGetData.map(function(item) {
        return {
          cityCode: item.cityCode,
          economicLoadEquipRate: item.economicLoadEquipRate
        }
      })

      tempArr.sort(function(a, b) {
        return a.economicLoadEquipRate - b.economicLoadEquipRate
      })

      tempArr.forEach(item => {
        map3Data.bars.forEach(i => {
          if (i.cityCode === item.cityCode) {
            xData.push(i.name)
          }
        })
      })
      yData = tempArr.map(item => item.economicLoadEquipRate)

      let option = {
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          top: '10%',
          containLabel: true
        },
        xAxis: {
          show: true,
          type: 'value',
          max: 60,
          splitNumber: 3,
          axisLabel: {
            show: true,
            align: 'right',
            textStyle: {
              color: '#fff',
              fontSize: 12
            },
            formatter: '{value}%'
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: true,
            inside: true,
            length: 3,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#74faca',
              width: 2,
              type: 'solid'
            }
          }
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,

            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',
                fontFamily: 'SourceHanSansCNRegular',
                fontSize: 18
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#2f5264',
                width: 1,
                type: 'solid'
              }
            },
            axisTick: {
              show: true,
              inside: true,
              length: 3,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#74faca',
                width: 2,
                type: 'solid'
              }
            },
            data: xData.reverse()
          }
          // {
          //   type: 'category',
          //   inverse: true,
          //   axisTick: 'none',
          //   axisLine: 'none',
          //   show: true,
          //   axisLabel: {
          //     textStyle: {
          //       color: '#ffffff',
          //       fontSize: '12'
          //     }
          //   },
          //   data: yData.reverse()
          // }
        ],
        series: [
          {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              color: '#52c8d6'
              //        shadowColor: '#43a3ad',
              // shadowBlur: 4,
              // shadowOffsetX:0,
              // shadowOffsetY:4
            },
            barWidth: 18,
            data: yData.reverse()
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 18,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
              color: '#fff151',
              opacity: 0.2,
              barBorderRadius: 0
            }
          }
        ]
      }
      loadChart.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
.map {
  width: 100%;
  height: 100%;
  position: relative;
  /deep/.maptalks-attribution {
    display: none;
  }
  #map {
    width: 100%;
    height: 100%;
  }
}
/deep/.bar-marker {
  h2 {
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 40px;
    font-family: 'SourceHanSansCN sans-serif';
    color: #00ffff;
  }
  .bar-content {
    width: 18px;
    height: 84px;
    background: #2bfdad;
    border-radius: 10px;
    margin: 0 auto;
  }
}

/deep/.load-chart-container {
  width: 232px;
  height: 350px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  // border: 1px solid red;
  .chart-title {
    position: absolute;
    width: 100%;
    h2 {
      background: linear-gradient(to top, #00c0ff, #96f2ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-align: center;
      font-size: 23px;
      font-family: SourceHanSansCNBold;
      padding: 5px 0;
      // letter-spacing: 2px;
    }
  }
  .load-chart {
    width: 100%;
    height: 100%;
  }
}
/deep/.wave0 {
  animation: scale0 1s;
  -webkit-animation: scale0 1s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-timing-function: linear; /* Safari and Chrome */
}

/deep/.wave1 {
  animation: scale1 1s;
  -webkit-animation: scale1 1s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-timing-function: linear; /* Safari and Chrome */
}

/deep/.wave2 {
  animation: scale2 1s;
  -webkit-animation: scale2 1s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-timing-function: linear; /* Safari and Chrome */
}

/*  #ff0000 #ff0000d6 #ff0000a6 #ff000087*/
@keyframes scale0 {
  from {
    transform: scale(2);
    opacity: 0.8;
  }
  to {
    transform: scale(4);
    opacity: 0.5;
  }
}

@-webkit-keyframes scale0 /*Safari and Chrome*/ {
  from {
    transform: scale(2);
    opacity: 0.8;
  }
  to {
    transform: scale(4);
    opacity: 0.5;
  }
}

@keyframes scale1 {
  from {
    transform: scale(4);
    opacity: 0.5;
  }
  to {
    transform: scale(6);
    opacity: 0.3;
  }
}

@-webkit-keyframes scale1 /*Safari and Chrome*/ {
  from {
    transform: scale(4);
    opacity: 0.5;
  }
  to {
    transform: scale(6);
    opacity: 0.3;
  }
}

@keyframes scale2 {
  from {
    transform: scale(6);
    opacity: 0.3;
  }
  to {
    transform: scale(7);
    opacity: 0;
  }
}

@-webkit-keyframes scale2 /*Safari and Chrome*/ {
  from {
    transform: scale(6);
    opacity: 0.3;
  }
  to {
    transform: scale(7);
    opacity: 0;
  }
}

/deep/.y-marker-label {
  position: relative;
  .triangle-up {
    position: absolute;
    top: -20px;
    left: -3px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 40px solid #61eecf;
  }
  .text-label {
    position: absolute;
    width: 80px;
    height: 40px;
    border: 3px solid #61eecf;
    top: -60px;
    left: -50%;
    border-radius: 10px;
    p {
      line-height: 36px;
      text-align: center;
      padding: 0;
      margin: 0;
      font-size: 29px;
      font-weight: 600;
      color: #fff;
      text-shadow: #000 2px 2px 2px, #000 -2px 2px 2px, #000 2px -2px 2px, #000 -2px -2px 2px;
    }
  }
  .ring {
    width: 80px;
    height: 80px;
    transform: rotateX(56deg);
    .dot {
      float: left;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: #54ff9c;
    }
    .dot_left {
      margin-left: -16px;
    }
  }
}
/deep/.y-marker-label-active {
  position: relative;
  .triangle-up {
    position: absolute;
    top: -20px;
    left: -3px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 40px solid #fafa6b;
  }
  .text-label {
    position: absolute;
    width: 80px;
    height: 40px;
    border: 3px solid #fafa6b;
    top: -60px;
    left: -50%;
    border-radius: 10px;
    p {
      line-height: 36px;
      text-align: center;
      padding: 0;
      margin: 0;
      font-size: 29px;
      font-weight: 600;
      color: #fafa6b;
      text-shadow: #000 2px 2px 2px, #000 -2px 2px 2px, #000 2px -2px 2px, #000 -2px -2px 2px;
    }
  }
  .ring {
    width: 80px;
    height: 80px;
    transform: rotateX(56deg);
    .dot {
      float: left;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: #fafa6b;
    }
    .dot_left {
      margin-left: -16px;
    }
  }
}
</style>
