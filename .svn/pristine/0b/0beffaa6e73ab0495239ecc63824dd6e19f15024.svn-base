<!-- 投资金额 left-1 -->
<template>
  <div class="relative">
    <div class="absolute inv-title fz16 pt10 lh28">
      <div>2019年配网投资：2.6亿</div>
      <div class="flex">
        <div>新建项目投资： 2.0亿</div>
        <div class="ml10">续建项目投资： 2.0亿</div>
      </div>
    </div>
    <div id="invest-sum" style="width: 500px; height: 360px"></div>
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
    this.myChart = Echarts.init(document.getElementById('invest-sum'), 'dark')
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
            center: ['50%', '60%'], //饼图的位置
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
              { value: 50, name: '高速50KM', itemStyle: { normal: { color: '#CC00FF' } } },
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
.inv-title {
  height: 100px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
