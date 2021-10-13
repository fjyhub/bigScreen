<!--  -->
<template>
  <div class="between">
    <div class="left">
      <YongNeng></YongNeng>
    </div>
    <div class="center">
      <div class="title"><span>用能企业碳排放监测</span></div>
      <div class="border-2 mt20" style="height: 830px;padding:30px 20px;box-sizing:border-box;">
        <!-- <dv-border-box-7 style="padding: 20px;height: 920px" :color="['#134A82']">          -->
        <div>
          <el-form :inline="true" :model="query">
            <el-form-item>
              <el-select
                class=" city-select"
                placeholder="选择省份"
                v-model="query.distCode"
                clearable
                @change="getTableData"
              >
                <el-option
                  :label="item.name"
                  :value="item.code"
                  v-for="(item, i) in city"
                  :key="i"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select
                class="ml40 city-select"
                placeholder="选择行业"
                v-model="query.hytype"
                clearable
                @change="getTableData"
              >
                <el-option label="电力" value="0"></el-option>
                <el-option label="工业" value="1"></el-option>
                <el-option label="交通" value="2"></el-option>
                <el-option label="建筑" value="3"></el-option>
                <el-option label="其他" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-date-picker
                @change="getTableData"
                v-model="query.year"
                class="ml40 date-select"
                :type="query.mode"
                placeholder="选择年"
                value-format="yyyy"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-input
                class="ml40 search-input"
                v-model="query.companyName"
                @keydown.enter.native="getTableData"
                placeholder="按企业名称搜"
                suffix-icon="el-icon-search"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="mt20">
          <div class="table2" style="height:630px;margin-top:30px;">
            <el-table :header-cell-style="headerStyle" :data="tableData" height="630">
              <el-table-column
                label="企业名称"
                width="400"
                align="center"
                prop="companyName"
              ></el-table-column>
              <el-table-column
                label="地区"
                align="center"
                prop="distName"
                width="180"
              ></el-table-column>
              <el-table-column
                label="行业"
                align="center"
                prop="hyname"
                width="140"
              ></el-table-column>
              <el-table-column
                label="账户碳排额度（吨）"
                align="center"
                prop="carbonZhtped"
                 width="280"
              ></el-table-column>
              <el-table-column
                label="碳排放量（吨）"
                align="center"
                prop="carbonTpfl"
                 width="200"
              ></el-table-column>
              <el-table-column label="碳排状态" align="center">
                <template slot-scope="scope">
                  <el-progress
                    :stroke-width="26"
                    :percentage="scope.row.status"
                    :show-text="false"
                    :status="
                      scope.row.status > 99
                        ? 'exception'
                        : scope.row.status >= 70
                        ? 'warning'
                        : 'success'
                    "
                  ></el-progress>
                  {{ scope.row.status > 99 ? '超额' : scope.row.status >= 70 ? '预警' : '正常' }}
                </template>
              </el-table-column>
              <el-table-column label="能源碳效标识" align="center">
                <template slot-scope="scope">
                  <img
                    :src="require('../../assets/imgs/ident-icon-' + scope.row.nytxbs + '.png')"
                    style="height: 40px"
                  />
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <!-- </dv-border-box-7> -->
      </div>
    </div>
    <div class="right">
      <div class="title"><span>能源碳效码</span></div>
      <div class="border-2 mt20" style="height: 830px;">
        <img src="../../assets/imgs/ident-img.png" alt="" class="mt40 pt40" />
      </div>
    </div>
  </div>
</template>

<script>
import * as Echarts from 'echarts'
import * as powerGridApi from '@/service/powerGrid'
import * as manageApi from '@/service/manage'
import * as technologyApi from '@/service/technology'
import YongNeng from './components/YongNeng'
import { city } from '../../data/city.js'
export default {
  data() {
    return {
      query: {
        distCode: '330000',
        hytype: '',
        mode: 'year',
        year: '',
        companyName: ''
      },
      statisticsData: [],
      city: [
        {
          name: '浙江省',
          code: '330000'
        }
      ],
      tableData: [],

      date: '',
      yqs: {
        cxqys: 0,
        tx1: 2,
        tx2: 2,
        tx3: 5,
        tx4: 0,
        tx5: 0,
        yjqys: 3,
        zcqys: 3
      }
    }
  },

  created() {
    // 碳排统计
    // this.getTJ()
    // // 行业统计
    // this.getHY()
    this.getTableData()
  },

  components: { YongNeng },

  computed: {},

  mounted() {
    // this.distrChart = Echarts.init(document.getElementById('distribution'), 'dark')
    // this.loadDistrChart()
  },

  methods: {
    // 碳排统计

    // 大表格
    getTableData() {
      console.log(this.query)
      manageApi.getJcList(this.query).then(res => {
        console.log(res)
        res.data.forEach(item => {
          // 排放额度 - 排放量
          // <=0 超额  <=20 预警   正常  100 70
          let s = (Number(item.carbonTpfl) / Number(item.carbonZhtped)) * 100
          // item.percent = s >=100?'超额':s>=80?"预警":"正常"
          item.status = s > 100 ? 100 : s
        })
        this.tableData = res.data
      })
    },

    loadDistrChart() {
      this.distrChart.setOption(this.option, true)
    },

    headerStyle({ row, column, rowIndex, columnIndex }) {
      return ' background: linear-gradient(to bottom, #47a1a9, #1f7b9d);color:#fff;font-size: 20px'
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
  height: 921px;
  // background: linear-gradient(to bottom, #429ba3, #1d7a9b);
}
.left {
  width: 1340px;
}
.center {
  width: 1830px;
}
.right {
  width: 440px;
}
.border-2 {
  padding: 20px 40px;
}
.el-progress {
  width: 70%;
  display: inline-block;
  vertical-align: middle;
  padding-right: 10px;
}
.chart {
  position: relative;
}
.chart-title {
  position: absolute;
  top: 20px;
  left: 50%;
  width: 280px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin-left: -140px;
  font-size: 22px;
  color: #affbff;
  font-weight: normal;
}
.chart-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(to right, #183144, #b7bfc6, #1c354a);
  width: 100%;
  height: 2px;
}
.table2 {
  background: url('./../../assets/imgs/table2_bg.png') no-repeat;
  // background-size: 100% 100%;
  /deep/table th {
    height: 100px;
    font-size: 30px !important;
  }
  /deep/.el-table__body-wrapper table tbody tr {
    border: none;
    td {
      height: 100px;
      font-size: 30px;
    }
  }
  /deep/.el-table .cell {
    line-height: 40px;
    font-weight: normal;
  }
}
/deep/.el-progress-bar__outer {
  background-color: rgba(1, 238, 254, 0.1);
}
.city-select {
  width: 250px;
  height: 65px;
  font-size: 30px;
  /deep/.el-input {
    width: 100%;
    height: 100%;
    border: 1px solid #9be6fe;
    .el-input__inner {
      width: 100%;
      height: 100%;
      background: url('./../../assets/imgs/btn_bg.png') no-repeat !important;
      font-size: 30px;
      color: #fff;
      text-align: center;
    }
  }
  /deep/.el-input__suffix {
    right: 20px;
  }
  /deep/.el-select__caret {
    font-size: 30px;
    line-height: 60px;
    right: 20px;
  }
}
.date-select {
  width: 250px;
  height: 65px;
  border: 1px solid #9be6fe;
  font-size: 30px;
  /deep/ .el-input__inner {
    width: 100%;
    height: 100%;
    background: url('./../../assets/imgs/btn_bg.png') no-repeat !important;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }
  /deep/.el-input__prefix {
    top: 12px;
    left: 20px;
  }
  /deep/.el-input__suffix {
    top: 10px;
    right: 20px;
  }
}
.search-input {
  width: 370px;
  height: 65px;
  border: 1px solid #9be6fe;
  background: url('./../../assets/imgs/btn2_bg.png') no-repeat !important;
  background-size: 100% 100%;
  font-size: 30px;
  /deep/ .el-input__inner {
    background: transparent !important;

    width: 100%;
    height: 100%;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }
  /deep/.el-input__suffix {
    top: 10px;
    right: 40px;
  }
}
</style>
