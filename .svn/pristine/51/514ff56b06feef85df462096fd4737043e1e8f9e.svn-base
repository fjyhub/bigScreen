<!--  -->
<template>
  <div class="between">
    <div class="left">
      <div class="title"><span>双碳综合示范</span></div>
      <div class="center-content">
        <div style="width:100%;height:100%;float:left;position:relative">
          <Map></Map>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="border-2 between">
        <div class="list-cont list-cont-border">
          <div class="action-desc-title">
            <h2>
              <span><img src="./../../assets/imgs/1028.png" alt="" /></span>
              <span>{{ list[0].title }}</span>
            </h2>
          </div>
          <div class="action-desc-content">
            <p v-for="item in list[0].descList" :key="item">
              <span><img src="./../../assets/imgs/icon-right.png" alt="" /></span>
              <span>{{ item }}</span>
            </p>
          </div>
        </div>
        <div class="list-cont ">
          <div class="action-desc-title">
            <h2>
              <span><img src="./../../assets/imgs/1028.png" alt="" /></span>
              <span>{{ list[1].title }}</span>
            </h2>
          </div>
          <div class="action-desc-content">
            <p v-for="item in list[1].descList" :key="item">
              <span><img src="./../../assets/imgs/icon-right.png" alt="" /></span>
              <span>{{ item }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="border-2 between mt20">
        <div class="list-cont list-cont-border">
          <div class="action-desc-title">
            <h2>
              <span><img src="./../../assets/imgs/1028.png" alt="" /></span>
              <span>{{ list[2].title }}</span>
            </h2>
          </div>
          <div class="action-desc-content">
            <p v-for="item in list[2].descList" :key="item">
              <span><img src="./../../assets/imgs/icon-right.png" alt="" /></span>
              <span>{{ item }}</span>
            </p>
          </div>
        </div>
        <div class="list-cont">
          <div class="action-desc-title">
            <h2>
              <span><img src="./../../assets/imgs/1028.png" alt="" /></span>
              <span>{{ list[3].title }}</span>
            </h2>
          </div>
          <div class="action-desc-content">
            <p v-for="item in list[3].descList" :key="item">
              <span><img src="./../../assets/imgs/icon-right.png" alt="" /></span>
              <span>{{ item }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="border-2 between mt20">
        <div class="list-cont list-cont-border">
          <div class="action-desc-title">
            <h2>
              <span><img src="./../../assets/imgs/1028.png" alt="" /></span>
              <span>{{ list[4].title }}</span>
            </h2>
          </div>
          <div class="action-desc-content">
            <p v-for="item in list[4].descList" :key="item">
              <span><img src="./../../assets/imgs/icon-right.png" alt="" /></span>
              <span>{{ item }}</span>
            </p>
          </div>
        </div>
        <div class="list-cont">
          <div class="action-desc-title">
            <h2>
              <span><img src="./../../assets/imgs/1028.png" alt="" /></span>
              <span>{{ list[5].title }}</span>
            </h2>
          </div>
          <div class="action-desc-content">
            <p v-for="item in list[5].descList" :key="item">
              <span><img src="./../../assets/imgs/icon-right.png" alt="" /></span>
              <span>{{ item }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Echarts from 'echarts'
import * as powerGridApi from '@/service/powerGrid'
import * as technologyApi from '@/service/technology'
import Map from './components/Map'
import { city } from '../../data/city.js'
export default {
  data() {
    return {
      list: [
        {
          title: '清洁替代',
          descList: [
            '实施风光倍增工程，新增1700万千瓦',
            '建成白鹤滩直流，年减排2250万吨',
            '新增核电490万千瓦',
            '新增抽水蓄能340万千瓦'
          ]
        },
        {
          title: '电能替代',
          descList: [
            '充电网络服务120万辆电动汽车',
            '港口岸电、纯电动船',
            '替代450亿千瓦时，减排3330万吨',
            '电能终端占比提升4%'
          ]
        },
        {
          title: '能效提升',
          descList: ['丽水多级降损', '“供电+能效服务”', '“建筑星级认证”', '单位GDP能耗下降5.8%']
        },
        {
          title: '能源优化配置',
          descList: [
            '打造坚强主网、高弹性配电网',
            '承载高比例外来电和清洁能源',
            '实现源网荷储一体化',
            '互动资源规模达到千万千瓦级'
          ]
        },
        {
          title: '市场机制',
          descList: [
            '新能源+储能、清洁能源成本疏导',
            '可中断负荷电价、分时电价',
            '电力市场、辅助服务市场',
            '碳交易、绿证交易'
          ]
        },
        {
          title: '技术攻关与试点示范',
          descList: [
            '大电网安全稳定控制、虚拟电厂',
            '源网荷储即插即用、新型储能',
            '企业碳账户、碳排放监测平台、能源碳码',
            '氢电耦合、低频输电、光储柔直示范'
          ]
        }
      ]
    }
  },

  created() {},

  components: { Map },

  computed: {},

  mounted() {},

  methods: {}
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
  width: 2360px;
  // border: 1px solid red;
  .action-title {
    background: linear-gradient(to bottom, #7bcdd9, #0ea6d7);
    -webkit-background-clip: text;
    color: transparent;
    h2 {
      letter-spacing: 10px;
      padding-left: 45px;
      font-family: SourceHanSansCNMedium;
      font-size: 34px;
      line-height: 60px;
      span {
        img {
          vertical-align: middle;
          position: relative;
          top: -2px;
          margin-right: 6px;
        }
      }
    }
  }
}
.right {
  width: 1260px;
  // border: 1px solid red;

  .border-2 {
    height: 280px;
    // padding: 10px 48px;
  }
}
.list-cont {
  width: 50%;
  .title {
    line-height: 60px;
    position: relative;
    left: 45px;
  }
}
.list-cont-border {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 1px;
    height: calc(100% - 40px);
    background: #00f2ff;
    opacity: 0.51;
    position: absolute;
    top: 20px;
    right: 0;
  }
}
.list-item {
  background: url('../../assets/imgs/icon-right.png') no-repeat left center;
  padding-left: 30px;
  margin: 35px 0;
  color: #93ffe7;
  // font-size: 20px;
}
.center-content {
  height: 860px;
  width: 100%;
}

.action-desc-title {
  background: linear-gradient(to bottom, #7bcdd9, #0ea6d7);
  -webkit-background-clip: text;
  color: transparent;
  h2 {
    letter-spacing: 10px;
    padding-left: 45px;
    font-family: SourceHanSansCNMedium;
    font-size: 34px;
    line-height: 60px;
    span {
      img {
        vertical-align: middle;
        position: relative;
        top: -2px;
        margin-right: 6px;
      }
    }
  }
}
.action-desc-content {
  p {
    padding-left: 70px;
    font-family: 黑体;
    line-height: 50px;
    font-size: 26px;
    color: #fefefe;
    font-weight: normal;
    span {
      img {
        vertical-align: middle;
        position: relative;
        top: -2px;
        margin-right: 10px;
      }
    }
  }
}
</style>
