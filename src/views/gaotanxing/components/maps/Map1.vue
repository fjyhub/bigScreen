<template>
  <div class="map" id="map"></div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as apis from '@/service/gaotanxing'
import * as maptalks from 'maptalks'
import { map1Data } from './../../../../data/data.js'
import axios from 'axios'

let map
let elecLabels = []
export default {
  props: {
    provinceGetData: {
      type: Object,
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
    this.initMap()

    this.renderLabelMarkers()
    this.renderElecLabels()

    this.renderPlantMarkers()

    let that = this

    setInterval(() => {
      that.flash()
    }, 10000)
  },
  watch: {
    // provinceGetData: {
    //   deep:true,
    //   handler() {
    //     this.renderPlantMarkers()
    //   }
    // }
  },
  methods: {
    initMap() {
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
          url: './../images/map_layer1.png',
          extent: [118, 27, 124, 31],
          opacity: 1
        }
      ])
      map.addLayer(imageLayer)
    },
    renderLabelMarkers() {
      new maptalks.VectorLayer('layer').addTo(map)
      // map1Data.labels.forEach(element => {
      //   new maptalks.Marker(element.point, {
      //     properties: {
      //       name: element.name
      //     },
      //     symbol: [
      //       {
      //         markerFile: element.unique ? './images/label-icon5.png' : './images/label-icon.png',
      //         markerWidth: element.unique ? 86 : 86,
      //         markerHeight: element.unique ? 88 : 97,
      //         markerDx: element.unique ? -2 : 0
      //       },
      //       {
      //         textFaceName: 'SourceHanSansCNBold',
      //         textName: '{name}',
      //         textSize: 28,
      //         textFill: element.unique ? '#ffe400' : '#fff',
      //         textDy: element.unique ? -70 : -77,
      //         textWeight: 'bold',
      //         textHaloFill: '#000',
      //         textHaloRadius: element.unique ? 1 : 3,
      //         textHorizontalAlignment: 'middle' //left | middle | right | auto
      //       }
      //     ]
      //   }).addTo(map.getLayer('layer'))
      // })
      map1Data.labels.forEach(element => {
        let classStr = element.unique ? 'y-marker-label-active' : 'y-marker-label'
        new maptalks.ui.UIMarker(element.point, {
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
        }).addTo(map.getLayer('layer'))
      })
    },
    //发电厂
    renderPlantMarkers() {
      map1Data.plants.forEach(element => {
        new maptalks.Marker(element.point, {
          properties: {
            label1: this.provinceGetData[element.id],
            label2: element.label2
          },
          symbol: [
            {
              markerFile: element.icon,
              markerWidth: element.iconW,
              markerHeight: element.iconH
            },
            {
              textFaceName: 'SourceHanSansCNBold',
              textName: '{label1}',
              textSize: 32,
              textFill: '#c5ff3d',
              // textDx: -40,
              textDy: 25,
              textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 0,
              textAlign: 'left',
              textHorizontalAlignment: 'left' //left | middle | right | auto
            },
            {
              textFaceName: 'SourceHanSansCNMedium',
              textName: '{label2}',
              textSize: 22,
              textFill: '#fff',
              // textDx: 30,
              textDy: 22,
              // textWeight: 'bold',
              textHaloFill: '#fff',
              textHaloRadius: 0,
              textAlign: 'right',
              textHorizontalAlignment: 'right' //left | middle | right | auto
            }
          ]
        }).addTo(map.getLayer('layer'))
      })
    },
    //电流
    renderElecLabels() {
      elecLabels = []
      map1Data.elecLabels.forEach(element => {
        var marker = new maptalks.Marker(element.point, {
          properties: {
            name: element.name
          },
          symbol: [
            {
              markerFile: element.icon,
              markerWidth: element.iconW,
              markerHeight: element.iconH,
              markerDy: 0
            },
            {
              markerFile: element.icon2,
              markerWidth: element.icon2W,
              markerHeight: element.icon2H,
              markerDx: element.icon2X,
              markerDy: element.icon2Y
            },
            {
              textFaceName: 'sans-serif',
              textName: '{name}',
              textSize: 28,
              textFill: '#fff',
              textDy: -18,
              // textDx: 80,
              // textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 0
            }
          ]
        })

        elecLabels.push(marker)
        marker.addTo(map.getLayer('layer'))
      })
    },
    flash() {
      elecLabels.forEach(item => {
        item.flash(
          200, //flash interval in ms
          3, // count
          function() {
            // callback when flash end
          }
        )
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
/deep/.page2_marker {
  width: 113px;
  border: 2px solid #00d4b8;
  border-radius: 10px;
  padding: 6px 6px;
  background: #016a96;
  //   color: red;
  h2 {
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 24px;
    font-family: 'sans-serif';
  }
  h3 {
    font-size: 26px;
    color: yellow;
    font-style: italic;
    letter-spacing: 2px;
    line-height: 36px;
    text-align: center;
  }
}
/deep/.page3_marker {
  width: 113px;
  border: 2px solid #00d4b8;
  border-radius: 10px;
  padding: 6px 6px;
  background: #016a96;
  //   color: red;
  h2 {
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 24px;
    font-family: 'sans-serif';
  }
  h3 {
    font-size: 26px;
    color: yellow;
    font-style: italic;
    letter-spacing: 2px;
    line-height: 36px;
    text-align: center;
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
