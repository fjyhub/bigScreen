<!--  -->
<template>
  <div class="hudong">
    <div class="card-title">
      <span><img src="../../../assets/imgs/1028.png" alt="" /></span>
      高互动
    </div>
    <div class="description" v-if="level == 1">
      <span class="fz34 fw600 ta-center chart-title">互动资源占比</span>
      <span>
        <img
          src="../../../assets/imgs/arrow.png"
          alt=""
          style="height: 26px;
    padding: 0 20px;"
        />
      </span>
      <span class="desc-rate text-color">{{ provinceGetData.resourceRate }}</span>
    </div>
    <div v-else>
      <span class="fz34 fw600 ta-center chart-title">互动资源规模</span>
      <span>
        <img
          src="../../../assets/imgs/arrow.png"
          alt=""
          style="height: 26px;
    padding: 0 20px;"
        />
      </span>
      <span class="desc-rate text-color" style="font-size: 44px;">
        {{ provinceGetData.interactiveResourceScale }}
        <span class="linear-green fz30">万千瓦</span>
      </span>
    </div>
    <div class="res-item" v-if="level == 1">
      <div class="res-item-left"><img :src="topList[0].img" alt="" /></div>
      <div class="res-item-right">
        <div class="res-item-info">
          <span class="title1 pt6">工商业用户</span>
          <span class="title2 linear-green">
            <span style="font-size: 48px">{{ provinceGetData.userCount }}</span>
            <span>户</span>
          </span>
          <span class="title3 linear-green">
            <span style="font-size: 48px">{{ provinceGetData.userPower.toFixed(0) }}</span>
            <span>万千瓦</span>
          </span>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="res-item" v-if="level == 2">
      <div class="res-item-left"><img src="../../../assets/imgs/455.png" alt="" /></div>
      <div class="res-item-right">
        <div class="res-item-info">
          <span class="title1 pt6">可控负荷</span>
          <span class="title2 linear-green">
            <span style="font-size: 48px">{{ provinceGetData.controllableLoad }}</span>
            <span>万千瓦</span>
          </span>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="res-item">
      <div class="res-item-left"><img :src="topList[1].img" alt="" /></div>
      <div class="res-item-right">
        <div class="res-item-info">
          <span class="title1 pt6">电动汽车</span>
          <span class="title2 linear-blue">
            <span style="font-size: 48px">{{ provinceGetData.electricCarCount }}</span>
            <span>户</span>
          </span>
          <span class="title3 linear-blue">
            <span style="font-size: 48px">
              {{
                level === 1
                  ? provinceGetData.electricCarPower.toFixed(0)
                  : provinceGetData.electricCarPower
              }}
            </span>
            <span>万千瓦</span>
          </span>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="res-item" v-if="level == 1">
      <div class="res-item-left"><img :src="topList[2].img" alt="" /></div>
      <div class="res-item-right">
        <div class="res-item-info">
          <span class="title1 pt6">通信基站</span>
          <span class="title2 linear-orange">
            <span style="font-size: 48px">
              {{ (provinceGetData.baseStationCount / 10000).toFixed(1) }}
            </span>
            <span>万户</span>
          </span>
          <span class="title3 linear-orange">
            <span style="font-size: 48px">{{ provinceGetData.baseStationPower.toFixed(0) }}</span>
            <span>万千瓦</span>
          </span>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="res-item" v-if="level == 2">
      <div class="res-item-left"><img src="../../../assets/imgs/456.png" alt="" /></div>
      <div class="res-item-right">
        <div style="font-size: 30px;font-weight: 400">
          <span class="title1 pt6">220千伏线路动态增容</span>
          <span class="title2 linear-orange">
            <span style="font-size: 48px">{{ provinceGetData.dynamicCapacityInc220kv }}</span>
            <span class="fz30 fw400">条</span>
          </span>
        </div>
        <div class="line"></div>
      </div>
    </div>

    <div class="description">
      <span class="fz34 fw600 ta-center chart-title" style="letter-spacing: 2px;">
        互动需求响应度
      </span>
      <span>
        <img
          src="../../../assets/imgs/arrow.png"
          alt=""
          style="height: 26px;
    padding: 0 20px;"
        />
      </span>

      <span class="desc-rate text-color">{{ provinceGetData.demandResponseRate }}%</span>
    </div>
    <div class="demand-item">
      <div class="demand-item-left relative">
        <img :src="bottomList[0].img" alt="" />
        <x color="#67beed" :width="125" class="absolute" style="top: -8px;left: -14px"></x>
      </div>
      <div class="demand-item-right">
        <div class="demand-item-info">
          <span class="title1 pt6">签约用户数</span>
          <span class="title2 text-color" style="color: #00ff72;">
            {{ provinceGetData.signUserCount }}
            <span v-if="level === 1">万户</span>
            <span v-else>户</span>
          </span>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="demand-item">
      <div class="demand-item-left relative">
        <img :src="bottomList[1].img" alt="" />
        <x color="#67beed" :width="125" class="absolute" style="top: -8px;left: -14px"></x>
      </div>
      <div class="demand-item-right">
        <div class="demand-item-info">
          <span class="title1 pt6">响应用户数</span>
          <span class="title2 text-color" style="color:#f8fb1f;">
            {{ provinceGetData.participateUserCount }}
            <span v-if="level === 1">万户</span>
            <span v-else>户</span>
          </span>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <!-- <div class="hudong-top between align-center">
      <div class="left relative">
        <div class="chart"></div>
        <img class="top-cahrt-background absolute" src="../../../assets/imgs/127.png" alt="" />
        <div class="ta-center fz30" style="margin-top: 38px">互动资源占比</div>
      </div>
      <div class="right direction-column">
        <div class="between right-item align-center" v-for="(item, i) in topList" :key="i">
          <img :src="item.img" alt="" />
          <div>
            <div class="mb18">
              <span class="fz48" :class="item.color">{{ provinceGetData[item.value] }}</span>
              <span class="fz24 ml6">万</span>
            </div>
            <div class="fz26">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hudong-bottom between align-center">
      <div class="left relative">
        <div class="chart"></div>
        <img class="bottom-cahrt-background absolute" src="../../../assets/imgs/126.png" alt="" />
        <div class="ta-center fz30" style="margin-top: 38px">互动需求响应度</div>
      </div>
      <div class="right direction-column">
        <div class="between right-item align-center" v-for="(item, i) in bottomList" :key="i">
          <img :src="item.img" alt="" />
          <div>
            <div class="" :style="{ color: item.color }">
              <span class="fz48">{{ provinceGetData[item.value] }}</span>
              <span class="fz24 ml6">万户</span>
            </div>
            <div class="line" :style="{ background: item.line }"></div>
            <div style="width: 130px;font-size: 20px;line-height: 26px">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import * as Echarts from 'echarts'
export default {
  props: {
    provinceGetData: {
      require: true,
      type: Object
    },
    level: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      topList: [
        {
          img: require('../../../assets/imgs/129.png'),
          name: '工商业用户',
          value: 'userCount',
          color: 'linear-green'
        },
        {
          img: require('../../../assets/imgs/125.png'),
          name: '工商业用户',
          value: 'electricCarCount',
          color: 'linear-blue'
        },
        {
          img: require('../../../assets/imgs/128.png'),
          name: '工商业用户',
          value: 'baseStationCount',
          color: 'linear-orange'
        }
      ],
      bottomList: [
        {
          img: require('../../../assets/imgs/123.png'),
          content: '应邀参与需求响应的户数',
          value: 'participateUserCount',
          color: '#F8F922',
          line: '#EBEB39'
        },
        {
          img: require('../../../assets/imgs/124.png'),
          content: '签约需求响应的户数',
          value: 'signUserCount',
          color: '#00FF72',
          line: '#00FF8A'
        }
      ],
      chart1: null,
      chart2: null
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.hudong {
  // padding: 50px;
  width: 680px;
  height: 100%;
  box-sizing: border-box;
  // border: 1px solid red;
}
.hudong-top {
  margin-bottom: 70px;
  .top-cahrt-background {
    width: 250px;
    height: 250px;
    top: 0px;
    left: 0px;
    z-index: 10;
  }
  .chart {
    width: 250px;
    height: 250px;
    background-size: 250px;
  }
  .right {
    height: 380px;
    .right-item {
      width: 258px;
    }
  }
}
.hudong-bottom {
  .bottom-cahrt-background {
    width: 250px;
    height: 260px;
    top: 0px;
    left: 0px;
    z-index: 10;
  }
  .chart {
    width: 250px;
    height: 260px;
    background-size: 250px 260px;
  }
  .right {
    height: 360px;
    .right-item {
      width: 305px;
    }
    .line {
      width: 124px;
      height: 2px;
      margin-top: 15px;
      margin-bottom: 11px;
    }
  }
}
#chart1 {
  top: 22px;
  left: 19px;
}
#chart2 {
  top: 36px;
  left: 26px;
}

.linear-blue {
  background: linear-gradient(to top, #00dbfd, #00b6b2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.linear-green {
  background: linear-gradient(to top, #28d9ff, #009cff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.linear-orange {
  background: linear-gradient(to top, #2ecfff, #10f6dd);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.card-title {
  font-size: 34px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 8px;
  background: linear-gradient(to top, #00c0ff, #00c0ff);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #00c0ff),
    color-stop(1, #b7fdff)
  );
  color: transparent;
  background-clip: text;
  span {
    letter-spacing: 1px !important;
  }
}
.chart-title {
  position: relative;
  text-align: left;
  text-indent: 0.5em;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #00c0ff),
    color-stop(1, #b7fdff)
  );
  color: transparent !important;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -ms-background-clip: text;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   top: 3px;
  //   width: 5px;
  //   height: 30px;
  //   background: #00c0ff;
  // }
}
.description {
  line-height: 70px;
  font-size: 30px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  letter-spacing: 6px;
  padding-left: 10px;
  .desc-title {
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    letter-spacing: 6px;
  }
  .desc-rate {
    font-size: 44px;
    font-family: Arial, Arial-Bold;
    font-weight: 700;
    text-align: left;
    color: #ffffff;
    letter-spacing: 2px;
  }
}
.res-item {
  width: 100%;
  height: 120px;
  padding-top: 10px;
  // border: 1px solid red;
  .res-item-left {
    width: 80px;
    height: 90px;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .res-item-right {
    width: 500px;
    height: 90px;
    float: left;
    position: relative;
    margin-left: 38px;
    .res-item-info {
      .title1 {
        position: absolute;
        top: 15px;
        font-size: 30px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        letter-spacing: 3px;
      }
      & > .title2 {
        position: absolute;
        left: 170px;
        top: 16px;
        font-size: 40px;
        font-family: Arial, Arial-Regular;
        font-weight: 400;
        text-align: left;
        letter-spacing: 2px;
        padding-left: 0;

        span:nth-child(2) {
          font-size: 24px;
        }
      }
      .title3 {
        position: absolute;
        right: 0;
        top: 16px;
        font-size: 48px;
        font-family: Arial, Arial-Regular;
        font-weight: 400;
        text-align: left;
        letter-spacing: 2px;
        &::before {
          display: none;
        }
        span:nth-child(2) {
          font-size: 24px;
        }
      }
    }
    .line {
      position: absolute;
      width: 100%;
      height: 2px;
      background: #24afd2;
      top: 75px;
      &::before {
        content: '';
        position: absolute;
        right: -8px;
        top: -8px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: inherit;
      }
      &::after {
        content: '';
        position: absolute;
        right: -4px;
        top: -4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #24afd2;
      }
    }
  }
}
.second {
  &::after {
    background: #0196f5 !important;
  }
}
.thirth {
  background: #6f6b39 !important;
  &::after {
    background: #c2a42f !important;
  }
}
.fourth {
  background: #67763a !important;
  &::after {
    background: #b4bb35 !important;
  }
}
.demand-item {
  width: 100%;
  height: 134px;
  padding-top: 10px;
  // border: 1px solid red;
  .demand-item-left {
    width: 100px;
    height: 104px;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .demand-item-right {
    width: 366px;
    height: 100%;
    float: left;
    position: relative;
    margin-left: 40px;
    .demand-item-info {
      .title1 {
        position: absolute;
        top: 25px;
        font-size: 30px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        letter-spacing: 3px;
      }
      .title2 {
        position: absolute;
        right: 0;
        top: 20px;
        font-size: 50px;
        font-family: Arial, Arial-Bold;
        font-weight: 700;
        text-align: left;
        // color: #f8f922;
        background: none;
        span {
          font-size: 24px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
        }
      }
    }
    .line {
      position: absolute;
      width: 100%;
      height: 2px;
      background: #24afd2;
      top: 80px;
      &::before {
        content: '';
        position: absolute;
        right: -8px;
        top: -8px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: inherit;
      }
      &::after {
        content: '';
        position: absolute;
        right: -4px;
        top: -4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #24afd2;
      }
    }
  }
}

.text-color {
  color: #00c0ff !important;
}
</style>
