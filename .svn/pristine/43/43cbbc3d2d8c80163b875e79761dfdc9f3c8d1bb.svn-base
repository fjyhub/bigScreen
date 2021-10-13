<template>
  <div class="map" id="map"></div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as apis from '@/service/gaotanxing'
import * as maptalks from 'maptalks'
import { map4Data } from './../../../../data/data.js'
import axios from 'axios'

let map
let labels1 = []
let labels2 = []
let labels3 = []

export default {
  props: {
    index: {
      type: Number,
      required: true
    }
    // mapGetData: {
    //   type: Array,
    //   required: true
    // }
  },
  data() {
    return {
      map: null,
      linesLayer: null,
      mapGetData: []
    }
  },
  created() {},
  mounted() {
    // console.log(this.mapGetData)
    this.initMap()

    this.renderLabelMarkers()
    // this.renderElecLabels()

    this.renderTyphoonMarkers()

    //
  },
  watch: {},
  methods: {
    initMap() {
      console.log(maptalks)
      map = new maptalks.Map('map', {
        center: [121, 29],
        zoom: 8,
        pitch: 20,
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
          url: './../images/map_layer4.png',
          extent: [118, 27, 124, 31],
          opacity: 1
        }
      ])
      map.addLayer(imageLayer)

      map.on('click', function(e) {
        console.log(e.coordinate)
      })

      // new maptalks.VectorLayer('linesLayer').addTo(map)
      // axios.get('./map/330300.json').then(res => {
      //   console.log(res.data)
      //   var a = maptalks.GeoJSON.toGeometry(res.data)
      //   console.log(a)

      //   new maptalks.VectorLayer('vector', a).addTo(map)
      // })
    },
    renderLabelMarkers() {
      new maptalks.VectorLayer('layer').addTo(map)
      // map4Data.labels.forEach(element => {
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

      map4Data.labels.forEach(element => {
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

      // map4Data.labels2.forEach(element => {
      //   new maptalks.Marker(element.point, {
      //     properties: {
      //       name: element.name
      //     },
      //     symbol: [
      //       {
      //         markerFile: './images/label-icon4.png',
      //         markerWidth: 96,
      //         markerHeight: 107
      //       },
      //       {
      //         markerFile: './images/shield.png',
      //         markerWidth: 64,
      //         markerHeight: 78,
      //         markerDx: -88,
      //         markerDy: -36
      //       },
      //       {
      //         textFaceName: 'sans-serif',
      //         textName: '{name}',
      //         textSize: 38,
      //         textFill: '#ceff88',
      //         textDy: -80,
      //         textWeight: 'bold',
      //         textHaloFill: '#000',
      //         textHaloRadius: 3
      //       }
      //     ]
      //   }).addTo(map.getLayer('layer'))
      // })
      map4Data.labels2.forEach(element => {
        let marker = new maptalks.ui.UIMarker(element.point, {
          draggable: false,
          single: false,
          dx: 40,
          content: `
          <div class="y-marker-label-primary">
            <div class="shild"><img src="./images/shield.png"/></div>
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
    //台风
    renderTyphoonMarkers() {
      //map4Data.typhoon.forEach(element => {
      //   new maptalks.Marker(element.point, {
      //     properties: {
      //       name: element.name
      //     },
      //     symbol: [
      //       {
      //         markerFile: './images/marker-typhoon-bg.png',
      //         markerWidth: 96,
      //         markerHeight: 41,
      //         markerDx: 80,
      //         markerDy: 0
      //       },
      //       {
      //         markerFile: './images/marker-typhoon.png',
      //         markerWidth: element.w,
      //         markerHeight: element.h,
      //         markerDx: 0,
      //         markerDy: 0
      //       },
      //       {
      //         textFaceName: 'SourceHanSansCNBold',
      //         textName: '{name}',
      //         textSize: 28,
      //         textFill: '#fff',
      //         textDy: -20,
      //         textDx: 80,
      //         textWeight: 'bold',
      //         textHaloFill: '#000',
      //         textHaloRadius: 0
      //       }
      //     ]
      //   }).addTo(map.getLayer('layer'))
      // })
      map4Data.typhoon.forEach(element => {
        let marker = new maptalks.ui.UIMarker(element.point, {
          draggable: false,
          single: false,
          dx: 40,
          content: `
          <div class="wind">
            <span class="wind-icon" style="width:${element.w}px;height:${element.h}px;"><img src="./images/marker-typhoon.png"/></span>
            <span class="label">${element.name}</span>
          </div>`
        })
        // labels2.push(marker)
        marker.addTo(map.getLayer('layer'))
      })
    },
    //电流
    renderElecLabels() {
      map4Data.elecLabels.forEach(element => {
        // let rate = ''
        // this.mapGetData.forEach(dataItem => {
        //   if (item.cityCode === dataItem.cityCode) {
        //     rate = dataItem.demandResponseRate
        //   }
        // })

        new maptalks.Marker(element.point, {
          properties: {
            name: element.name
          },
          symbol: [
            {
              markerFile: element.icon,
              markerWidth: element.iconW,
              markerHeight: element.iconH,
              markerDx: 80,
              markerDy: 0
            },
            {
              textFaceName: 'sans-serif',
              textName: '{name}',
              textSize: 28,
              textFill: '#fff',
              textDy: -18,
              textDx: 80,
              // textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 0
            }
          ]
        }).addTo(map.getLayer('layer'))
      })
    }
  }
}
</script>
<style lang="less" scoped>
.map {
  width: 100%;
  height: 100%;
  /deep/.maptalks-attribution {
    display: none;
  }
}
/deep/.text_marker {
  border: 2px solid #00d4b8;
  border-radius: 10px;
  padding: 4px 10px;
  background: #016a96;
  //   color: red;
  h2 {
    font-size: 13px;
    letter-spacing: 2px;
    padding-top: 4px;
    // padding: 4px 0;
    // font-family: ;
  }
  h3 {
    font-size: 20px;
    color: yellow;
    font-style: italic;
    // padding: 2px 6px;
    padding-left: 4px;

    letter-spacing: 2px;
    // font-family: monospace;
    span {
      font-size: 15px;
    }
  }
}
/deep/ .electric_marker {
  direction: rtl;
  padding: 5px 10px;
  background: #7a8651;
  color: #fff;
  font-size: 32px;
  border-radius: 10px;
  border: 4px solid #d0d60d;
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
/deep/.y-marker-label-primary {
  position: relative;
  .triangle-up {
    position: absolute;
    top: -20px;
    left: -3px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 40px solid #6aff93;
  }
  .text-label {
    position: absolute;
    width: 96px;
    height: 53px;
    border: 4px solid #6aff93;
    top: -70px;
    left: -50%;
    border-radius: 10px;
    p {
      line-height: 46px;
      text-align: center;
      padding: 0;
      margin: 0;
      font-size: 40px;
      font-weight: 600;
      color: #ceff88;
      text-shadow: #000 2px 2px 2px, #000 -2px 2px 2px, #000 2px -2px 2px, #000 -2px -2px 2px;
    }
  }
  .shild {
    position: absolute;
    top: -100%;
    left: -120px;
    width: 64px;
    height: 78px;
    animation: shild 5s ease-out infinite;
    img {
      width: 100%;
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
      background-color: #6aff93;
    }
    .dot_left {
      margin-left: -16px;
    }
  }
}
@keyframes shild {
  /*0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(90deg);}
      50%{-webkit-transform:rotate(180deg);}
      75%{-webkit-transform:rotate(270deg);}
      100%{-webkit-transform:rotate(360deg);}*/
  0% {
    opacity: 1;
    width: 64px;
  }
  10% {
    opacity: 0.95;
    width: 68px;
  }
  20% {
    opacity: 0.9;
    width: 72px;
  }
  30% {
    opacity: 0.95;
    width: 68px;
  }
  40% {
    opacity: 1;
    width: 64px;
  }
  60% {
    opacity: 1;
    width: 64px;
  }
  70% {
    opacity: 0.95;
    width: 68px;
  }
  80% {
    opacity: 0.9;
    width: 72px;
  }
  90% {
    opacity: 0.95;
    width: 68px;
  }
  100% {
    opacity: 1;
    width: 64px;
  }
}

/deep/.wind {
  width: 200px;
  height: 50px;
  // border: 1px solid red;
  .wind-icon {
    display: block;
    float: left;
    animation: wind1 2s linear infinite;
    img {
      width: 100%;
    }
  }
  .label {
    margin-left: 10px;
    float: left;
    width: 96px;
    height: 40px;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    background: url('./../../../../assets/imgs/marker-typhoon-bg.png') no-repeat;
  }
}
@keyframes wind1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
