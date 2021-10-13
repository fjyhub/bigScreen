<!-- 
 -->
<template>
  <div class="between">
    <div class="left">
      <dv-border-box-7 :color="['#4cb7ef']">
        <LeftTop class="mb10"></LeftTop>
        <LeftBottom></LeftBottom>
      </dv-border-box-7>
    </div>
    <div class="center between relative">
      <!-- <Map :index="activeIndex" :mapGetData="mapGetData"></Map> -->
      <!-- <div class="tabs direction-column" style="position:absolute">
        <div
          class="tab-item relative"
          :class="{ 'tab-actived': activeIndex === i }"
          v-for="(item, i) in tabList"
          :key="i"
        >
          <img :src="item.icon" class="tab-icon absolute" alt="" />
          <div class="tab-name absolute fz28 fw600">{{ item.name }}</div>
        </div>
      </div>
      <div class="absolute" style="width: 1200px;    bottom: 0;left: 136px;">
        <FuNeng class="absolute" style="bottom: 0px;left: 0px"></FuNeng>
      </div> -->
    </div>
    <div class="right between">
      <div class="right-first">
        <dv-border-box-8 style="height: 921px; width: 641px;" :color="['#9dae22']">
          <!-- <transition name="el-fade-in"> -->
          <!-- <GaoChengZai
            v-if="activeIndex === 0 && provinceGetData.externalElectricityRate"
            :provinceGetData="provinceGetData"
          ></GaoChengZai>
          <GaoHuDong v-if="activeIndex === 1" :provinceGetData="provinceGetData"></GaoHuDong>
          <GaoXiaoNeng v-if="activeIndex === 2" :provinceGetData="provinceGetData"></GaoXiaoNeng>
          <GaoZiYu v-if="activeIndex === 3" :provinceGetData="provinceGetData"></GaoZiYu> -->
          <!-- </transition> -->
          <GaoChengZai :provinceGetData="provinceGetData"></GaoChengZai>
        </dv-border-box-8>
      </div>
      <div class="right-second" style="height: 854px">
        <dv-border-box-7 :color="['#4cb7ef']" style="height: 854px; width: 496px;">
          <SanDaZhiBiao :provinceGetData="provinceGetData"></SanDaZhiBiao>
        </dv-border-box-7>
      </div>
    </div>
  </div>
</template>

<script>
import LeftTop from './components/LeftTop'
import LeftBottom from './components/LeftBottom'
import GaoXiaoNeng from './components/GaoXiaoNeng'
import GaoChengZai from './components/GaoChengZai'
import GaoZiYu from './components/GaoZiYu2'
import GaoHuDong from './components/GaoHuDong'
import SanDaZhiBiao from './components/SanDaZhiBiao'
import Map from './components/Map2'
import FuNeng from './components/FuNeng'
import * as apis from '@/service/technology'
export default {
  data() {
    return {
      myChart: null,
      activeIndex: 3,
      provinceGetData: {},
      mapGetData: [],
      spaceTime: 10,
      tabList: [
        {
          name: '高承载',
          icon: require('@/assets/imgs/gaochengzaitab.png'),
          activeIcon: require('@/assets/imgs/gaochengzaiactive.png')
        },
        {
          name: '高互动',
          icon: require('@/assets/imgs/gaohudong.png'),
          activeIcon: require('@/assets/imgs/gaohudongactive.png')
        },
        {
          name: '高效能',
          icon: require('@/assets/imgs/gaonengxiao.png'),
          activeIcon: require('@/assets/imgs/gaoxiaonengactive.png')
        },
        {
          name: '高自愈',
          icon: require('@/assets/imgs/gaoziyu.png'),
          activeIcon: require('@/assets/imgs/gaoziyuactive.png')
        }
      ]
    }
  },

  components: {
    LeftTop,
    LeftBottom,
    GaoXiaoNeng,
    SanDaZhiBiao,
    FuNeng,
    GaoChengZai,
    GaoZiYu,
    GaoHuDong,
    Map
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
      this.mapGetData = await apis.mapGetData().then(res => res.data)
    }
  }
}
</script>
<style lang="less" scoped>
.left,
.center,
.right {
  height: 921px;
}
.left {
  width: 1086px;
}
.right {
  width: 1203px;
  right-first {
    overflow: hidden;
  }
}
.center {
  width: 1340px;
  // border: 1px solid red;
  box-sizing: border-box;
  .tabs {
    height: 921px;
    padding: 50px;
    // background: pink;
    .tab-item {
      width: 61px;
      height: 187px;
      background: url('../../assets/imgs/tabbackground.png');
      .tab-icon {
        width: 33px;
        height: 33px;
        top: 30px;
        left: 14px;
      }
      .tab-name {
        width: 30px;
        top: 70px;
        left: 16px;
      }
    }
    .tab-actived {
      background: url('../../assets/imgs/tabbackgroudnactived.png');
    }
  }
}
</style>
