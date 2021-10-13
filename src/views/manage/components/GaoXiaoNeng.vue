<!--  -->
<template>
  <div>
    <div class="card-title">
      <span><img src="../../../assets/imgs/1028.png" alt="" /></span>
      四高能力
    </div>
    <div class="fz34 fw600 ta-center chart-title" style="color: #00ECF2">
      综合线损率
      <h4 class="sub-title">
        单位：%
      </h4>
    </div>

    <div id="bar1" style="width: 660px;height: 370px" ref="bar1"></div>
    <div class="fz34 fw600 ta-center chart-title" style="color: #00ECF2">
      万元GDP能耗
      <span class="sub-title">
        单位：吨标煤
      </span>
    </div>

    <div id="bar2" style="width: 660px;height: 370px;"></div>
  </div>
</template>

<script>
import * as Echarts from 'echarts'
export default {
  props: {
    provinceGetData: {
      require: true,
      type: Object
    }
  },
  data() {
    return {
      zhxslChart: null,
      gdpChart: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    // this.zhxslChart = Echarts.init(document.getElementById('bar1'), 'dark')
    this.zhxslChart = Echarts.init(this.$refs.bar1, 'dark')

    this.loadZhxslChart()
    this.gdpChart = Echarts.init(document.getElementById('bar2'), 'dark')
    this.loadGdpChart()
  },

  methods: {
    loadZhxslChart() {
      let img1 =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAmCAYAAAB3c5OxAAADHUlEQVRoQ+3azW9UZRQG8N975wMNivEDtG2MroxKlERYwAYTNwZNlaLIQlBMSuJfoFsX/gsaF64IfgTXNRoSKSHiRwSDWCgsVcSPKkIt0E7nvmbu0DIzduhYrelM567unfu+7znPec55753z3KDmiAfl3eV5wS7BesEqUVI7pi3Og1Q0Ljom9Y5L9oYNSjO+h5mT+I37Fe0XPNQWwP6ZkyeV7QgP+rYyLQOdAV7hMO7I1orOS32m7Ofsqv2OIGeNxCbBbbOYokfDA06EGOWccRTrMoBl7zvnbWWT7Ye1weNEUY+X5O3MCI5Gla0L8aRdcvZmw0ve86M32h5sI4A+g/J2Zz+X7QnxtCE8gT+c9axpVzoOdIXxu+2/Wr6fhDjqB0Gf1Ee+93rHAZ4B1OcVeU/h1wrTF7DKlH3OeatjQfd6UcEeweXlA7rHTkUvd0F3fHp3mV4uG1mX6S7THfyc7qZ3N7276d1Zr+Hdmu7WdLemO6ume+1WMFj9a7l8Oievyuuvdk5GfSjY0tE9soKCXh9c65HVdkOnveusNzsrr9FrUKG2G1qRcnocFTy8bPreTRSO36WOiH5RcsaYL6WmlnwGFNzoVuvl3CexWi5TOKqqTaXFndqcKRwtaVnRpSwIJcN+8/mS6o3f7F4rbVSwUZKpNIW/kROdknquTsuaBX5NtXxB8EgT1fKK1BemDBtzRNnE/5oBM2xWQW6SuHMO+xX97aLoa6l9TVXLuRyPx62U069om9QWwU0N46akvsoCcNFhl40vSgBaY/M7iSGTDkgcCGv92cyX2fSez9l40A1We1LBVlG/4Ja6OdG01DHThl3IAnB+vjWb3m+NzUnRp6IhqY/DWiOt2msZdO2CcURR9Li8rYKncXuDwVTqeLYHjDtkwti8Dv3HbF7P3oJA1wWgug88JhgQbMOaOoOVrwLKRpQcMm7YhJ+y+4vM5qKCrgvAaxI7bL4agGfQ12A8Sp3GhCR7L5hrp225NufNniYD/jXTzQzHigh+KntODmC74J4mYxdcm0sOdKND8YQNigZE27Gi1Z12ocCuN+8v8N+WySml2ikAAAAASUVORK5CYII='

      let img2 =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAmCAYAAAB3c5OxAAADY0lEQVRoQ+3ab6iecxwG8M/PyMi/N7YXGpLE8ieFLVNCvMEwWSlaeyFvbOUFL7G12quliL1T5I2kRPmb2CYSSliGTUzYNEr+/711nfN77HmeHs7Z2cHZfe5fnTrnfu7nfn7X97qu732e73UX/atp5mARbsIFmI+DB845MP74HV/jDTyIp5TyW2/r5S8MTXMU7sWN2Hv8wAA50S5fwAqlfJYTx8E1zWF4HJfVd/+IN/EJfp7oijPw9Sh2Ac7FERXn+7hQKbuLpgnwO3AX/sC7WIfPZyCYfd3S0bgVFyGFeAzXBfSxldG52IbVCNNtWQdhzRjL48peHNDx8EP4Fbfj9bag7cORhvwwYuMNAX0PVuErXB2HtxB0IN2HM7E5oB+JzrEdK1sKOLAi8YvxTkA/imtnAeg7cQm2dqBbLu+O6c7TLe7enbw7eXfyblcFOk93nm6XogfQdPKelfKeLd+n19ZZ2dj36Yx9b8EeXNPiycn9OKM3OenNyH7BbXX027Z+Nq/OyA7H3WE6Bz5GpqHv1WnoTy1CnQloxtsZA+f383tz7xzM7Dtz77ewHl+0AHjm3rHupTWeSqCxrD/heLLOkIL1hzoKjgIShbxWp6UzvQ7H4GycgONrLpe4Kjg/qAnHruEsayOuH5FlZfj/Nl6qBfhyhqDPIP/kGt8sxmnVpsPb24wblPLp3iyrd8p4arkEN1cPxO851r/i9614Ea9i939cgLB5Fs5LWoEkNAHfv2LTpJZR6AN4YnRqOWrnTZPmliIsw1U4bkQBEoylAK/8S/lXAJ1U2UyMvBDpwv0rAcWHeBrP5raklO//jozJR7LjyWYqmxRkKU4cumjSzfimp4AxKU1xpQGdXj2Zz0wsM6y4b2uhAzQ/H/Wz+U+fO3nQA3UdK8A5NSS4vPqq/4wUYEftAS9j5wTgw2ai1Z5kw+aRI9hMCvNcZXMLvlHKPsdQUwM9WIBYIB5LNHQFThlqhAkGU4BNyEaTeWejARVwYTKyjXVGsRlfPlPZ3K6U/BO1X2v/QQ8W4NAqy+W4EqcOFSCPQOQ2GGnGp5HxsDfz+vMVaFSyZypsTr+8J1PnpjmkMhkFpAmG1eEumyt9V58N6bG5bTrY/H9ADyogD+vkHpq7QCwQaUfq8ecWpeyaTB2n65w/Aeq0If7Zu4yPAAAAAElFTkSuQmCC'
      const option = {
        xAxis: {
          type: 'category',
          splitLine: {
            show: false // 是否显示坐标得横纵线
          },
          axisLabel: {
            fontSize: 30,
            // fontWeight: 600,
            color: function(param, index) {
              let color = ['#FFF100', '#00FFFF', '#00FFFF']
              return color[index]
            }
          },
          data: ['浙江', '韩国', '德国']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            formatter: '{value}{b|%}',
            color: '#fff',
            fontSize: 20,
            rich: {
              a: {},
              b: {
                fontSize: 16
              }
            }
          }
        },
        grid: {
          show: false
        },
        series: [
          {
            data: [
              {
                value: 3.7,
                itemStyle: {
                  color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: '#DC7302' },
                    { offset: 0.5, color: '#F2DB1C' },
                    { offset: 0, color: '#F9F35F' }
                  ])
                }
              },
              2.7,
              1.3
            ],
            type: 'bar',
            z: 2,
            barWidth: 54,
            itemStyle: {
              normal: {
                label: {
                  formatter: data => {
                    return data?.value + '%'
                  },
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  offset: [0, -10],
                  //数值样式
                  color: '#fff',
                  fontSize: 20
                },
                // barBorderRadius: [10, 10, 0, 0],
                color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: '#06A06F' },
                  { offset: 0, color: '#3EDAE8' }
                ])
              }
            }
          },
          {
            z: 1,
            type: 'pictorialBar',
            symbolPosition: 'end',
            // data: [3.7, 2.7, 1.3],

            symbolOffset: [0, -40],
            symbolSize: [60, 30],
            data: [
              {
                value: 3.7,
                symbol: img1
              },
              {
                value: 2.7,
                symbol: img2
              },
              {
                value: 1.3,
                symbol: img2
              }
            ]
          }
        ]
      }
      this.zhxslChart.setOption(option)
    },
    loadGdpChart() {
      let img1 =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAmCAYAAAB3c5OxAAADHUlEQVRoQ+3azW9UZRQG8N975wMNivEDtG2MroxKlERYwAYTNwZNlaLIQlBMSuJfoFsX/gsaF64IfgTXNRoSKSHiRwSDWCgsVcSPKkIt0E7nvmbu0DIzduhYrelM567unfu+7znPec55753z3KDmiAfl3eV5wS7BesEqUVI7pi3Og1Q0Ljom9Y5L9oYNSjO+h5mT+I37Fe0XPNQWwP6ZkyeV7QgP+rYyLQOdAV7hMO7I1orOS32m7Ofsqv2OIGeNxCbBbbOYokfDA06EGOWccRTrMoBl7zvnbWWT7Ye1weNEUY+X5O3MCI5Gla0L8aRdcvZmw0ve86M32h5sI4A+g/J2Zz+X7QnxtCE8gT+c9axpVzoOdIXxu+2/Wr6fhDjqB0Gf1Ee+93rHAZ4B1OcVeU/h1wrTF7DKlH3OeatjQfd6UcEeweXlA7rHTkUvd0F3fHp3mV4uG1mX6S7THfyc7qZ3N7276d1Zr+Hdmu7WdLemO6ume+1WMFj9a7l8Oievyuuvdk5GfSjY0tE9soKCXh9c65HVdkOnveusNzsrr9FrUKG2G1qRcnocFTy8bPreTRSO36WOiH5RcsaYL6WmlnwGFNzoVuvl3CexWi5TOKqqTaXFndqcKRwtaVnRpSwIJcN+8/mS6o3f7F4rbVSwUZKpNIW/kROdknquTsuaBX5NtXxB8EgT1fKK1BemDBtzRNnE/5oBM2xWQW6SuHMO+xX97aLoa6l9TVXLuRyPx62U069om9QWwU0N46akvsoCcNFhl40vSgBaY/M7iSGTDkgcCGv92cyX2fSez9l40A1We1LBVlG/4Ja6OdG01DHThl3IAnB+vjWb3m+NzUnRp6IhqY/DWiOt2msZdO2CcURR9Li8rYKncXuDwVTqeLYHjDtkwti8Dv3HbF7P3oJA1wWgug88JhgQbMOaOoOVrwLKRpQcMm7YhJ+y+4vM5qKCrgvAaxI7bL4agGfQ12A8Sp3GhCR7L5hrp225NufNniYD/jXTzQzHigh+KntODmC74J4mYxdcm0sOdKND8YQNigZE27Gi1Z12ocCuN+8v8N+WySml2ikAAAAASUVORK5CYII='

      let img2 =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAmCAYAAAB3c5OxAAADY0lEQVRoQ+3ab6iecxwG8M/PyMi/N7YXGpLE8ieFLVNCvMEwWSlaeyFvbOUFL7G12quliL1T5I2kRPmb2CYSSliGTUzYNEr+/711nfN77HmeHs7Z2cHZfe5fnTrnfu7nfn7X97qu732e73UX/atp5mARbsIFmI+DB845MP74HV/jDTyIp5TyW2/r5S8MTXMU7sWN2Hv8wAA50S5fwAqlfJYTx8E1zWF4HJfVd/+IN/EJfp7oijPw9Sh2Ac7FERXn+7hQKbuLpgnwO3AX/sC7WIfPZyCYfd3S0bgVFyGFeAzXBfSxldG52IbVCNNtWQdhzRjL48peHNDx8EP4Fbfj9bag7cORhvwwYuMNAX0PVuErXB2HtxB0IN2HM7E5oB+JzrEdK1sKOLAi8YvxTkA/imtnAeg7cQm2dqBbLu+O6c7TLe7enbw7eXfyblcFOk93nm6XogfQdPKelfKeLd+n19ZZ2dj36Yx9b8EeXNPiycn9OKM3OenNyH7BbXX027Z+Nq/OyA7H3WE6Bz5GpqHv1WnoTy1CnQloxtsZA+f383tz7xzM7Dtz77ewHl+0AHjm3rHupTWeSqCxrD/heLLOkIL1hzoKjgIShbxWp6UzvQ7H4GycgONrLpe4Kjg/qAnHruEsayOuH5FlZfj/Nl6qBfhyhqDPIP/kGt8sxmnVpsPb24wblPLp3iyrd8p4arkEN1cPxO851r/i9614Ea9i939cgLB5Fs5LWoEkNAHfv2LTpJZR6AN4YnRqOWrnTZPmliIsw1U4bkQBEoylAK/8S/lXAJ1U2UyMvBDpwv0rAcWHeBrP5raklO//jozJR7LjyWYqmxRkKU4cumjSzfimp4AxKU1xpQGdXj2Zz0wsM6y4b2uhAzQ/H/Wz+U+fO3nQA3UdK8A5NSS4vPqq/4wUYEftAS9j5wTgw2ai1Z5kw+aRI9hMCvNcZXMLvlHKPsdQUwM9WIBYIB5LNHQFThlqhAkGU4BNyEaTeWejARVwYTKyjXVGsRlfPlPZ3K6U/BO1X2v/QQ8W4NAqy+W4EqcOFSCPQOQ2GGnGp5HxsDfz+vMVaFSyZypsTr+8J1PnpjmkMhkFpAmG1eEumyt9V58N6bG5bTrY/H9ADyogD+vkHpq7QCwQaUfq8ecWpeyaTB2n65w/Aeq0If7Zu4yPAAAAAElFTkSuQmCC'

      const option = {
        xAxis: {
          type: 'category',
          splitLine: {
            show: false // 是否显示坐标得横纵线
          },
          axisLabel: {
            fontSize: 30,
            // fontWeight: 600,
            color: function(param, index) {
              let color = ['#FFF100', '#00FFFF', '#00FFFF']
              return color[index]
            }
          },
          data: ['浙江', '韩国', '德国']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            formatter: '{value}',
            color: '#b7fdff',
            fontSize: 18
          }
        },
        grid: {
          show: false
        },
        series: [
          {
            data: [
              {
                value: 0.37,
                itemStyle: {
                  color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: '#DC7302' },
                    { offset: 0.5, color: '#F2DB1C' },
                    { offset: 0, color: '#F9F35F' }
                  ])
                }
              },
              0.24,
              0.26
            ],
            type: 'bar',
            z: 2,
            barWidth: 54,
            itemStyle: {
              normal: {
                label: {
                  formatter: data => {
                    return data?.value
                  },
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  offset: [0, -10],
                  //数值样式
                  color: '#fff',
                  fontSize: 20
                },
                // barBorderRadius: [10, 10, 0, 0],
                color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: '#06A06F' },
                  { offset: 0, color: '#3EDAE8' }
                ])
              }
            }
          },
          {
            z: 1,
            type: 'pictorialBar',
            symbolPosition: 'end',
            symbolOffset: [0, -40],
            symbolSize: [60, 30],
            //  data: [0.37, 0.24, 0.26],
            data: [
              {
                value: 0.37,
                symbol: img1
              },
              {
                value: 0.24,
                symbol: img2
              },
              {
                value: 0.26,
                symbol: img2
              }
            ]
          }
        ]
      }
      this.gdpChart.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
.card-title {
  font-size: 34px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 8px;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #00c0ff),
    color-stop(1, #b7fdff)
  );
  color: transparent;
  background-clip: text;
  span {
    letter-spacing: 1px !important;
  }
}
.chart-title {
  position: relative;
  text-align: left;
  text-indent: 1em;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #00c0ff),
    color-stop(1, #b7fdff)
  );
  color: transparent !important;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -ms-background-clip: text;
  &::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 3px;
    width: 5px;
    height: 30px;
    background: #00c0ff;
  }
}
.sub-title {
  float: right;
  vertical-align: baseline;
  padding-right: 100px;
  padding-top: 10px;
  font-size: 24px;
  color: #fff100;
}
</style>
