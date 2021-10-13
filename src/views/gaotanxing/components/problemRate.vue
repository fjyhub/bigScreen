<!-- 问题清单对应率 left-2 -->
<template>
  <div class="problem-box relative fz16 lh28">
    <div id="problem-rate" style="width: 540px; height: 530px"></div>
    <div class="absolute problem-detail">
      <div class="flex between">
        <div class="hover-btn">问题清单项目对应率80% >>></div>
        <div class="hover-btn">规划需求对应率80% >>></div>
      </div>
      <div class="flex between">
        <div class="hover-btn">项目初设偏差较大占比80% >>></div>
        <div class="hover-btn">项目初设准确度80%>>></div>
      </div>
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
    this.myChart = Echarts.init(document.getElementById('problem-rate'), 'light')
    this.loadEchart()
  },

  methods: {
    loadEchart() {
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [30, 130],
            center: ['50%', '40%'],
            roseType: 'area',
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' }
            ],
            label: {
              //饼图图形上的文本标签
              normal: {
                show: true,
                // position: 'inner', //标签的位置
                textStyle: {
                  fontWeight: 300,
                  fontSize: 16 //文字的字体大小
                },
                formatter: '{b}: {d}%'
              }
            }
          }
        ]
      }
      this.myChart.setOption(option, true)
    }
  }
}
</script>
<style lang="less" scoped>
.problem-detail {
  bottom: 20px;
  width: 100%;
  padding: 0 40px;
}
</style>
