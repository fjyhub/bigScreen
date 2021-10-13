<!-- 问题清单 center-3 -->
<template>
  <div style="width: 800px; height: 260px" class="between fz16 lh28">
    <div id="problem-list" style="width: 560px; height: 260px"></div>
    <div class="ques-detail">
      <div class="hover-btn">问题清单消纳率20% >>></div>
      <div class="hover-btn">问题清单新增15% >>></div>
    </div>
  </div>
</template>

<script>
import * as Echarts from 'echarts'
export default {
  data() {
    return {
      myChart: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.myChart = Echarts.init(document.getElementById('problem-list'), 'dark')
    this.loadEchart()
  },

  methods: {
    loadEchart() {
      const option = {
        xAxis: {
          type: 'value',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed'],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            barWidth: 14,
            itemStyle: {
              emphasis: {
                barBorderRadius: 7
              },
              normal: {
                barBorderRadius: 7,
                color: function(params) {
                  //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = ['#c23531', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622']
                  return colorList[params.dataIndex]
                }
              }
            },
            data: [120, 200, 150],
            type: 'bar'
          }
        ]
      }

      this.myChart.setOption(option, true)
    }
  }
}
</script>
<style lang="less" scoped>
.ques-detail {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
