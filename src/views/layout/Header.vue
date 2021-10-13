<!--  -->
<template>
  <div class="header">
    <!-- <div class="header-text pt10">浙江多元融合高弹性电网总体概览</div> -->
    <div class="between" style="width:100%;padding: 0 490px">
      <ul class="tab between align-center">
        <li
          class="tab-item point fz33"
          :class="{ isChoosed: tabName === tab.index }"
          v-for="(tab, i) in leftTabs"
          :key="i"
        >
          <div @click="chooseTab(tab, i)">{{ tab.title }}</div>
        </li>
      </ul>
      <!-- class="tab between align-center pl20 absolute" -->
      <ul class="tab between align-center">
        <li
          class="tab-item point fz33"
          :class="{ isChoosed: tabName === tab.index }"
          v-for="(tab, i) in rightTabs"
          :key="i"
        >
          <div @click="chooseTab(tab, i)">{{ tab.title }}</div>
        </li>
      </ul>
    </div>
    <!-- <div class="user-info absolute">
      <Icon
        class="login-out absolute"
        name="iconzu939"
        :styleObject="{ width: 30, height: 30 }"
      ></Icon>
    </div> -->
  </div>
</template>

<script>
import leftMenus from '@/data/leftMenus.js'
import rightMenus from '@/data/rightMenus.js'
export default {
  data() {
    return {
      leftTabs: leftMenus,
      rightTabs: rightMenus,
      choosedIndex: 0,
      tabName: ''
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.initTab()

    this.tabName = this.$route.path
    console.log(this.tabName)
  },
  // watch:{
  //   $route:{
  //     handler(){
  //       console.log(this.$route)
  //     }
  //   }
  // },

  methods: {
    chooseTab(tab, i) {
      this.choosedIndex = i
      this.tabName = tab.index
      this.$router.push({
        path: tab.index
      })
    },
    initTab() {
      let path = this.$route.path
      // this.tabs.forEach((item, i) => {
      //   if (item.index === path) this.choosedIndex = i
      // })
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  // background: url('../../assets/imgs/header.svg');
  // background-size: 100% 66px;
  // margin: 10px 10px;
  .header-text {
    text-align: center;
    font-size: 30px;
    line-height: 46px;
    color: #7ed2f3;
    font-weight: 700;
  }
  .tab {
    // width: 500px;
    left: 550px;
    height: 106px;
    top: -20px;
    li {
      // margin: 0 40px;
    }
    .tab-item {
      height: 70px;
      line-height: 80px;
      text-align: center;
      width: 250px;
      text-align: center;
      background: url('../../assets/imgs/nav-bg.png') no-repeat center;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .isChoosed {
      background: url('../../assets/imgs/nav-bg-active.png') no-repeat center;
      background-size: 100% 100%;
      // color: #2e90fd !important;
    }
  }
  .user-info {
    right: 30px;
    top: 10px;
    .company {
      top: 15px;
      left: 15px;
    }
    .time {
      top: 46px;
      left: 15px;
    }
    .login-out {
      right: 30px;
      top: 10px;
    }
  }
  /deep/.fz33 {
    font-size: 33px;
    font-weight: 400;
    letter-spacing: 4px;
  }
}
</style>
