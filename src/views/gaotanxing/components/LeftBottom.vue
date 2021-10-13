<!--  -->
<template>
  <div class="left-bottom">
    <div class="l-b-t">
      <img class="l-b-t-img" src="../../../assets/imgs/home/Group18694.png" alt="" srcset="" />
    </div>
    <div class="l-b-b">
      <div v-for="(item, index) in list" :key="index" class="l-b-b-item">
        <TrigonSvg />
        <div class="item-block">
          <span class="l-b-b-item-txt1">{{ item.txt1 }}</span>
          <span class="l-b-b-item-txt2">{{ item.txt2 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrigonSvg from './TrigonSvg'

export default {
  data() {
    return {
      list: [
        {
          txt1: '打造新型电力系统',
          txt2: '浙江样板',
        },
        {
          txt1: '引领浙江高质量',
          txt2: '提前碳达峰',
        },
        {
          txt1: '构建省域能源',
          txt2: '能源互联网',
        },
      ],
    }
  },

  components: {
    TrigonSvg,
  },

  computed: {},

  mounted() {},

  methods: {},
}
</script>
<style lang="less" scoped>
.left-bottom {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -4px;
  .l-b-t {
    display: flex;
    .l-b-t-img {
      width: 892px;
      height: 446px;
      opacity: 1;
      display: flex;
    }
  }
  .l-b-b {
    padding: 16px 48px 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .l-b-b-item {
      width: 250px;
      height: 162px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      background-color: #0E2B4C; 
      .item-block{
          position: absolute;
          left: 0;
          top: 45px;    
          padding: 4px 0; 
          display: flex;
          flex-direction: column;  
          align-items: center;
          background-color: #0E2B4C; 
          width: 100%;
      }
      .l-b-b-item-txt1 {
        font-size: 26px;
        font-family: PingFang SC, PingFang SC-Semibold;
        font-weight: 600;
        color: #ffffff;
        line-height: 26px;
      }
      .l-b-b-item-txt2 {
        font-size: 30px;
        font-family: PingFang SC, PingFang SC-Heavy;
        font-weight: 800;
        color: #ffffff;
        line-height: 30px;
        margin-top: 4px;
      }
    }
  }
}
</style>
