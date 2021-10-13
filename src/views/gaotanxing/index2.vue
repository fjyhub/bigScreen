<!-- 
 -->
<template>
  <div class="between">
    <div class="left">
      <!-- <dv-border-box-7 :color="['#4cb7ef']"> -->
     
      <LeftTop></LeftTop>
      <LeftBottom></LeftBottom>
      <!-- </dv-border-box-7> -->
    </div>
    <div class="center">
      <div class="center-map">
        <div class="map">
          <img class="map-icon" src="@/assets/imgs/home/map_title.png" />
          <Map></Map>
          <p class="title-left-top">
            <span class="name">安徽芜湖1000kV特高压</span>
            <span class="sub-name">±800kV白鹤滩直流</span>
          </p>
          <p class="title-left-middle sub-name">±800kV灵绍直流</p>
          <p class="title-left-bottom sub-name">±800kV宜金直流</p>
          <p class="title-right-top name">上海练塘1000kV特高压</p>
          <p class="title-bottom sub-name">福建榕城1000kV特高压</p>
          <!-- <div class="map-title"></div> -->
        </div>
      </div>
      <centerTab />
    </div>
    <div class="right between">
      <SanDaZhiBiao :provinceGetData="oldValue"></SanDaZhiBiao>
    </div>
  </div>
</template>

<script>
var _ = require('lodash')
import LeftTop from './components/LeftTop'
import LeftBottom from './components/LeftBottom'
import SanDaZhiBiao from './components/SanDaZhiBiao'
import Map from './components/MapSvg'
import Map2 from './components/maps/Map2'
import Map3 from './components/maps/Map3'
import Map4 from './components/maps/Map4'
import FuNeng from './components/FuNeng'
import centerTab from './components/centerTab'

import * as apis from '@/service/gaotanxing'
export default {
  data() {
    return {
      myChart: null,
      activeIndex: 0,
      provinceGetData: {},
      cityGetData: [],
      lishuiDataList: [],
      spaceTime: 10,
      oldValue: {},
      level: 1,
      tabList: [
        {
          name: '高承载',
          icon: require('@/assets/imgs/gaochengzaitab.png'),
          activeIcon: require('@/assets/imgs/gaochengzai2.png')
        },
        {
          name: '高互动',
          icon: require('@/assets/imgs/gaohudong.png'),
          activeIcon: require('@/assets/imgs/gaohudong2.png')
        },
        {
          name: '高效能',
          icon: require('@/assets/imgs/gaonengxiao.png'),
          activeIcon: require('@/assets/imgs/gaoxiaoneng2.png')
        },
        {
          name: '高自愈',
          icon: require('@/assets/imgs/gaoziyunew.png'),
          activeIcon: require('@/assets/imgs/gaoziyu2.png')
        }
      ]
    }
  },

  components: {
    LeftTop,
    LeftBottom,
    GaoXiaoNeng: () => import('./components/GaoXiaoNeng'),
    SanDaZhiBiao,
    FuNeng,
    GaoChengZai: () => import('./components/GaoChengZai'),
    GaoZiYu: () => import('./components/GaoZiYu'),
    GaoHuDong: () => import('./components/GaoHuDong'),
    centerTab,
    Map,
    Map2,
    Map3,
    Map4
  },

  computed: {},

  created() {
    this.refresh()
  },

  mounted() {
    // setInterval(() => {
    //   this.activeIndex++
    //   if (this.activeIndex > 3) this.activeIndex = 0
    // }, this.spaceTime * 1000)
  },

  methods: {
    async refresh() {
      this.provinceGetData = await apis.provinceGetData().then(res => res.data)
      this.oldValue = _.cloneDeep(this.provinceGetData)
      this.cityGetData = await apis.cityGetData().then(res => res.data)
      this.lishuiDataList = await apis.lishuiDataList({ cityCode: 331100 }).then(res => res.data)
    },
    clcikMap() {
      this.level = 2
      apis.getSubStat({ cityCode: '331100' }).then(res => {
        this.provinceGetData = res.data
        // this.provinceGetData = Object.assign(res.data, this.oldValue)
      })
    },
    changeIndex(i) {
      this.level = 1
      this.activeIndex = i
      console.log(this.oldValue)
      this.provinceGetData = this.oldValue
    }
  }
}
</script>
<style lang="less" scoped>
.left,
.right {
  height: 951px;
}
.left {
  width: 1086px;
  background: url('../../assets/imgs/home/Group 18671.png') no-repeat;
  background-size: 100% 100%;
}
.right {
  width: 712px;
  background: url('../../assets/imgs/home/Group 18700.png') no-repeat;
  background-size: 100% 100%;
  right-first {
    overflow: hidden;
  }
}
.center {
  width: 2040px;
  height: 965px;
  position: relative;
  .map {
    width: 1494px;
    height: 965px;
    margin-left: 120px;
    position: relative;
    &-icon {
      position: absolute;
      top: -44px;
      left: 370px;
      right: 0;
      width: 661px;
      height: 41px;
    }
    .name {
      height: 28px;
      opacity: 1;
      font-size: 20px;
      font-weight: 400;
      text-align: center;
      color: #fff704;
    }
    .sub-name {
      height: 28px;
      opacity: 1;
      font-size: 20px;
      font-weight: 400;
      text-align: center;
      color: #00ff91;
    }
    .title-left {
      &-top {
        position: absolute;
        top: 30px;
        left: 176px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &-middle {
        position: absolute;
        top: 110px;
        left: 128px;
      }
      &-bottom {
        position: absolute;
        bottom: 306px;
        left: -30px;
      }
    }
    .title-right {
      &-top {
        position: absolute;
        top: 40px;
        right: 354px;
      }
    }
    .title-bottom {
      position: absolute;
      bottom: 42px;
      left: 306px;
    }
  }

  //   border: 1px solid red;
  // box-sizing: border-box;
  // .center-content {
  //   height: 860px;
  //   // border: 1px solid pink;
  //   .toggle-view {
  //     width: 2000px;
  //     height: 860px;
  //     box-sizing: border-box;
  //     border: 3px solid #45deff;
  //     box-shadow: 0 0 50px rgba(69, 222, 255, 0.5) inset;
  //     float: right;
  //     position: relative;
  //     left: -10px;
  //   }
  //   .tabs {
  //     width: 110px;
  //     float: left;
  //     height: 100%;
  //     padding: 50px;
  //     // background: pink;
  //     .tab-item {
  //       cursor: pointer;
  //       width: 61px;
  //       height: 187px;
  //       background: url('../../assets/imgs/tabbackground.png');
  //       .tab-icon {
  //         width: 33px;
  //         height: 33px;
  //         top: 30px;
  //         left: 14px;
  //       }
  //       .tab-name {
  //         width: 30px;
  //         top: 70px;
  //         left: 16px;
  //       }
  //     }
  //     .tab-actived {
  //       background: url('../../assets/imgs/tabbackgroudnactived.png');
  //     }
  //   }
  // }
  // .five-power {
  //   height: 90px;
  //   // border: 1px solid teal;
  // }
}
</style>
