<template>
  <div class="map" id="map"></div>
</template>
<script>
import * as echarts from 'echarts'
// import 'echarts-gl
import axios from 'axios'
var myChart
export default {
  data() {
    return {}
  },
  mounted() {
    var chartDom = document.getElementById('map')
    myChart = echarts.init(chartDom)
    this.initChart()
  },
  methods: {
    async initChart() {
      const mapJson = await axios.get('/map/330300.json').then(res => res.data)
      echarts.registerMap('zhejiang', mapJson)

      var label =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAA7CAYAAADhPH1zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZGM0NBQUI1ODMyRjExRUJCQ0JCODRBMTg1NDM0ODFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZGM0NBQUI2ODMyRjExRUJCQ0JCODRBMTg1NDM0ODFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkYzQ0FBQjM4MzJGMTFFQkJDQkI4NEExODU0MzQ4MUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkYzQ0FBQjQ4MzJGMTFFQkJDQkI4NEExODU0MzQ4MUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ebL+rAAAXS0lEQVR42txb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'

      let option = {
        geo3D: {
          map: 'zhejiang',
          show: false
        },
        series: [
          {
            type: 'map3D',
            map: 'zhejiang',
            coordinateSystem: 'geo3D',
            zlevel: -10,
            boxWidth: 80,
            boxHeight: 30, //4:没有bar. 30:有bar,bar最高度30，按比例分配高度
            regionHeight: 2,
            shading: 'color',
            colorMaterial: {
              detailTexture: './images/mapc.png', // 纹理贴图 格式支持（string, HTMLImageElement, HTMLCanvasElement）
              textureTiling: 1,
              roughness: 0
            },
            label: {
              show: true,
              distance: 10,
              padding: [4, 8],
              color: '#fff',
              backgroundColor: '#084f56',
              borderColor: '#4fcbb7',
              borderWidth: 1,
              borderRadius: 6,
              textStyle: {
                align: 'left',
                //   lineHeight: 40,
                fontSize: 32
              }
            },

            itemStyle: {
              // color: [0, 0, 0, 1],
              opacity: 1,
              borderWidth: 1,
              borderColor: '#1cccff'
            },
            emphasis: {
              itemStyle: {
                // color: [0, 0, 0, 0],
                opacity: 1,
                borderWidth: 0,
                borderColor: '#1cccff'
              }
            },
            viewControl: {
              projection: 'orthographic',
              autoRotate: false,
              damping: 0,
              rotateSensitivity: 2, //旋转操作的灵敏度
              rotateMouseButton: 'left', //旋转操作使用的鼠标按键
              zoomSensitivity: 2, //缩放操作的灵敏度
              panSensitivity: 1, //平移操作的灵敏度
              panMouseButton: 'right', //平移操作使用的鼠标按键

              distance: 1000, //默认视角距离主体的距离
              minDisstance: 1000,
              maxDisstance: 1000,

              center: [0, 0, 0],
              alpha: 30,
              minAlpha: 20,
              maxAlpha: 50,
              beta: 0,
              animation: true,
              animationDurationUpdate: 1000,
              animationEasingUpdate: 'cubicInOut'
            },

            data: []
          },
          {
            name: 'aa',
            type: 'lines3D',
            coordinateSystem: 'geo3D',
            zlevel: -9, //设置这个才会有轨迹线的小尾巴
            polyline: true,
            effect: {
              show: true,
              period: 5, //特效动画的时间，单位为 s
              trailLength: 0.9, //特效尾迹的长度。0~1数值越大尾迹越长
              color: '#64f2ff',
              symbol: 'arrow', //箭头图标
              symbolSize: 10 //图标大小
            },
            blendMode: 'lighter',
            lineStyle: {
              normal: {
                color: '#ff7e00', //线条颜色
                width: 8,
                curveness: 0.5,
                shadowColor: '#fff'
              }
            },
            data: [
              {
                coords: [
                  [119.55322265624999, 27.566721430409707],
                  [119.564208984375, 27.848790459862073],
                  [119.6136474609375, 28.256005619824972],
                  [119.65209960937501, 28.695406284421967],
                  [119.70703125, 29.075375179558346],
                  [119.74548339843751, 29.511330027309146],
                  [119.73999023437499, 29.816816857649936],
                  [119.9981689453125, 30.149877316442065]
                ],
                value: 8
              },
              {
                coords: [
                  [119.454345703125, 27.839076094777816],
                  [119.937744140625, 28.58452171937042],
                  [120.13549804687501, 28.998531814051795],
                  [120.32226562500001, 29.22889003019423],
                  [120.684814453125, 29.52567042617583],
                  [120.82763671875, 29.69759650228319],
                  [121.00341796874999, 29.92637417863576],
                  [121.10229492187501, 30.050076521698735]
                ],
                value: 5
              }
            ]
          },
          {
            name: 'lable',
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            // symbol: img,
            // symbolSize: [50, 20],
            hoverAnimation: true,
            zlevel: -8,
            label: {
              show: true,
              color: '#fff',
              backgroundColor: '#084f56',
              borderColor: '#4fcbb7',
              borderWidth: 1,
              borderRadius: 6,
              textStyle: {
                align: 'left',
                lineHeight: 40,
                fontSize: 32
              },
              //   formatter(params) {
              //     let arr = ['风电：', '319MW', '光伏：', '239MW']
              //     return arr.join('\n')
              //   },
              formatter: function(params) {
                //   var name = params.name;
                //   var value = params.value[2];
                var text = `{a|风电：}\n{b|319MW}\n{a|光伏：}\n{b|239MW}`
                return text
              },
              rich: {
                a: {
                  padding: [0, 10],
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 400
                },
                b: {
                  padding: [0, 20],
                  color: 'yellow',
                  fontSize: 28,
                  fontWeight: 400
                }
              }
            },

            itemStyle: {
              normal: {
                color: 'transparent', //标志颜色
                opacity: 1
              }
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            data: [
              {
                // 数据项的名称
                name: '数据2',
                // 数据项值
                value: [120.7532, 27.7054, 0]
              }
            ]
          },
          {
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            zlevel: -8,
            symbol: 'pin',
            symbolSize: [50, 80],
            rippleEffect: {
              //坐标点动画
              period: 3,
              scale: 5,
              brushType: 'fill'
            },
            label: {
              show: false
            },

            itemStyle: {
              //坐标点颜色
              normal: {
                show: true,
                // color: "yellow",
                shadowBlur: 20,
                shadowColor: '#fff'
              },
              emphasis: {
                areaColor: '#f00'
              }
            },
            data: [
              {
                // 数据项的名称
                name: '数据1',
                // 数据项值
                value: [119.0132, 28.054, 0]
              }
            ]
          }
        ]
      }

      myChart.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
.map {
  width: 100%;
  height: 100%;
  //   background: url('/bg.jpg');
}
</style>
