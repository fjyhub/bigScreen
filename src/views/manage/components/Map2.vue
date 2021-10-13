<template>
  <div class="map" id="map"></div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as apis from '@/service/technology'
import * as maptalks from 'maptalks'
import { page1, page2, page3, page4 } from './../../../data/data.js'

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

    apis.mapGetData().then(res => {
      this.mapGetData = res.data
      this.switchPage1()
    })
    //
  },
  watch: {
    index: {
      handler: function(old, newVal) {
        switch (this.index) {
          case 0:
            this.switchPage1()
            break
          case 1:
            this.switchPage2()
            break
          case 2:
            this.switchPage3()
            break
          case 3:
            this.switchPage4()
            break
          default:
            break
        }
      },
      deep: true
    }
  },
  methods: {
    initMap() {
      map = new maptalks.Map('map', {
        center: [120.5, 28.8],
        zoom: 8.2,
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
          url: './images/mapa.png',
          extent: [118, 27, 123, 31],
          opacity: 1
        }
      ])
      map.addLayer(imageLayer)
    },

    //轨迹线
    playLines() {
      let that = this
      if (!map.getLayer('linesLayer')) {
        new maptalks.VectorLayer('linesLayer').addTo(map)
      }

      var line1 = new maptalks.LineString(
        [
          [119.45169618320108, 27.731004995235338],
          [119.56851541186347, 28.21812111007435],
          [120.0307816830267, 28.480100317274747],
          [119.99748367576626, 28.69065050435856],
          [119.96319574224981, 28.725347270873698],
          [120.01194712475262, 28.7772595557511],
          [119.8907645005479, 29.22957389936002],
          [119.80721653138858, 29.359865189968417],
          [119.84658398780903, 29.405855863465348]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#ef1111',
            lineWidth: 6,
            lineOpacity: 0.8
          }
        }
      )

      var line2 = new maptalks.LineString(
        [
          [119.50954447433367, 27.726515682572966],
          [119.50810456111458, 27.745730177746026],
          [119.63545948515298, 28.21661969940706],
          [120.09393721169113, 28.466916860572923],
          [120.051485570345, 28.679204541831922],
          [119.99205327246045, 28.704151373215353],
          [120.0699452190297, 28.774021558207522],
          [119.93942469618503, 29.238652787445773],
          [119.86192839312957, 29.355582594174138],
          [119.88475433889835, 29.404001173501086]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#ef1111',
            lineWidth: 6,
            lineOpacity: 1
          }
        }
      )

      var line3 = new maptalks.LineString(
        [
          [121.32910776523522, 30.821381978368862],
          [121.02587064371517, 30.773971835374397],
          [120.53190514400058, 30.6222778875792],
          [120.09044901211712, 30.66409962042846],
          [119.98308494792093, 30.66203497815613],
          [119.84707642658782, 30.613881022353922],
          [119.71218956053019, 30.16851730274564],
          [119.78111978152083, 30.036390089406922],
          [119.94837463892418, 29.507333987599935],
          [119.94837463892418, 29.507333987599935],
          [119.88655616430242, 29.412907858214652]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#ef1111',
            lineWidth: 6,
            lineOpacity: 1
          }
        }
      )
      var line4 = new maptalks.LineString(
        [
          [121.28493451292502, 30.85063861297087],
          [120.97363163207842, 30.78597403677665],
          [120.51428709245442, 30.640083187358954],
          [120.11962580748309, 30.682454923640222],
          [119.97012517862709, 30.678265198296998],
          [119.81712031397012, 30.602757766442068],
          [119.66026250278787, 30.16075820074306],
          [119.7406827791965, 30.027788060104484],
          [119.90903378943017, 29.497646085718685],
          [119.85682067452979, 29.42219180251422]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#ef1111',
            lineWidth: 6,
            lineOpacity: 1
          }
        }
      )

      var line5 = new maptalks.LineString(
        [
          [119.77060248243265, 30.817818886074264],
          [119.88683125399461, 30.796295067245552],
          [119.96460689220817, 30.711076082748235],
          [120.09786991615397, 30.695566017141715],
          [120.10468257757486, 30.675186503524202]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#ef1111',
            lineWidth: 6,
            lineOpacity: 1
          }
        }
      )

      var line6 = new maptalks.LineString(
        [
          [119.74149115338105, 30.802807623447592],
          [119.86014148741992, 30.782450515072213],
          [119.9383912152623, 30.69642257402839],
          [120.10468257757486, 30.675186503524202]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#ef1111',
            lineWidth: 6,
            lineOpacity: 1
          }
        }
      )

      line1.addTo(map.getLayer('linesLayer'))
      line2.addTo(map.getLayer('linesLayer'))
      line3.addTo(map.getLayer('linesLayer'))
      line4.addTo(map.getLayer('linesLayer'))
      line5.addTo(map.getLayer('linesLayer'))
      line6.addTo(map.getLayer('linesLayer'))

      function replay() {
        //line's animateShow
        line1.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // console.log('finished')
              //  line.hide()
              replay2()
            }
          }
        )
        line2.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // console.log('finished')
            }
          }
        )
        line3.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // console.log('finished')
            }
          }
        )
        line4.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // console.log('finished')
            }
          }
        )
        line5.animateShow(
          {
            duration: 1500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // console.log('finished')
            }
          }
        )
        line6.animateShow(
          {
            duration: 1500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // console.log('finished')
            }
          }
        )
      }

      var line7 = new maptalks.LineString(
        [
          [119.979695142825, 28.731825913813935],
          [119.45088549286459, 28.242829381347093],
          [119.16247340259997, 28.14214125073451]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )
      var line8 = new maptalks.LineString(
        [
          [119.9993809602031, 28.700508784411994],
          [120.23875773632142, 28.03089626284529],
          [119.99317893031298, 27.852251351391914]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
           lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )

      var line9 = new maptalks.LineString(
        [
          [119.98627152448285, 28.713023258631637],
          [121.00941928822647, 29.070245460209293],
          [121.30088804848288, 28.941136243636976]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )

      var line10 = new maptalks.LineString(
        [
          [119.86988984093728, 29.400718044387446],
          [119.86519069492863, 29.12237511850745],
          [119.64353937177816, 29.13545135146441]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
           lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )
      var line11 = new maptalks.LineString(
        [
          [119.85626182544672, 29.400718044387446],
          [119.07345077142224, 29.253933481581413],
          [118.86097078252396, 29.08976129374517]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
           lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )

      var line12 = new maptalks.LineString(
        [
          [119.8699384214217, 29.393998323187617],
          [120.53171889994928, 29.90392402303084],
          [120.7951613809355, 29.840504553022782]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )

      var line13 = new maptalks.LineString(
        [
          [119.85647626088053, 29.373866577243547],
          [121.53875349824364, 29.967742589336893],
          [121.84733111566425, 29.96063181483899]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )

      var line14 = new maptalks.LineString(
        [
          [119.85626182544672, 29.400718044387446],
          [122.76504891240666, 29.98910476864873],
          [122.62045027410647, 30.21250127381981]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )

      var line15 = new maptalks.LineString(
        [
          [120.02855307042637, 30.704808200936867],
          [120.11386665907594, 30.30764741998675],
          [119.70490077287184, 29.918071307762347],
          [119.4363396460817, 29.98910476864873]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )
      var line16 = new maptalks.LineString(
        [
          [119.99930956797948, 30.689544987680137],
          [120.0214223475133, 30.86641321297472],
          [120.2625055171959, 30.704808200936867]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
            lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )
      var line17 = new maptalks.LineString(
        [
          [120.00660678975146, 30.66669144223451],
          [120.96965840426469, 30.523092876120387]
        ],
        {
          visible: false,
          arrowStyle: '',
          arrowPlacement: '',
          symbol: {
           lineColor: '#23DAFF',
            lineWidth: 5,
            lineOpacity: 1
          }
        }
      )

      line7.addTo(map.getLayer('linesLayer'))
      line8.addTo(map.getLayer('linesLayer'))
      line9.addTo(map.getLayer('linesLayer'))
      line10.addTo(map.getLayer('linesLayer'))
      line11.addTo(map.getLayer('linesLayer'))
      line12.addTo(map.getLayer('linesLayer'))
      line13.addTo(map.getLayer('linesLayer'))
      line14.addTo(map.getLayer('linesLayer'))
      line15.addTo(map.getLayer('linesLayer'))
      line16.addTo(map.getLayer('linesLayer'))
      line17.addTo(map.getLayer('linesLayer'))

      function replay2() {
        //line's animateShow
        line7.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              line1.hide()
              line2.hide()
              line3.hide()
              line4.hide()
              line5.hide()
              line6.hide()
              line7.hide()
              line8.hide()
              line9.hide()
              line10.hide()
              line11.hide()
              line12.hide()
              line13.hide()
              line14.hide()
              line15.hide()
              line16.hide()
              line17.hide()

              that.renderPage1Infos()
            }
          }
        )
        line8.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )
        line9.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )
        line10.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )
        line11.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )

        line12.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )
        line13.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )
        line14.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )
        line15.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )
        line16.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )
        line17.animateShow(
          {
            duration: 3500,
            easing: 'out'
          },
          function(frame) {
            if (frame.state.playState === 'finished') {
              // line4.hide()
              // that.renderPage1Infos()
            }
          }
        )
      }

      // var targetStyles = {
      //   symbol: {
      //     lineColor: '#fff',
      //     lineWidth: 60,
      //     lineOpacity: 0
      //   }
      // }

      // // animate by maptalks.animation.Animation
      // var player = maptalks.animation.Animation.animate(
      //   targetStyles,
      //   {
      //     duration: 1500,
      //     easing: 'out'
      //   },
      //   // callback of each frame
      //   function step(frame) {
      //     if (frame.state.playState === 'running') {
      //       line.updateSymbol(frame.styles.symbol)
      //     }
      //   }
      // )

      // player.play()
      replay()
    },
    renderPage1Labels() {
      page1.labels.forEach(element => {
        new maptalks.Marker(element.point, {
          properties: {
            name: element.name
          },
          symbol: [
            {
              markerFile: './images/label-icon.png',
              markerWidth: 86,
              markerHeight: 97
            },
            {
              textFaceName: 'sans-serif',
              textName: '{name}',
              textSize: 28,
              textFill: '#fff',
              textDy: -77,
              textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 3
            }
          ]
        }).addTo(map.getLayer('page1layer'))
      })
    },
    renderPage1Infos() {
      page1.light.forEach(item => {
        new maptalks.Marker(item.point, {
          symbol: {
            markerFile: './images/light.png',
            markerWidth: 47,
            markerHeight: 57,
            markerDx: 0,
            markerDy: 0,
            markerOpacity: 1
          }
        }).addTo(map.getLayer('page1layer'))
      })

      page1.wind.forEach(item => {
        new maptalks.Marker(item.point, {
          symbol: {
            markerFile: './images/wind.png',
            markerWidth: 47,
            markerHeight: 57,
            markerDx: 0,
            markerDy: 0,
            markerOpacity: 1
          }
        }).addTo(map.getLayer('page1layer'))
      })

      labels1 = []
      page1.infos.forEach(item => {
        let windInstalledAmount = ''
        let photovoltaicPower = ''

        this.mapGetData.forEach(dataItem => {
          if (item.cityCode === dataItem.cityCode) {
            windInstalledAmount = dataItem.windInstalledAmount
            photovoltaicPower = dataItem.photovoltaicInstalledAmount
          }
        })

        var marker = new maptalks.ui.UIMarker(item.point, {
          draggable: false,
          single: false,
          content: `<div class="text_marker"><h2>风电:</h2><h3>${windInstalledAmount}<span>kW</span></h3><h2>光伏:</h2><h3>${photovoltaicPower}<span>kW</span></h3></div>`
        })
        labels1.push(marker)
        marker.addTo(map.getLayer('page1layer'))
      })
    },
    switchPage1() {
      map
        .getLayer('images')
        .setImages([{ url: './images/mapa.png', extent: [118, 27, 123, 31], opacity: 1 }])
      map.removeLayer(map.getLayer('page1layer'))
      map.removeLayer(map.getLayer('page2layer'))
      map.removeLayer(map.getLayer('page3layer'))
      map.removeLayer(map.getLayer('page4layer'))

      if (!map.getLayer('page1layer')) {
        new maptalks.VectorLayer('page1layer', { enableAltitude: true }).addTo(map)
      }

      this.playLines()
      this.renderPage1Labels()
      // this.renderPage1Infos()
    },
    switchPage2() {
      labels1.forEach(item => {
        item?.remove()
      })
      map
        .getLayer('images')
        .setImages([{ url: './images/mapb.png', extent: [118, 27, 123, 31], opacity: 1 }])
      map.removeLayer(map.getLayer('page1layer'))
      map.removeLayer(map.getLayer('page2layer'))
      map.removeLayer(map.getLayer('page3layer'))
      map.removeLayer(map.getLayer('page4layer'))
      if (!map.getLayer('page2layer')) {
        new maptalks.VectorLayer('page2layer', { enableAltitude: true }).addTo(map)
      }
      page2.labels.forEach(element => {
        new maptalks.Marker(element.point, {
          properties: {
            name: element.name
          },
          symbol: [
            {
              markerFile: './images/label-icon.png',
              markerWidth: 86,
              markerHeight: 97
            },
            {
              textFaceName: 'sans-serif',
              textName: '{name}',
              textSize: 28,
              textFill: '#fff',
              textDy: -77,
              textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 3
            }
          ]
        }).addTo(map.getLayer('page2layer'))
      })

      labels2 = []
      page2.infos.forEach(item => {
        let rate = ''
        this.mapGetData.forEach(dataItem => {
          if (item.cityCode === dataItem.cityCode) {
            rate = dataItem.demandResponseRate
          }
        })

        var marker = new maptalks.ui.UIMarker(item.point, {
          draggable: false,
          single: false,
          content: `<div class="page2_marker"><h2>需求响应度:</h2><h3>${rate}%</h3></div>`
        })
        labels2.push(marker)
        marker.addTo(map.getLayer('page2layer'))
      })
    },
    switchPage3() {
      labels1.forEach(item => {
        item?.remove()
      })
      labels2.forEach(item => {
        item?.remove()
      })
      map.removeLayer(map.getLayer('page1layer'))
      map.removeLayer(map.getLayer('page2layer'))
      map.removeLayer(map.getLayer('page3layer'))
      map.removeLayer(map.getLayer('page4layer'))
      console.log(map.getLayer('page3layer'))

      if (!map.getLayer('page3layer')) {
        new maptalks.VectorLayer('page3layer', { enableAltitude: true }).addTo(map)
      }
      page3.labels.forEach(element => {
        new maptalks.Marker(element.point, {
          properties: {
            name: element.name
          },
          symbol: [
            {
              markerFile: './images/label-icon.png',
              markerWidth: 86,
              markerHeight: 97
            },
            {
              textFaceName: 'sans-serif',
              textName: '{name}',
              textSize: 28,
              textFill: '#fff',
              textDy: -77,
              textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 3
            }
          ]
        }).addTo(map.getLayer('page3layer'))
      })
      labels3 = []
      page3.infos.forEach(item => {
        let rate = ''
        this.mapGetData.forEach(dataItem => {
          if (item.cityCode === dataItem.cityCode) {
            rate = dataItem.lineLossRate
          }
        })
        var marker = new maptalks.ui.UIMarker(item.point, {
          draggable: false,
          single: false,
          content: `<div class="page3_marker"><h2>综合线损率:</h2><h3>${rate}%</h3></div>`
        })
        labels3.push(marker)
        marker.addTo(map.getLayer('page3layer'))
      })
    },
    //高自愈
    switchPage4() {
      // map.animateTo(
      //   {
      //     center: [120.5, 29],
      //     zoom: 8,
      //     pitch: 20,
      //     bearing: 0
      //   },
      //   {
      //     duration: 3000
      //   }
      // )
      labels1.forEach(item => {
        item?.remove()
      })
      labels3.forEach(item => {
        item?.remove()
      })
      map.removeLayer(map.getLayer('page1layer'))
      map.removeLayer(map.getLayer('page2layer'))
      map.removeLayer(map.getLayer('page3layer'))
      map.removeLayer(map.getLayer('page4layer'))

      map
        .getLayer('images')
        .setImages([{ url: './images/mapc.png', extent: [118, 27, 123, 31], opacity: 1 }])
      if (!map.getLayer('page4layer')) {
        new maptalks.VectorLayer('page4layer').addTo(map)
      }
      let iconList = [
        {
          url: './images/lightning.png',
          w: 50,
          h: 50
        },
        {
          url: './images/lightning2.png',
          w: 50,
          h: 50
        },
        {
          url: './images/shield.png',
          w: 64,
          h: 78
        }
      ]

      page4.states.forEach(item => {
        new maptalks.Marker(item.point, {
          properties: {
            altitude: 400
          },
          symbol: {
            markerFile: iconList[item.type].url,
            markerWidth: iconList[item.type].w,
            markerHeight: iconList[item.type].h,
            markerDx: 0,
            markerDy: 0,
            markerOpacity: 1
          }
        }).addTo(map.getLayer('page4layer'))
      })

      page4.labels.forEach(element => {
        new maptalks.Marker(element.point, {
          properties: {
            name: element.name
          },
          symbol: [
            {
              markerFile: './images/label-icon.png',
              markerWidth: 86,
              markerHeight: 97
            },
            {
              textFaceName: 'sans-serif',
              textName: '{name}',
              textSize: 28,
              textFill: '#fff',
              textDy: -77,
              textWeight: 'bold',
              textHaloFill: '#000',
              textHaloRadius: 3
            }
          ]
        }).addTo(map.getLayer('page4layer'))
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
</style>
