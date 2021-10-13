<!-- 项目完成率 center-2 -->
<template>
  <div class="relative fz16 lh28">
    <div id="completion-rate" style="width: 800px; height: 260px">投资金额</div>
    <div class="absolute com-detail">
      <div class="hover-btn">项目完工率97% >>></div>
      <div>2019年新建项目67</div>
      <div>已完工项目20</div>
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
    this.myChart = Echarts.init(document.getElementById('completion-rate'), 'dark')
    this.loadEchart()
  },

  methods: {
    loadEchart() {
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} KM'
        },
        calculable: true,
        series: [
          {
            name: '公里总里程',
            type: 'pie',
            radius: '70%', //饼图的半径大小
            center: ['50%', '50%'], //饼图的位置
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
            data: [
              { value: 20, name: '高速50KM', itemStyle: { normal: { color: '#CC00FF' } } },
              { value: 150, name: '一级150KM', itemStyle: { normal: { color: '#0066FF' } } }
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
.com-detail {
  right: 20px;
  top: 20px;
}
</style>
