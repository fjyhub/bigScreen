<template>
  <div class="map" id="map"></div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as apis from '@/service/technology'
import * as maptalks from 'maptalks'
import { page1, page2, page3, page4 } from './../../../data/data2.js'

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
    // mapGetData: {
    //   type: Array,
    //   required: true
    // }
  },
  data() {
    return {
      map: null,
      linesLayer: null,
      mapGetData: [],
      lines1: [
        [117.60175, 30.48189],
        [116.11953, 30.48189],
        [113.21461, 30.48189]
      ],
      lines2: [
        [123.70285, 30.48189],
        [124.96079, 30.48189],
        [126.82312, 30.48189]
      ],
      lines3: [
        [117.61831, 28.19568],
        [116.91951, 28.19568],
        [114.47097, 28.19568]
      ],
      lines4: [
        [123.04995, 28.17503],
        [124.05953, 28.17503],
        [125.69417, 28.17503]
      ],
      mapData: [
        {
          name: '杭州',
          url: require('../../../assets/imgs/map-img-1.png'),
          title: '杭州泛亚运零碳',
          context:
            '依托弹性互动两库、低频输电、虚 拟电厂系统、绿色数据中心、绿电 交易区、新能源配额等试点示范建 设，打造杭州萧山泛亚运“零碳四高”示范场景。'
        },
        {
          name: '宁波',
          url: require('../../../assets/imgs/map-img-2.png'),
          title: '宁波泛梅山近零碳示范',
          context:
            '依托绿电交易、碳资产交易、储 能交易、氢电耦合、LNG冷能、 绿色工厂、港口岸电等试点示范 建设，打造宁波泛梅山近零碳示范区。'
        },
        {
          name: '丽水',
          url: require('../../../assets/imgs/map-img-3.png'),
          title: '丽水全域碳中和示范',
          context:
            '力争实现电力领域2026年碳达峰、全社会2027年碳达峰、2030年碳中和打造“中国碳中和先行区”。'
        },
        {
          name: '金华',
          url: require('../../../assets/imgs/map-img-3.png'),
          title: '金华配网经济运行降损减排示范',
          context:
            '依托新型有源配电网调度管理体系，建设配电网经济运行智能辅助决策系统，实现年降损5000万千瓦时，减排25万吨。'
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.initMap()
    this.switchPage2()

    // apis.mapGetData().then(res => {
    //   console.log('res', res)
    //   this.mapGetData = res.data
    //   this.switchPage1()
    // })
    //
  },
  watch: {},
  methods: {
    initMap() {
      map = new maptalks.Map('map', {
        center: [120.5, 28.8],
        zoom: 8.2,
        minZoom: 7.5,
        maxZoom: 9.5,
        pitch: 30,
        maxPitch: 60,
        draggable: false, //disable drag
        dragPan: false, //disable drag panning
        dragRotate: false, //disable drag rotation
        dragPitch: true, //disable drag pitch
        scrollWheelZoom: true, //disable wheel zoom
        touchZoom: false, //disable touchzoom
        doubleClickZoom: false //disable doubleclick zoom
      })

      var imageLayer = new maptalks.ImageLayer('images', [
        {
          // url: './images/mapc.png',
          extent: [118, 27, 123, 31],
          opacity: 1
        }
      ])
      map.addLayer(imageLayer)
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
      labels1.forEach(item => {
        item?.remove()
      })

      labels2 = []
      let data = []
      page3.infos.forEach(item => {
        this.mapData.forEach(t => {
          if (item.name == t.name) {
            item.title = t.title
            item.context = t.context
            t.url ? (item.url = t.url) : ''
            data.push(item)
          }
        })
      })

      // 绘制线
      let t = data
      t[0].points = this.lines1
      t[1].points = this.lines2
      t[2].points = this.lines3
      t[3].points = this.lines4
      t[0].dotPoint = [
        [119.90379, 30.1527],
        [113.22047, 30.45196]
      ]
      t[1].dotPoint = [
        [122.33192, 29.71119],
        [126.79309, 30.4445]
      ]
      t[2].dotPoint = [
        [120.12342, 29.20535],
        [114.47097, 28.17503]
      ]
      t[3].dotPoint = [
        [119.62206, 28.43886],
        [125.68335, 28.15444]
      ]
      if (!map.getLayer('linesLayer')) {
        new maptalks.VectorLayer('linesLayer', { enableAltitude: true }).addTo(map)
      }
      data.forEach(item => {
        var line = new maptalks.LineString(
          [
            item.point,
            item.points[0],
            item.points[1],
            item.points[2]
            // [119.89804642633067, 30.17558685533442],
            // [114.89804642633067, 29.90558685533442]
          ],
          {
            visible: false,
            arrowStyle: '',
            arrowPlacement: '',
            symbol: {
              lineColor: '#00ffff',
              lineWidth: 3,
              lineOpacity: 1
            }
          }
        )

        line.addTo(map.getLayer('linesLayer'))
        line.animateShow(
          {
            duration: 2000,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // console.log('finished')
              //  line.hide()
              // replay2()
            }
          }
        )

        new maptalks.Marker(item.dotPoint[0], {
          properties: {
            // name: m.name
          },
          symbol: [
            {
              markerFile: require('../../../assets/imgs/map-dot.png'),
              markerWidth: 10,
              markerHeight: 10
            }
          ]
        }).addTo(map.getLayer('linesLayer'))

        new maptalks.Marker(item.dotPoint[1], {
          properties: {
            // name: m.name
          },
          symbol: [
            {
              markerFile: require('../../../assets/imgs/map-dot.png'),
              markerWidth: 10,
              markerHeight: 10
            }
          ]
        }).addTo(map.getLayer('linesLayer'))
      })

      // map
      //   .getLayer('images')
      //   .setImages([{ url: './images/mapb.png', extent: [118, 27, 123, 31], opacity: 1 }])
      map.removeLayer(map.getLayer('page1layer'))
      map.removeLayer(map.getLayer('page2layer'))
      map.removeLayer(map.getLayer('page3layer'))
      map.removeLayer(map.getLayer('page4layer'))
      if (!map.getLayer('page2layer')) {
        new maptalks.VectorLayer('page2layer', { enableAltitude: true }).addTo(map)
      }

      let points = [
        { point: [114.89804642633067, 29.90558685533442] },
        { point: [126.16181097494705, 29.90558685533442] },
        { point: [115.82704642633067, 27.7858685533442] },
        { point: [125.16181097494705, 27.7858685533442] }
      ]

      data[0].points = points[0].point
      data[1].points = points[1].point
      data[2].points = points[2].point
      data[3].points = points[3].point

      data.forEach(m => {
        //  m.forEach(element => {
        // new maptalks.Marker(m.point, {
        //   properties: {
        //     name: m.name
        //   },
        //   symbol: [
        //     {
        //       markerFile: m.url,
        //       markerWidth: 200,
        //       markerHeight: 140
        //     },
        //     {
        //       textFaceName: 'sans-serif',
        //       textName: '{name}',
        //       textSize: 28,
        //       textFill: '#fff',
        //       textDy: -27,
        //       textWeight: 'bold',
        //       textHaloFill: '#000',
        //       textHaloRadius: 3
        //     }
        //   ]
        // }).addTo(map.getLayer('page2layer'))
        // })

        var marker = new maptalks.ui.UIMarker(m.points, {
          draggable: false,
          single: false,
          content: `
            <div class="border-4">
              <div class="title3">${m.title}</div>
              <div class="fz24 mt20">${m.context}</div>
            </div>
          `
        })
        labels2.push(marker)
        marker.addTo(map.getLayer('linesLayer'))
      })

      map.sortLayers(['linesLayer', 'page2layer'])
      // setTimeout(function(){
      // this.playLine(data)
      // }, 1000)
    },
    playLine(data) {
      let that = this
      if (!map.getLayer('linesLayer')) {
        new maptalks.VectorLayer('linesLayer', { enableAltitude: true }).addTo(map)
      }
      // console.log('item', data)
      data.forEach(item => {
        console.log(item.point, item.points)
        console.log(item.point.concat(item.points))
        // let t = item.point
        // console.log('t', t)
        // let pt = t.concat(item.points)
        // console.log('pt', pt)
        var line = new maptalks.LineString(
          [
            item.point,
            item.points[0],
            item.points[1],
            item.points[2]
            // [119.89804642633067, 30.17558685533442],
            // [114.89804642633067, 29.90558685533442]
          ],
          {
            visible: false,
            arrowStyle: '',
            arrowPlacement: '',
            symbol: {
              lineColor: '#00ffff',
              lineWidth: 1,
              lineOpacity: 1
            }
          }
        )

        line.addTo(map.getLayer('linesLayer'))
        line.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // console.log('finished')
              //  line.hide()
              // replay2()
            }
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
  }
}
/deep/.progress-flex {
  display: flex;
  justify-content: flex-start;
  width: 260px;
  align-items: flex-end;
}

/deep/.border-4 {
  width: 600px;
  height: 360px;
  background: url('../../../assets/imgs/border-1.png');
  background-size: 100% 100%;
  padding: 40px;
  line-height: 40px;
}
/deep/.title3::before {
  bottom: 5px;
  height: 30px;
}
</style>
