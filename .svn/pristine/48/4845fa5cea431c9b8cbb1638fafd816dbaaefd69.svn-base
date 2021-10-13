<template>
  <div class="map" id="map"></div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as apis from '@/service/technology'
import * as maptalks from 'maptalks'
import { page1, page2, page3, page4 } from '../../../data/data2.js'

let map
let labels1 = []
let labels2 = []
let labels3 = []

export default {
  // props: {
  // },
  data() {
    return {
      map: null,
      linesLayer: null,
      mapGetData: [],
      labels: [
        {
          name: '杭州',
          point: [119.2679219, 30.2974772]
        },
        {
          name: '宁波',
          point: [121.7234019, 30.2787614]
        },
        {
          name: '金华',
          point: [119.9122799, 29.5646186]
        },
        {
          name: '丽水',
          point: [118.856079, 28.2156452]
        }
      ],
      picLabels: [
        {
          name: '杭州',
          point: [118.2679219, 30.2974772],
          picUrl: require('../../../assets/imgs/map-img-1.png')
        },
        {
          name: '宁波',
          point: [122.4234019, 29.8787614],
          picUrl: require('../../../assets/imgs/map-img-2.png')
        },
        {
          name: '金华',
          point: [119.5122799, 29.2646186],
          picUrl: require('../../../assets/imgs/map-img-4.png')
        },
        {
          name: '丽水',
          point: [118.556079, 27.9156452],
          picUrl: require('../../../assets/imgs/map-img-3.png')
        }
      ],
      lines: [
        [
          [119.6679219, 30.6590365],
          [113.6034353, 30.6590365]
        ],
        [
          [121.7234019, 30.64189],
          [126.82312, 30.64189]
        ],
        [
          [118.5990324, 28.1656452],
          [114.8043371, 28.1656452]
        ],
        [
          [120.2192388, 29.4018074],
          [121.663255, 28.16503],
          [125.69417, 28.16503]
        ]
      ],
      pois: [
        [
          [113.6034353, 30.6590365],
          [119.6679219, 30.6590365]
        ],
        [
          [121.7234019, 30.64189],
          [126.82312, 30.64189]
        ],
        [
          [114.8043371, 28.1656452],
          [118.5990324, 28.1656452]
        ],
        [
          [120.2192388, 29.4018074],
          [125.69417, 28.16503]
        ]
      ],
      mapData: [
        {
          name: '杭州',
          point: [115.42804642633067, 30.10558685533442],
          url: require('../../../assets/imgs/map-img-1.png'),
          title: '杭州泛亚运零碳',
          context: [
            '依托弹性互动两库、低频输电、虚',
            '拟电厂系统、绿色数据中心、绿电',
            '交易区、新能源配额等试点示范建',
            '设，打造杭州萧山泛亚运“零碳四高”',
            '示范场景。'
          ]
        },
        {
          name: '宁波',
          point: [125.70181097494705, 30.10558685533442],
          url: require('../../../assets/imgs/map-img-2.png'),
          title: '宁波泛梅山近零碳示范',
          context: [
            '依托绿电交易、碳资产交易、储',
            '能交易、氢电耦合、LNG冷能、',
            '绿色工厂、港口岸电等试点示范',
            '建设,打造宁波泛梅山近零碳示范区。'
          ]
        },
        {
          name: '丽水',
          point: [116.28704642633067, 27.7858685533442],
          url: require('../../../assets/imgs/map-img-3.png'),
          title: '丽水全域碳中和示范',
          context: [
            '力争实现电力领域2026年碳达峰、',
            '全社会2027年碳达峰、2030年碳',
            '中和打造“中国碳中和先行区”。'
          ]
        },
        {
          name: '金华',
          point: [124.83181097494705, 27.7858685533442],
          url: require('../../../assets/imgs/map-img-3.png'),
          title: '金华配网经济运行降损减排示范',
          context: [
            '依托新型有源配电网调度管理体',
            '系，建设配电网经济运行智能辅',
            '助决策系统，实现年降损5000万',
            '千瓦时，减排25万吨。'
          ]
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.initMap()
    this.renderLabels()
    this.renderUiLabels()
    this.renderLines()
    this.renderPois()
    this.renderPicMarkers()
  },
  watch: {},
  methods: {
    initMap() {
      map = new maptalks.Map('map', {
        center: [120.5, 28.8],
        zoom: 8,
        // minZoom: 7.5,
        // maxZoom: 9.5,
        pitch: 30,
        maxPitch: 60,
        draggable: false, //disable drag
        dragPan: false, //disable drag panning
        dragRotate: false, //disable drag rotation
        dragPitch: true, //disable drag pitch
        scrollWheelZoom: false, //disable wheel zoom
        touchZoom: false, //disable touchzoom
        doubleClickZoom: false //disable doubleclick zoom
      })

      var imageLayer = new maptalks.ImageLayer('images', [
        {
          url: './images/action_map.png',
          extent: [117.5, 26.8, 123.5, 31.8],
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

      if (!map.getLayer('linesLayer')) {
        new maptalks.VectorLayer('linesLayer', { enableAltitude: true }).addTo(map)
      }
    },

    //文字
    renderLabels() {
      this.labels.forEach(item => {
        new maptalks.Label(item.name, item.point, {
          draggable: true,
          textSymbol: {
            textFaceName: 'SourceHanSansCNMedium',
            textFill: '#ffff00',
            textHaloFill: '#fff',
            textHaloRadius: 0,
            textSize: 36,
            textWeight: 'bold',
            textVerticalAlignment: 'top'
          }
        }).addTo(map.getLayer('linesLayer'))
      })
    },
    //窗口
    renderUiLabels() {
      this.mapData.forEach(m => {
        let str = m.context.map(item => `<p>${item}</p>`).join('')
        console.log(str)
        var marker = new maptalks.ui.UIMarker(m.point, {
          draggable: false,
          single: false,
          content: `
            <div class="border-4">
              <div class="title3">${m.title}</div>
              <div class="action-marker-content mt30">${str}</div>
            </div>
          `
        })
        labels2.push(marker)
        marker.addTo(map.getLayer('linesLayer'))
      })
    },
    renderPois() {
      this.pois.forEach(item => {
        new maptalks.Marker(item[0], {
          properties: {
            // name: m.name
          },
          symbol: [
            {
              markerFile: require('../../../assets/imgs/map-dot.png'),
              markerWidth: 10,
              markerHeight: 10,
              markerDy: 5
            }
          ]
        }).addTo(map.getLayer('linesLayer'))

        new maptalks.Marker(item[1], {
          properties: {
            // name: m.name
          },
          symbol: [
            {
              markerFile: require('../../../assets/imgs/map-dot.png'),
              markerWidth: 10,
              markerHeight: 10,
              markerDy: 5
            }
          ]
        }).addTo(map.getLayer('linesLayer'))
      })
    },
    renderLines() {
      this.lines.forEach(item => {
        var line = new maptalks.LineString(item, {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#00ffff',
            lineWidth: 3,
            lineOpacity: 1
          }
        })

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
      })
    },
    renderPicMarkers() {
      this.picLabels.forEach(item => {
        new maptalks.Marker(item.point, {
          properties: {
            // name: m.name
          },
          symbol: [
            {
              markerFile: item.picUrl,
              markerWidth: 203,
              markerHeight: 142,
              markerDy: 100
            }
          ]
        }).addTo(map.getLayer('linesLayer'))
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
  box-sizing: border-box;
  background: url('../../../assets/imgs/border-1.png');
  background-size: 100% 100%;
  padding: 40px 0 0 40px;
  line-height: 40px;
}
/deep/.title3 {
  font-size: 34px;
  font-family: SourceHanSansCNMedium;
  &::before {
    bottom: 5px;
    height: 30px;
    bottom: 5px;
  }
}
/deep/.action-marker-content {
  font-size: 31px;
  color: #fefefe;
  line-height: 48px;
  font-weight: normal;
  letter-spacing: 2px;
}
</style>
