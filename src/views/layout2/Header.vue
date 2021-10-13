<!--  -->
<template>
  <div class="header">
    <!-- <div class="header-text pt10">浙江多元融合高弹性电网总体概览</div> -->
    <!-- <ul class="tab between align-center pl20 absolute">
      <li
        class="tab-item point fz20"
        :class="{ isChoosed: choosedIndex === i }"
        v-for="(tab, i) in tabs"
        @click="chooseTab(tab, i)"
        :key="i"
      >
        <div>{{ tab.title }}</div>
      </li>
    </ul>
    <div class="user-info absolute">
      <Icon
        class="login-out absolute"
        name="iconzu939"
        :styleObject="{ width: 30, height: 30 }"
      ></Icon>
    </div> -->
  </div>
</template>

<script>
// import menus from '@/data/menus.js'
export default {
  data() {
    return {
      // tabs: menus,
      choosedIndex: 0
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.initTab()
  },

  methods: {
    chooseTab(tab, i) {
      this.choosedIndex = i
      this.$router.push({
        path: tab.index
      })
    },
    initTab() {
      let path = this.$route.path
      this.tabs.forEach((item, i) => {
        if (item.index === path) this.choosedIndex = i
      })
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  background: url('../../assets/imgs/标头2.png');
  background-size: 100% 110px;
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
      margin-right: 80px;
    }
    .tab-item {
      line-height: 34px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .isChoosed {
      background: url('../../assets/imgs/tabBg.png') bottom no-repeat;
      color: #2e90fd !important;
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
}
</style>
