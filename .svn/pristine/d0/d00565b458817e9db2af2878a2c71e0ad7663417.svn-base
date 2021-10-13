<template>
  <div class="map">
    <div id="map"></div>
    <div class="bar-legend" v-if="isprovience">
      <h2>互动资源规模 （万千瓦）</h2>
      <div class="bar-content">
        <span>{{ max }}</span>
        <span>{{ min }}</span>
      </div>
    </div>
    <div class="bar-legend-city" v-bind:class="{ 'city-legend-theme1': lishuiType }" v-else>
      <h2>{{ lishuiType ? '电动汽车充电设施规模 （兆瓦）' : '可控负荷规模（万千瓦）' }}</h2>
      <div class="bar-content">
        <span>{{ lishuiMax }}</span>
        <span>{{ lishuiMin }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as apis from '@/service/gaotanxing'
import * as maptalks from 'maptalks'
import { map2Data } from './../../../../data/data.js'
import axios from 'axios'
import { getRangeHeight } from './../../../../utils/tool'

let map
let labels = []
let labels2 = []
let labels3 = []

export default {
  props: {
    cityGetData: {
      type: Array,
      required: true
    },
    lishuiDataList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      map: null,
      max: '',
      min: '',
      isprovience: true,
      lishuiMax: '',
      lishuiMin: '',
      lishuiType: true,
      cityLegend: '电动汽车充电设施规模 （兆瓦）'
    }
  },
  created() {},
  mounted() {
    console.log(this.mapGetData)
    this.initMap()
    this.renderLabelMarkers()
    this.renderBarMarkers()
    //
  },
  watch: {
    // cityGetData: {
    //   handler() {
    //     this.renderBarMarkers()
    //   }
    // }
  },
  methods: {
    initMap() {
      let that = this
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
          url: './../images/map_layer2.png',
          extent: [118, 27, 124, 31],
          opacity: 1
        }
      ])
      map.addLayer(imageLayer)

      new maptalks.VectorLayer('layer').addTo(map)

      var polygon = new maptalks.Polygon([map2Data.lishuiGeo], {
        visible: true,
        editable: true,
        cursor: 'pointer',
        shadowBlur: 0,
        shadowColor: 'black',
        draggable: true,
        dragShadow: false, // display a shadow during dragging
        drawOnAxis: null, // force dragging stick on a axis, can be: x, y
        symbol: {
          lineColor: '#34495e',
          lineWidth: 0,
          polygonFill: 'rgb(135,196,240)',
          polygonOpacity: 0
        }
      })

      polygon.on('click', function(e) {
        console.log(e)
        that.switchLishui()
        that.$emit('click-map')
      })

      new maptalks.VectorLayer('vector', polygon).addTo(map)
    },
    renderLabelMarkers() {
      // map2Data.labels.forEach(element => {
      //   new maptalks.Marker(element.point, {
      //     properties: {
      //       name: element.name
      //     },
      //     symbol: [
      //       {
      //         markerFile: element.unique ? './images/label-icon5.png' : './images/label-icon.png',
      //         markerWidth: element.unique ? 92 : 86,
      //         markerHeight: element.unique ? 98 : 97,
      //         markerDx: element.unique ? -2 : 0
      //       },
      //       {
      //         textFaceName: 'SourceHanSansCNBold',
      //         textName: '{name}',
      //         textSize: 28,
      //         textFill: element.unique ? '#ffe400' : '#fff',
      //         textDy: element.unique ? -78 : -77,
      //         textWeight: 'bold',
      //         textHaloFill: '#000',
      //         textHaloRadius: 3,
      //         textHorizontalAlignment: 'middle' //left | middle | right | auto
      //       }
      //     ]
      //   }).addTo(map.getLayer('layer'))
      // })
      map2Data.labels.forEach(element => {
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
        labels2.push(marker)
        marker.addTo(map.getLayer('layer'))
      })
    },
    renderBarMarkers() {
      let max = Math.max(...this.cityGetData.map(item => item.interactiveResourceScale))
      let min = Math.min(...this.cityGetData.map(item => item.interactiveResourceScale))

      this.max = max
      this.min = min

      map2Data.bars.forEach(element => {
        var list = this.cityGetData.filter(item => item.cityCode === element.cityCode)
        let currentH = getRangeHeight(min, max, 30, 100, list[0]?.interactiveResourceScale)
        var marker = new maptalks.ui.UIMarker(element.point, {
          draggable: false,
          single: false,
          content: `<div class="bar-marker"><h2>${list[0]?.interactiveResourceScale}</h2><div class="bar-content" style="height:${currentH}px"></div></div>`
        })
        labels.push(marker)
        marker.addTo(map.getLayer('layer'))
      })
    },
    //切换到丽水
    switchLishui() {
      let that = this
      labels2.forEach(item => {
        item?.remove()
      })
      labels.forEach(item => {
        item?.remove()
      })
      map.removeLayer(map.getLayer('layer'))
      map.removeLayer(map.getLayer('vector'))
      new maptalks.VectorLayer('lishuiLayer').addTo(map)

      map.getLayer('images').setImages([
        {
          url: './../images/map_layer_lishui.png',
          extent: [118.7, 27.4, 120.5, 28.9],
          opacity: 1
        }
      ])
      map.setCenter([119.7, 28.1])

      map
        .setMaxZoom(10)
        .setMinZoom(9.5)
        .zoomIn(9)

      map.setBearing(-10)
      this.renderLishuiLabelMarkers()
      this.renderLishuiBarMarkers()

      this.isprovience = false

      map.on('click', function(e) {
        console.log(e)
        that.lishuiType = !that.lishuiType

        that.lishuiType ? that.renderLishuiBarMarkers() : that.renderLishuiBarMarkers3()
      })
    },
    renderLishuiLabelMarkers() {
      labels3.forEach(item => {
        item?.remove()
      })
      map2Data.lishui.labels.forEach(element => {
        new maptalks.Marker(element.point, {
          properties: {
            name: element.name
          },
          symbol: [
            {
              markerFile: element.unique ? './images/label-icon7.png' : './images/label-icon6.png',
              markerWidth: element.unique ? 185 : 91,
              markerHeight: 40
            },
            {
              textFaceName: 'SourceHanSansCNBold',
              textName: '{name}',
              textSize: 23,
              textFill: '#fff',
              textDy: -20,
              textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 1
            }
          ]
        }).addTo(map.getLayer('lishuiLayer'))
      })
    },
    renderLishuiBarMarkers() {
      labels3.forEach(item => {
        item?.remove()
      })
      let max = Math.max(...this.lishuiDataList.map(item => item.elecVehicleChargingScale))
      let min = Math.min(...this.lishuiDataList.map(item => item.elecVehicleChargingScale))

      this.lishuiMax = max
      this.lishuiMin = min

      map2Data.lishui.bars.forEach(element => {
        var list = this.lishuiDataList.filter(item => item.cityCode === element.cityCode)
        let currentH = getRangeHeight(min, max, 10, 170, list[0]?.elecVehicleChargingScale)
        var marker = new maptalks.ui.UIMarker(element.point, {
          draggable: false,
          single: false,
          dx: 70,
          dy: -40,
          content: `<div class="bar-marker2"><h2>${list[0]?.elecVehicleChargingScale}</h2><div class="bar-content" style="height:${currentH}px"></div></div>`
        })
        labels2.push(marker)
        marker.addTo(map.getLayer('lishuiLayer'))
      })
    },
    //可控负荷规模
    renderLishuiBarMarkers3() {
      labels2.forEach(item => {
        item?.remove()
      })
      let max = Math.max(...this.lishuiDataList.map(item => item.controllableLoadScale))
      let min = Math.min(...this.lishuiDataList.map(item => item.controllableLoadScale))

      this.lishuiMax = max
      this.lishuiMin = min

      map2Data.lishui.bars.forEach(element => {
        var list = this.lishuiDataList.filter(item => item.cityCode === element.cityCode)
        let currentH = getRangeHeight(min, max, 10, 170, list[0]?.controllableLoadScale)
        var marker = new maptalks.ui.UIMarker(element.point, {
          draggable: false,
          single: false,
          dx: 70,
          dy: -40,
          content: `<div class="bar-marker3"><h2>${list[0]?.controllableLoadScale}</h2><div class="bar-content" style="height:${currentH}px"></div></div>`
        })
        labels3.push(marker)
        marker.addTo(map.getLayer('lishuiLayer'))
      })
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
    // height: 84px;
    background: #2bfdad;
    border-radius: 10px;
    margin: 0 auto;
  }
}

/deep/.bar-marker2 {
  h2 {
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 40px;
    font-family: 'SourceHanSansCNHeavy';
    color: #2bfdad;
  }
  .bar-content {
    width: 18px;
    // height: 84px;
    background: #2bfdad;
    border-radius: 10px;
    margin: 0 auto;
  }
}

/deep/.bar-marker3 {
  h2 {
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 40px;
    font-family: 'SourceHanSansCNHeavy';
    color: #00ffff;
  }
  .bar-content {
    width: 18px;
    // height: 84px;
    background: #00ffff;
    border-radius: 10px;
    margin: 0 auto;
  }
}

.bar-legend {
  width: 150px;
  height: 150px;
  position: absolute;
  right: 120px;
  bottom: 20px;
  // border: 1px solid red;
  h2 {
    // width: 130px;
    padding: 0 5px;
    text-align: center;
    font-size: 21px;
    letter-spacing: 2px;
    line-height: 30px;
    font-family: SourceHanSansCNRegular;
    color: #00ffff;
  }
  .bar-content {
    width: 18px;
    height: 84px;
    background: #2bfdad;
    border-radius: 10px;
    margin: 0 auto;
    position: relative;
    span {
      font-size: 20px;
      color: #00ffff;
      position: absolute;
      text-align: left;
    }
    span:first-child {
      right: -30px;
    }
    span:last-child {
      right: -20px;
      bottom: 0;
    }
  }
}

.bar-legend-city {
  width: 240px;
  height: 150px;
  position: absolute;
  right: 110px;
  bottom: 20px;
  color: #00ffff;

  // border: 1px solid red;
  > h2 {
    // width: 130px;
    padding: 0 40px;
    text-align: center;
    font-size: 22px;
    // letter-spacing: 2px;
    font-weight: 600;
    line-height: 30px;
    font-family: SourceHanSansCNNormal;
    color: inherit;
  }
  .bar-content {
    width: 18px;
    height: 84px;
    background: #00ffff;
    border-radius: 10px;
    margin: 0 auto;
    position: relative;
    span {
      font-size: 20px;
      color: inherit;
      position: absolute;
      text-align: left;
    }
    span:first-child {
      left: -50px;
    }
    span:last-child {
      left: -50px;
      bottom: 0;
    }
  }
}
.city-legend-theme1 {
  color: #2bfdad;
  h2 {
    padding: 0 5px;
    font-weight: normal;
  }
  .bar-content {
    background: #2bfdad;
  }
}
.city-legend-theme2 {
  color: #00ffff;
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
