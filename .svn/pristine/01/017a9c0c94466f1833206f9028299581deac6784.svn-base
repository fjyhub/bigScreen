<!--  -->
<template>
  <div class="between problem">
    <div class="left">
      <div class="border-2">
        <div class="title2"><span class="deal-title">企业碳账户</span></div>
        <div class="around mt30 account" style="text-align:center">
          <div>
            <div class="fwn deal-sub-title">碳资产持有量</div>
            <img src="../../assets/imgs/energy-icon-down-2.png" alt="" />
            <div class="transaction-account-num">
              <span class="color-y">{{ account.tzccyl || '----' }}</span>
              <span>万吨co</span>
              <span class="fz12">2</span>
            </div>
          </div>
          <div>
            <div class="deal-sub-title fwn">配额预测量</div>
            <img src="../../assets/imgs/energy-icon-down-2.png" alt="" />
            <div class="transaction-account-num">
              <span class="color-y">{{ account.peycl|| '----' }}</span>
              <span>万吨co</span>
              <span class="fz12">2</span>
            </div>
          </div>
          <div>
            <div class="deal-sub-title fwn">资产盈余</div>
            <img src="../../assets/imgs/energy-icon-down-2.png" alt="" />
            <div class="transaction-account-num">
              <span class="color-y">{{ account.zcyy || '----'}}</span>
              <span>万吨co</span>
              <span class="fz12">2</span>
            </div>
          </div>
        </div>
      </div>
      <div class="border-2 mt40" style="height: 487px">
        <div class="title2"><span class="deal-title">风光项目碳减排核准</span></div>
        <div class="mt40 approval fz30 fwn">
          <div class="approval-th between">
            <div class="approval-td approval-td-1 font-style1">
              项目名称
            </div>
            <div class="approval-td approval-td-2 font-style1">
              上网电量
            </div>
            <div class="approval-td approval-td-3 font-style1">
              核证减排量
            </div>
          </div>
          <div class="approval-tr mt30 between" v-for="(item, index) in approval" :key="index">
            <div class="approval-td approval-td-1 font-style2">
              {{ item.name }}
            </div>
            <div class="approval-td approval-td-2 font-style3">{{ item.swdl || '----'}}亿千瓦时</div>
            <div class="approval-td approval-td-3 font-style3">
              <span>{{ item.hzjpl || '----'}}万吨CO</span>
              <span class="fz18">2</span>
            </div>
          </div>
          <!-- <div class="approval-tr mt30 between">            
            <div class="approval-td approval-td-1">XX 企业分布式风电项目</div>
            <div class="approval-td approval-td-2">200亿千瓦时</div>
            <div class="approval-td approval-td-3">1000万吨CO<span class="fz12">2</span></div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="center">
      <div class="border-2">
        <div class="title2"><span class="deal-title">碳交易信息</span></div>
        <div class="around mt30 account" style="text-align:center">
          <div>
            <div class="deal-sub-title fwn">碳成交平均单价</div>
            <img src="../../assets/imgs/energy-icon-down-2.png" alt="" />
            <div class="transaction-account-num">
              <span class="color-y">{{ account.cjpjdj || '----' }}</span>
              <span>元/吨co</span>
              <span class="fz18">2</span>
            </div>
          </div>
          <div>
            <div class="deal-sub-title fwn">碳交易总量</div>
            <img src="../../assets/imgs/energy-icon-down-2.png" alt="" />
            <div class="transaction-account-num">
              <span class="color-y">{{ account.jyzl || '----'}}</span>
              <span>万吨co</span>
              <span class="fz18">2</span>
            </div>
          </div>
          <div>
            <div class="deal-sub-title fwn">总碳交易金额</div>
            <img src="../../assets/imgs/energy-icon-down-2.png" alt="" />
            <div class="transaction-account-num">
              <span class="color-y">{{ account.ztjyje || '----'}}</span>
              <span>万元</span>
            </div>
          </div>
        </div>
      </div>
      <div class="border-2 mt40" style="height: 487px; padding:20px;">
        <div class="title" style="margin-left:20px;">
          <span class="deal-title">买卖双方信息</span>
        </div>
        <div class="mt10">
          <div class="title3" style="margin-left:10px;">买方</div>
          <div class="table-border">
            <div class="buy-table">
              <div class="table-tr between ta-center table-header-font1">
                <div class="table-th">企业名称</div>
                <div class="table-th">所属行业</div>
                <div class="table-th">成交价格（万元）</div>
                <div class="table-th">成交量（吨）</div>
              </div>
              <div
                class="table-tr between table-content-font1"
                v-for="(item, i) in buyerData"
                :key="i"
              >
                <div class="table-td">{{ item.companyName }}</div>
                <div class="table-td">{{ item.hyname }}</div>
                <div class="table-td">{{ item.carbonCjjg }}</div>
                <div class="table-td">{{ item.carbonCjl }}</div>
              </div>
            </div>
          </div>
          <div class="title3 mt10">卖方</div>
          <div class="sell-table">
            <div class="table-tr between">
              <div class="table-th">企业名称</div>
              <div class="table-th">所属行业</div>
              <div class="table-th">成交价格</div>
              <div class="table-th">成交量</div>
            </div>
            <div class="table-tr between" v-for="(item, i) in buyerData" :key="i">
              <div class="table-td">{{ item.companyName }}</div>
              <div class="table-td">{{ item.hyname }}</div>
              <div class="table-td"></div>
              <div class="table-td"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="border-2" style="height: 350px;">
        <div class="title">
          <span class="deal-title">分行业交易量</span>
        </div>
        <div>
          <div id="distribution" style="height: 290px;margin:0"></div>
        </div>
      </div>
      <div class="border-2 mt40" style="height: 487px;">
        <div class="title">
          <span class="deal-title">分地区交易量</span>
        </div>
        <div id="transactionNum" style="height: 420px;margin:0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Echarts from 'echarts'
import * as problemApi from '@/service/problem'
export default {
  data() {
    return {
      date: '',
      priceData: [],
      totalData: [],
      buyerData: [
        { companyName: '湖州**电子有限公司', carbonGml: '工业', carbonCjdj: 250, carbonCjjg: 500 },
        { companyName: '湖州**电子有限公司', carbonGml: '工业', carbonCjdj: 250, carbonCjjg: 500 },
        { companyName: '湖州**电子有限公司', carbonGml: '工业', carbonCjdj: 250, carbonCjjg: 500 }
      ],
      sellerData: [
        {
          companyName: '湖州**电子有限公司',
          carbonGml: '工业',
          carbonTzl: 250,
          carbonCsl: 500,
          carbonCsjg: 0.8
        },
        {
          companyName: '湖州**电子有限公司',
          carbonGml: '工业',
          carbonTzl: 250,
          carbonCsl: 500,
          carbonCsjg: 0.8
        },
        {
          companyName: '湖州**电子有限公司',
          carbonGml: '工业',
          carbonTzl: 250,
          carbonCsl: 500,
          carbonCsjg: 0.8
        }
      ],
      statisticsData: [],

      // 碳账户
      account: {
        cjpjdj: 84.72,
        jyzl: 5000,
        peycl: 2000,
        tzccyl: 1000,
        zcyy: 1000,
        ztjyje: 1000
      },
      approval: [],
      distrChart: null,
      transactionChart: null
    }
  },

  created() {
    console.log('加载交易。。。')

    // 买卖方信息
    this.getBuyer()

    // 碳排行业分布
    this.getDistribution()

    // 碳账户
    this.getAccount()

    // 核准
    this.getApproval()

    // 地区交易量
    this.getTransaction()
  },
  components: {},

  computed: {},

  mounted() {
    this.distrChart = Echarts.init(document.getElementById('distribution'), 'dark')
    this.transactionChart = Echarts.init(document.getElementById('transactionNum'), 'dark')
    // this.loadDistrChart()
    // this.loadTransactionChart()
  },

  methods: {
    // 买卖方信息
    getBuyer() {
      problemApi.getMmcpxxList().then(res => {
        let buy = res.data.buy.slice(0, 3)
        let sell = res.data.sell.slice(0, 3)
        this.buyerData = buy
        this.sellerData = sell
      })
    },

    getDistribution() {
      problemApi.getTpjyhyfbList().then(res => {
        let arr = []
        console.log(res)
        res.data.forEach((item, index) => {
          arr.push({
            name: item.name,
            value: item.zl
          })
        })
        this.loadDistrChart(arr)
      })
    },

    getAccount() {
      problemApi.getJyxxList().then(res => {
        this.account = res.data
      })
    },

    getApproval() {
      problemApi.getJyFgxmtjphzList().then(res => {
        this.approval = res.data
      })
    },

    getTransaction() {
      problemApi.getJyFdqjylList().then(res => {
        this.loadTransactionChart(res.data)
      })
    },

    headerStyle({ row, column, rowIndex, columnIndex }) {
      return ' background: linear-gradient(to bottom, #429ba3, #1d7a9b);color:#fff;font-size: 18px'
    },
    // 成交量表格
    totalHeaderStyle() {
      return 'background:#277b97;color:#fff'
    },
    totalRowStyle({ row, rowIndex }) {
      if (rowIndex == 0) {
        return { background: 'rgba(13,98,129,.7)!important' }
      } else if (rowIndex == 1) {
        return { background: 'rgba(13,77,105,.7)!important' }
      } else if (rowIndex == 2) {
        return { background: 'rgba(27,79,101,.7)!important' }
      } else if (rowIndex == 3) {
        return { background: 'rgba(24,89,95,.7)!important' }
      } else if (rowIndex == 4) {
        return { background: 'rgba(32,81,86,.7)!important' }
      } else if (rowIndex == 5) {
        return { background: 'rgba(8,72,74,.7)!important' }
      } else if (rowIndex == 6) {
        return { background: 'rgba(11,60,65,.7)!important' }
      }
      // switch (rowIndex){
      //   case 1:

      // }
    },

    // 买方表格
    buyerHeaderStyle() {
      return { background: '#223c5d', color: '#83fff7', fontSize: '20px', fontWeight: '500' }
    },

    // 卖方
    sellerHeaderStyle() {
      return { background: '#223c5d', color: '#fff' }
    },
    sellRowStyle({ row, rowIndex }) {
      return { background: 'rgba(15, 60, 83, .5)!important', color: '#fff' }
    },

    loadDistrChart(data) {
      let colors = ['#57a6fd', '#ee9258', '#dcdcdc', '#f8d95a', '#5aeaef']

      data.forEach((item, index) => {
        item['label'] = {
          color: colors[index]
        }
      })

      let option = {
        tooltip: {
          trigger: 'item'
        },
        label: {
          fontSize: 14
        },
        legend: {
          orient: 'vertical',
          right: 50,
          bottom: 30,
          icon: 'rect',
          itemWidth: 20,
          itemHeight: 20,
          itemGap: 24,
          textStyle: {
            fontSize: 22,
            width: 70,
            color: '#fff'
          }
        },
        color: ['#57a6fd', '#ee9258', '#dcdcdc', '#f8d95a', '#5aeaef'],
        series: [
          {
            name: '分行业交易量',
            type: 'pie',
            radius: '80%',
            center: ['40%', '55%'],
            data: data,
            itemStyle: {
              shadowBlur: 10,
              borderColor: 'rgba(0,0,0,0.5)',
              borderWidth: 2,
              // shadowBlur: 15,
              shadowColor: 'rgba(50, 94, 118, 1)'
            },
            label: {
              show: true,
              formatter: '{d}%',
              position: 'outer',
              alignTo: 'labelLine',
              fontSize: 33,
              color: '#fff'
            },
            labelLine: {
              length: 30,
              length2: 50,
              show: true,
              lineStyle: {
                width: 2,
                type: 'solid'
              }
            },
            barWidth: 10
          }
        ]
      }
      this.distrChart.setOption(option, true)
    },
    loadTransactionChart(data) {
      let xData = []
      let seriesData = []
      data.forEach(item => {
        xData.push(item.cityName)
        seriesData.push(item.num)
      })

      let option = {
        grid: {
          left: '20',
          right: 20,
          top: 40,
          bottom: 30
        },
        title: {
          text: '单位：万吨',
          right: 50,
          top: 0,
          textStyle: {
            fontSize: 30
          }
        },
        xAxis: {
          type: 'category',
          data: xData,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', //更改坐标轴文字颜色
              fontSize: 20 //更改坐标轴文字大小
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', //更改坐标轴文字颜色
              fontSize: 13 //更改坐标轴文字大小
            }
          },
          splitLine: {
            lineStyle: {
              color: '#415666'
            }
          }
        },
        tooltip: {
          show: true
        },
        series: [
          {
            data: seriesData,
            type: 'bar',
            itemStyle: {
              color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#6cf1fc' },
                { offset: 0.5, color: '#409aca' },
                { offset: 1, color: '#1951a0' }
              ]),
              borderRadius: [25, 25, 0, 0]
            },
            barWidth: 22
          }
        ]
      }

      this.transactionChart.setOption(option, true)
    },

    // 统计表
    statisticsHeaderStyle() {
      return { background: 'linear-gradient(to bottom, #3e999a, #0d6ea1)!important', color: '#fff' }
    }
  }
}
</script>
<style lang="less" scoped>
.left,
.center,
.right {
  height: 880px;
  // background: linear-gradient(to bottom, #429ba3, #1d7a9b);
}
.left {
  width: 1347px;
}
.right {
  width: 890px;
}
.center {
  width: 1350px;
  // margin: 0 60px;
}

.deal-title {
  font-size: 34px;
  font-family: SourceHanSansCNMedium;
  letter-spacing: 6px;
}
.deal-sub-title {
  font-size: 30px;
  font-family: SourceHanSansCNMedium;
  letter-spacing: 6px;
}
.problem .border-2 {
  padding: 20px 40px;
}
.problem .left .border-2,
.problem .center .border-2 {
  height: 350px;
}
.color-y {
  color: #ffc445;
}
.account img {
  width: 32px;
  height: 75px;
  margin: 10px 0;
}
.transaction-account-num {
  font-size: 32px;
  text-shadow: 2px 5px 0 #000;
  width: 380px;
  height: 107px;
  line-height: 107px;
  text-align: center;
  background: url('../../assets/imgs/account-border.png') no-repeat center center;
  background-size: 100% 100%;
}
.hover-table {
  /deep/tbody tr:hover > td {
    box-sizing: border-box;
    background-color: #90c0f1;
    border-top: 1px solid #c8c13d !important;
    border-bottom: 1px solid #c8c13d !important;
  }
  /deep/tbody tr:hover > td:first-child {
    border-left: 1px solid #c8c13d !important;
  }
  /deep/tbody tr:hover > td:last-child {
    border-right: 1px solid #c8c13d !important;
  }
}

.approval-th {
  background: rgba(57, 199, 230, 0.5);
  height: 92px;
  line-height: 92px;
  .approval-td-1 {
    background: url('../../assets/imgs/trans-icon-1.png') no-repeat 70px center;
  }
  .approval-td-2 {
    background: url('../../assets/imgs/trans-icon-2.png') no-repeat 70px center;
  }
  .approval-td-3 {
    background: url('../../assets/imgs/trans-icon-3.png') no-repeat 60px center;
  }
}
.approval-tr {
  background: rgba(27, 131, 120, 0.5);
  height: 92px;
  line-height: 92px;
}
.approval .approval-tr:nth-child(2) {
  background: rgba(6, 104, 141, 0.5);
}
.font-style1 {
  font-size: 33px;
  font-family: SourceHanSansCNRegular;
  color: #f9fbfb;
  letter-spacing: 6px;
  text-indent: 1em;
}
.font-style2 {
  font-size: 30px;
  font-family: SourceHanSansCNMedium;
  color: #affbff;
  letter-spacing: 6px;
  text-indent: 1em;
}
.font-style3 {
  font-size: 30px;
  font-family: SourceHanSansCNMedium;
  color: #f8f9f9;
  letter-spacing: 6px;
  text-indent: 1em;
}
.approval-td {
  width: 33%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.table-border {
  border: 1px solid #0a6f7a;
}
.buy-table {
  .table-tr {
    height: 45px;
    line-height: 45px;
    .table-th,
    .table-td {
      width: 25%;
      text-align: center;
      font-size: 20px;
      font-weight: no;
    }
  }
  .table-tr:not(:first-child) {
    margin-top: 5px;
    height: 38px;
    line-height: 35px;
    color: #fff;
    background: rgba(17, 63, 82, 0.4);
  }
  .table-tr:first-child {
    background: #213c5c;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    .table-th {
      color: #83fff8;
    }
  }
  .table-tr:not(:first-child):hover {
    background: rgba(32, 61, 79, 0.5);
    border-top: 1px solid #667d90;
    border-bottom: 1px solid #667d90;
    .table-td {
      color: #ffe4a4;
    }
  }
}
.sell-table {
  .table-tr {
    height: 40px;
    line-height: 40px;
    .table-th,
    .table-td {
      width: 25%;
      text-align: center;
      font-size: 20px;
    }
  }
  .table-tr:first-child {
    background: #213c5c;
    position: relative;
    .table-th {
      color: #fff;
    }
  }
  .table-tr:not(:first-child) {
    margin-top: 5px;
    height: 35px;
    line-height: 35px;
    color: #93e4ff;
    background: rgba(17, 63, 82, 0.4);
  }
  .table-tr:not(:first-child):hover {
    background: #997b34;
    color: #fff;
  }
  .table-tr:first-child::before,
  .table-tr:first-child::after {
    position: absolute;
    content: '';
    top: 4px;
    width: 5px;
    height: 33px;
    background: url('../../assets/imgs/table-dot.png') no-repeat center;
    background-size: 100% 100%;
  }
  .table-tr:first-child::before {
    left: 12px;
  }
  .table-tr:first-child::after {
    right: 12px;
  }
}
.fz18 {
  font-size: 18px;
}
.table-header-font1 {
  font-size: 33px;
  font-family: SourceHanSansCNRegular;
  color: #83fff8;
  letter-spacing: 2px;
}
.table-content-font1 {
  font-size: 31px;
  font-family: SourceHanSansCNBold;
  color: #fff;
  letter-spacing: 2px;
}
</style>
