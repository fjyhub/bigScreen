<!--  -->
<template>
  <div>
    <div>
      <div class="map-title">义乌 2018.12 - 2019.12</div>
      <div class="between power-num">
        <div>
          <div class="color-fff fz16 pb10">负荷（万kW）</div>
          <div class="fz50">999</div>
        </div>
        <div>
          <div class="color-fff fz16 pb10">电量（亿KWh）</div>
          <div class="fz50">999</div>
        </div>
        <div>
          <div class="color-fff fz16 pb10">GDP（亿元）</div>
          <div class="fz50">999</div>
        </div>
      </div>
    </div>
    <div id="main" style="width: 840px; height: 550px"></div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import cityMap from './location'
import * as Echarts from 'echarts'
import axios from 'axios'
var myChart
export default {
  name: 'Map',
  data() {
    return {
      curMap: {},
      mapStack: [],
      temp: {}
    }
  },

  components: {},

  computed: {},

  mounted() {
    myChart = Echarts.init(document.getElementById('main'), 'dark')

    this.loadMap('330000', 'zhejiang')
  },

  methods: {
    async loadMap(mapCode, mapName) {
      const mapJson = await axios.get('/citys/' + mapCode + '.json').then(res => res.data)
      if (mapJson) {
        Echarts.registerMap(mapName, mapJson)
        var option = {
          tooltip: {
            trigger: 'item',
            formatter: '{b}'
          },
          visualMap: {
            show: false,
            type: 'piecewise',
            right: '10',
            bottom: '30',
            itemWidth: 30,
            // orient: 'horizontal',
            min: -1,
            max: 100,
            text: ['较低', '较高'],
            textStyle: {
              color: '#fff'
            },
            inRange: {
              color: ['skyblue', 'blue']
            }
          },
          series: [
            {
              name: '',
              type: 'map',
              mapType: mapName,
              selectedMode: 'multiple',
              zoom: 1.2,
              roam: true,
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data: [
                { name: '湖州市', value: 50 },
                { name: '杭州市', value: 20 },
                { name: '衢州市', value: 0 },
                { name: '丽水市', value: 0 },
                { name: '温州市', value: 30 },
                { name: '台州市', value: 0 },
                { name: '金华市', value: 0 },
                { name: '宁波市', value: 0 },
                { name: '绍兴市', value: 0 },
                { name: '嘉兴市', value: 0 }
              ],
              itemStyle: {
                normal: {
                  areaColor: '#101f32',
                  borderWidth: 3,
                  textStyle: {
                    color: '#fff'
                  },
                  borderColor: '#00E7FD' //地图边框颜色
                },
                emphasis: {
                  color: '#fff',
                  areaColor: '#069'
                }
              }
            }
          ]
        }
        myChart.setOption(option, true)
        // 存储当前地图的信息
        this.curMap = {
          mapCode: mapCode,
          mapName: mapName
        }
        myChart.on('mapselectchanged', params => {
          var name = params.batch[0].name
          var mapCode = cityMap[name]
          if (!mapCode) {
            Message.warning('无此区域地图显示')
            return
          }
          this.loadMap(mapCode, name)
          // 将上一级地图信息压入mapStack
          this.mapStack.push({
            mapCode: this.curMap.mapCode,
            mapName: this.curMap.mapName
          })
        })
      } else {
        Message.warning('无法加载该地图')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.map-title {
  font-size: 30px;
  text-align: center;
}
.power-num {
  padding: 30px 130px;
}
</style>
