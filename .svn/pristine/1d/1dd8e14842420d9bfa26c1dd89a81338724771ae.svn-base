<!--  -->
<template>
  <div class="left-top relative">
    <div class="l-t">
      <div class="l-t-t">
        <span>三重目标</span>
      </div>
      <img class="l-t-c-img" src="../../../assets/imgs/home/Rectangle3324.png" alt="" srcset="" />
      <div class="l-t-r">
        <div class="l-t-r-top">
          <div v-for="(item, index) in list1" :key="index" class="l-t-r-item">
            <img :class="'l-t-r-item-img index-' + index" :src="item.imgUrl" alt="" srcset="" />
            <span class="l-t-r-item-txt">{{ item.name }}</span>
          </div>
        </div>
        <img class="l-t-r-b" src="../../../assets/imgs/home/Rectangle 3232.png" alt="" srcset="" />
      </div>
    </div>
    <div class="l-c">
      <span class="l-c-txt1">建设具有中国特色国际领先的能源互联网企业</span>
      <span class="l-c-txt2">能源互联网形态下多元融合高弹性电网</span>
      <img class="l-c-b" src="../../../assets/imgs/home/Rectangle 3232.png" alt="" srcset="" />
    </div>
    <div class="l-b">
      <div v-for="(item, index) in list2" :key="index" class="l-b-item">
        <img class="l-b-item-img" :src="item.imgUrl" alt="" />
        <span class="l-b-item-txt">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        {
          imgUrl: require('../../../assets/imgs/home/Group 17165.png'),
          name: '安全可靠',
          acrive: true,
        },
        {
          imgUrl: require('../../../assets/imgs/home/Image 10.png'),
          name: '经济高效',
        },
        {
          imgUrl: require('../../../assets/imgs/home/Image 11.png'),
          name: '清洁低碳',
        },
      ],
      list2: [
        {
          imgUrl: require('../../../assets/imgs/home/xuanzhuan-1.png'),
          name: '源',
        },
        {
          imgUrl: require('../../../assets/imgs/home/xuanzhuan-2.png'),
          name: '网',
        },
        {
          imgUrl: require('../../../assets/imgs/home/xuanzhuan-3.png'),
          name: '荷',
        },
        {
          imgUrl: require('../../../assets/imgs/home/xuanzhuan-4.png'),
          name: '储',
        },
      ],
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
}
</script>
<style lang="less" scoped>
.left-top {
  padding: 32px 28px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  .l-t {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    .l-t-t {
      display: flex;
      span {
        font-size: 26px;
        font-family: Helvetica Neue, Helvetica Neue-Bold;
        font-weight: 700;
        text-align: left;
        color: #33ffff;
        line-height: 26px;
        letter-spacing: 2px;
      }
    }
    .l-t-c-img {
      margin-left: 50px;
      width: 4px;
      height: 56px;
    }
    .l-t-r {
      display: flex;
      flex-direction: column;
      align-items: center;
      .l-t-r-top {
        display: flex;
        align-items: center;
      }
      .l-t-r-item {
        display: flex;
        align-items: center;
        margin-left: 76px;
        .l-t-r-item-txt {
          font-size: 26px;
          font-family: Helvetica Neue, Helvetica Neue-Bold;
          font-weight: 700;
          // color: #b6fff3;
          color: #0fffd5;
          line-height: 26px;
          margin-left: 36px;
        }
        .index-0 {
          width: 36px;
          height: 34px;
          opacity: 1;
        }
        .index-1 {
          width: 30px;
          height: 28px;
          opacity: 1;
        }
        .index-2 {
          width: 32px;
          height: 32px;
          opacity: 1;
        }
      }
      .l-t-r-item:first-child {
        margin-left: 28px;
        .l-t-r-item-txt {
          color: #b6fff3;
        }
      }
      .l-t-r-b {
        width: 492px;
        height: 4px;
        opacity: 1;
        margin-top: 2px;
      }
    }
  }
  .l-c {
    margin-top: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .l-c-txt1,
    .l-c-txt2 {
      opacity: 1;
      font-size: 26px;
      font-family: Helvetica Neue, Helvetica Neue-Bold;
      font-weight: 700;
      text-align: center;
      color: #87d7fb;
      line-height: 38px;
      letter-spacing: 12px;
      text-shadow: 0px 4px 10px #000000;
    }
    .l-c-txt2 {
      margin-top: 4px;
    }
    .l-c-b {
      width: 490px;
      height: 4px;
      opacity: 1;
      margin-top: 2px;
    }
  }
  .l-b {
    background: url('../../../assets/imgs/home/Group 17150.png') no-repeat;
    background-size: contain;
    display: flex;
    width: 978px;
    height: 92px;
    justify-content: space-around;
    margin-top: 16px;
    .l-b-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -11px;
      .l-b-item-img {
        width: 146px;
        height: 80px;
        // transform-style: preserve-3d;
        // animation: spin 3s infinite linear;
      }
      .l-b-item-txt {
        margin-top: -15px;
        font-size: 26px;
        text-align: left;
        color: #03ebe5;
        line-height: 26px;
        letter-spacing: 2px;
      }
    }
    @-webkit-keyframes spin {
      from {
        -webkit-transform: rotateY(0);
      }
      to {
        -webkit-transform: rotateY(360deg);
      }
    }
  }
}
</style>
