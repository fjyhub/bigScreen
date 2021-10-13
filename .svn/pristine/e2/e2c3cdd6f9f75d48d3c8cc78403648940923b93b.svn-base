<template>
  <div class="map-container">
    <div class="map" id="map"></div>
    <div class="map-legend">
      <p>
        <span>现状/</span>
        <span>目标</span>
      </p>
    </div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as apis from '@/service/technology'
import * as maptalks from 'maptalks'
import { page1, page2, page3, page4 } from '../../../data/data2.js'
import { map1Data } from '../../../data/shuangtan.js'

let map
let labels1 = []
let labels2 = []
let labels3 = []

export default {
  props: {
    // index: {
    //   type: Number,
    //   required: true
    // }
    mapData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      map: null,
      linesLayer: null,
      mapGetData: [],
      mapPitch: false
    }
  },
  created() {},
  mounted() {
    // this.getMapDatas()
    this.initMap()
    // this.switchPage2()

    setInterval(() => {
      this.mapTransform()
    }, 10000)
  },
  watch: {
    mapData: {
      handler() {
        this.renderLabels()
        this.switchPage2()
      }
    }
  },
  methods: {
    // 获取地图数据

    initMap() {
      map = new maptalks.Map('map', {
        center: [120.5, 28.8],
        zoom: 8.2,
        minZoom: 7.5,
        maxZoom: 9.5,
        pitch: 30,
        maxPitch: 60,
        draggable: true, //disable drag
        dragPan: false, //disable drag panning
        dragRotate: true, //disable drag rotation
        dragPitch: true, //disable drag pitch
        scrollWheelZoom: true, //disable wheel zoom
        touchZoom: false, //disable touchzoom
        doubleClickZoom: false //disable doubleclick zoom
      })

      var imageLayer = new maptalks.ImageLayer('images', [
        {
          url: '/images/tan_map.png',
          extent: [118, 27, 123, 31],
          opacity: 1
        }
      ])
      map.addLayer(imageLayer)

      new maptalks.VectorLayer('layer').addTo(map)
      map.on('click', function(param) {
        console.log(
          param.coordinate
            .toFixed(7)
            .toArray()
            .join()
        )
      })
    },

    switchPage2() {
      labels2.forEach(item => {
        item.remove()
      })

      if (!map.getLayer('page2layer')) {
        new maptalks.VectorLayer('page2layer', { enableAltitude: true }).addTo(map)
      }

      labels2 = []
      page2.infos.forEach(item => {
        let rate = ''
        // this.mapGetData.forEach(dataItem => {
        //   if (item.cityCode === dataItem.cityCode) {
        //     rate = dataItem.demandResponseRate
        //   }
        // })
        let data = []
        // console.log(this.mapGetData)
        this.mapData.forEach(t => {
          if (item.name == t.distname) {
            item.value = t.mbl
            item.subValue = t.dql
            item.projectname = t.projectname
            item.progress = ((t.dql / t.mbl) * 100).toFixed(1)
            data.push(item)
          }
        })

        data.forEach(m => {
          let classStr = ''

          if (m.projectname == '碳中和进程') {
            classStr = 'active'
          }
          var marker = new maptalks.ui.UIMarker(m.point, {
            draggable: false,
            single: false,
            // content: `<div class="page2_marker"><h2>需求响应度:</h2><h3>%</h3></div>`
            content: `
            <div style="width:260px;font-size: 24px">
              <div style="margin-left: -35%;" class="mb10"><span class="map-color-1 fz30">${m.subValue}万吨/</span><span class="map-color-2 fz30">${m.value}万吨</span></div>
              <div class="progress-flex">
                <div class="progress"><div style="height:${m.progress}%" class="${classStr}"></div></div>
                
              </div>
            </div>
            `
          })
          labels2.push(marker)
          marker.addTo(map.getLayer('page2layer'))
        })
      })
    },
    renderLabels() {
      map.removeLayer(map.getLayer('layer'))
      if (!map.getLayer('layer')) {
        new maptalks.VectorLayer('layer', { enableAltitude: true }).addTo(map)
      }
      map1Data.labels.forEach(element => {
        let label2 = ''
        this.mapData.forEach(item => {
          if (item.distname == element.name) {
            label2 = Math.round((100 * item.dql) / item.mbl) + '%'
          }
        })

        var label = new maptalks.Marker(element.point, {
          properties: {
            name: element.name,
            label1: element.label1,
            label2: label2
          },
          symbol: [
            {
              markerFile: './images/tan_label_icon.png',
              markerWidth: 100,
              markerHeight: 40
            },
            {
              textFaceName: 'sans-serif',
              textName: '{name}',
              textSize: 30,
              textFill: '#fff',
              textDy: -18,
              textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 1,
              textAlign: 'center',
              textHorizontalAlignment: 'middle' //left | middle | right | auto
            },
            {
              textFaceName: 'sans-serif',
              textName: '{label1}',
              textSize: 35,
              textFill: '#fff',
              textDx: 120,
              textDy: -70,
              textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 1,
              textHorizontalAlignment: 'left' //left | middle | right | auto
            },
            {
              textFaceName: 'sans-serif',
              textName: '{label2}',
              textSize: 35,
              textFill: element.type === 1 ? '#ffef3b' : '#f1803a',
              textDx: 130,
              textDy: -70,
              textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 1,
              textHorizontalAlignment: 'right' //left | middle | right | auto
            }
          ]
        })
        labels1.push(label)
        label.addTo(map.getLayer('layer'))
      })
    },
    mapTransform() {
      if (this.mapPitch) {
        map.animateTo(
          {
            pitch: 60
            // bearing: 20
          },
          {
            duration: 3000
          }
        )
      } else {
        map.animateTo(
          {
            pitch: 30
            // bearing: 20
          },
          {
            duration: 3000
          }
        )
      }

      this.mapPitch = !this.mapPitch
    }
  }
}
</script>
<style lang="less" scoped>
.map-container,
.map {
  width: 100%;
  height: 100%;
  position: relative;
  /deep/.maptalks-attribution {
    display: none;
  }
}
.map-legend {
  width: 200px;
  height: 50px;
  // border:1px solid red;
  position: absolute;
  bottom: 80px;
  right: 140px;
  font-size: 34px;
  text-align: right;
  font-weight: normal;
  span:first-child {
    color: #ffef3b;
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

/deep/.map-color-1 {
  color: #ffef3b;
}
/deep/.map-color-2 {
  color: #a6c4c1;
}
/deep/.progress {
  display: inline-block;
  background: rgba(13, 60, 66, 0.6);
  height: 100px;
  width: 30px;
  border-radius: 5px;
  margin-right: 20px;
  position: relative;
  div {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 5px;
    background: #ffef3b;
    &.active {
      background: #ff853b;
    }
  }
}
/deep/.progress-flex {
  display: flex;
  justify-content: flex-start;
  width: 300px;
  align-items: flex-end;
}
</style>
