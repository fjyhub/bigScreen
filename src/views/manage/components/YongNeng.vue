<template>
  <div>
    <div class="title"><span>发电企业碳排放监测</span></div>
    <div class="border-2 mt20" style="height: 830px;padding:30px 10px;box-sizing:border-box;">
      <el-form :inline="true" :model="query">
        <el-form-item>
          <el-select
            class="city-select"
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
      <div class="table1" style="height:630px;margin-top:30px;">
        <el-table
          :header-cell-style="headerStyle"
          :data="tableData"
          height="630"
          header-row-class-name="table1-header"
        >
          <template v-for="item in columns">
            <el-table-column
              :prop="item.key"
              :label="item.name"
              :key="item.key"
              :width="item.width"
              :formatter="item.formatter"
              align="center"
              :render-header="item.renderHeader"
            ></el-table-column>
          </template>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { city } from '../../../data/city.js'
import { carbonElectricityJcList } from '../../../service/manage'

export default {
  data() {
    return {
      city: [
        {
          name: '浙江省',
          code: '330000'
        }
      ],
      query: {
        distCode: '330000',
        hytype: '',
        mode: 'year',
        year: '',
        companyName: ''
      },
      columns: [
        {
          key: 'companyName',
          name: '企业名称',
          width: 500
        },
        {
          key: 'area',
          name: '地区',
          width: 80
        },
        {
          key: 'electricityGeneration',
          name: '发电量(亿千瓦时)',
          width: 160,
          renderHeader: function(h, { column, $index }) {
            return h('p', {}, [h('p', {}, '发电量'), h('p', {}, '(亿千瓦时)')])
          }
        },
        {
          key: 'carbonEmission',
          name: '碳排放量 （万吨）',
          width: 140
        },
        {
          key: 'carbonCei',
          name: '电力碳排强度CEI(克/千瓦时)',
          width: 250
        },
        {
          key: 'carbonNci',
          name: '净零碳电能 占比NCI',
          width: 170,
          formatter: function(row, column, cellValue, index) {
            if (cellValue) {
              return cellValue
            } else {
              return '----'
            }
          }
        }
      ],
      tableData: []
    }
  },

  created() {},

  components: {},

  computed: {},

  mounted() {
    this.getTableData()
  },

  methods: {
    // 碳排统计

    headerStyle({ row, column, rowIndex, columnIndex }) {
      return ' background: linear-gradient(to bottom, #47a1a9, #1f7b9d);color:#fff;font-size: 20px'
    },
    // 统计表
    statisticsHeaderStyle() {
      return { background: 'linear-gradient(to bottom, #3e999a, #0d6ea1)!important', color: '#fff' }
    },
    getTableData() {
      console.log(this.query)
      carbonElectricityJcList({
        distCode: this.query.distCode,
        year: this.query.year,
        companyName: this.query.companyName
      }).then(res => {
        console.log(res.data)
        this.tableData = res.data
      })
    }
  }
}
</script>
<style lang="less" scoped>
.table1 {
  background: url('./../../../assets/imgs/table1_bg.png') no-repeat;
  /deep/table th {
    height: 100px;
    font-size: 30px !important;
  }
  /deep/.el-table__body-wrapper table tbody tr {
    border: none;
    td {
      height: 130px;
      font-size: 30px;
    }
  }
  /deep/.el-table .cell {
    line-height: 40px;
    font-weight: normal;
  }
}
.city-select {
  width: 250px;
  height: 65px;

  /deep/.el-input {
    width: 100%;
    height: 100%;
    border: 1px solid #9be6fe;
    .el-input__inner {
      width: 100%;
      height: 100%;
      background: url('./../../../assets/imgs/btn_bg.png') no-repeat !important;
      font-size: 30px;
      color: #fff;
      text-align: center;
    }
  }
  /deep/.el-select-dropdown__item {
    font-size: 24px !important;
    height: 40px;
    line-height: 40px;
  }
  /deep/.el-input__suffix {
    right: 20px;
  }
  /deep/.el-select__caret {
    font-size: 30px;
    line-height: 60px;
  }
}
.date-select {
  width: 250px;
  height: 65px;
  font-size: 30px;
  border: 1px solid #9be6fe;
  /deep/ .el-input__inner {
    width: 100%;
    height: 100%;
    background: url('./../../../assets/imgs/btn_bg.png') no-repeat !important;
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
  background: url('./../../../assets/imgs/btn2_bg.png') no-repeat !important;
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
