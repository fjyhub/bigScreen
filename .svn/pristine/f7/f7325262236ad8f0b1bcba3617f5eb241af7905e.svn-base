<!-- 投资效率 right-1 -->
<template>
  <div class="relative fz16 lh28">
    <div id="inverset-efficiency" style="width: 540px; height: 400px"></div>
    <div class="absolute inv-detail">
      <div class="hover-btn">高成效网架类项目占比95% >>></div>
      <div>总项目数字50</div>
      <div>网架类项目数24</div>
      <div>高成效项目数26</div>
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
    this.myChart = Echarts.init(document.getElementById('inverset-efficiency'), 'dark')
    this.loadEchart()
  },

  methods: {
    loadEchart() {
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '60%'],
            center: ['30%', '50%'], //饼图的位置
            avoidLabelOverlap: false,
            label: {
              //饼图图形上的文本标签
              normal: {
                show: true,
                position: 'inner', //标签的位置
                textStyle: {
                  fontWeight: 300,
                  fontSize: 16 //文字的字体大小
                },
                formatter: '{d}%'
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: '直接访问', itemStyle: { normal: { color: '#CC00FF' } } },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }
      this.myChart.setOption(option, true)
    }
  }
}
</script>
<style lang="less" scoped>
.inv-detail {
  right: 20px;
  top: 20px;
}
</style>
