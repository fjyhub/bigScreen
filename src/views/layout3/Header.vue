<!--  -->
<template>
  <div class="header">
    <div class="header-left">
      <span class="header-left-time">{{ time }}</span>
      <div class="header-left-list">
        <div v-for="(item, index) in leftList" :key="index" class="header-left-list-item">
          <img :src="item.icon" :style="'width:'+item.iconWidth+'px;height:'+item.iconHeight+'px'" alt="" srcset="" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="header-right">
      <div
        v-for="(item, index) in rightList"
        :key="index"
        :class="'header-right-item' + (currentTab === index ? ' on' : '')"
        @click="setCurrentTab(index)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import menus from '@/data/menus.js'
export default {
  data() {
    return {
      // tabs: menus,
      choosedIndex: 0,
      timeFn: null,
      time: '',
      leftList: [
        {
          icon: require('@/assets/imgs/home/top-3.png'),
          iconWidth: 22,
          iconHeight: 30,
          name: '能源监测',
        },
        {
          icon: require('@/assets/imgs/home/top-1.png'),
          iconWidth: 28,
          iconHeight: 28,
          name: '30·60',
        },
        {
          icon: require('@/assets/imgs/home/top-2.png'),
          iconWidth: 30,
          iconHeight: 26,
          name: '高弹电网',
          path: ''
        },
      ],
      currentTab: 0,
      rightList: [
        {
          name: '碳排智探',
          path: '',
        },
        {
          name: '示范省创建',
          path: '',
        },
        {
          name: '能效评价',
          path: '',
        },
      ],
    }
  },

  components: {},

  computed: {},

  mounted() {
    console.log(this.$route.path)
    // this.initTab()
    this.setIntervalFn()
  },

  destroyed() {
    this.timeFn = null
  },

  methods: {
    chooseTab(tab, i) {
      this.choosedIndex = i
      this.$router.push({
        path: tab.index,
      })
    },
    initTab() {
      let path = this.$route.path
      this.tabs.forEach((item, i) => {
        if (item.index === path) this.choosedIndex = i
      })
    },
    setIntervalFn() {
      this.timeFn = setInterval(() => {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()

        let hour = date.getHours()
        turnDate(hour)
        let min = date.getMinutes()
        turnDate(min)
        let sec = date.getSeconds()
        sec = turnDate(sec)
        this.time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + min + ':' + sec
      }, 1000)
      function turnDate(date) {
        if (date < 10) {
          return (date = '0' + date)
        } else {
          return date
        }
      }
    },
    setCurrentTab(index) {
      this.currentTab = index
    },
  },
}
</script>
<style lang="less" scoped>
.header {
  background: url('../../assets/imgs/home/Group 109.png') no-repeat;
  background-size: 100% 114px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  .header-left {
    margin-top: 16px;
    height: 50px;
    display: flex;
    align-items: center;
    span {
      color: #25AEAF;
      font-size: 28px;
    }
    .header-left-time {
      color: #33ffff;
      letter-spacing: 2px;
    }
    .header-left-list {
      display: flex;
      align-items: center;
      margin-left: 100px;
      .header-left-list-item{
        width: 236px;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('../../assets/imgs/home/left-item-bg.png') no-repeat;
        background-size: contain;
        margin-right: 12px;
        img{
          width: 30px;
          height: 30px;
        }
        span{
          margin-left: 20px;
        }
      }
    }
  }
  .header-right {
    margin-top: 16px;
    display: flex;
    .header-right-item {
      cursor: pointer;
      width: 340px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('../../assets/imgs/home/right-item-bg.png') no-repeat;
      background-size: contain;
      margin-left: 50px;
      span {
        color: #25aeaf;
        font-size: 28px;
        letter-spacing: 4px;
        margin-top: -8px;
      }
    }
    .header-right-item.on {
      background: url('../../assets/imgs/home/right-item-active-bg.png') no-repeat;
      background-size: contain;
      span {
        color: #35ccff;
      }
    }
  }
}
</style>
