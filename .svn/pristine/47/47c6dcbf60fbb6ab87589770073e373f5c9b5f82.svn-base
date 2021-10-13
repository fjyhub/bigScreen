<!--  -->
<template>
  <div class="guide" @click="clickPage">
    <img
      class="first animate__animated animate__fadeInUp"
      v-show="showNum > 0 && showNum < 4"
      src="../../assets/imgs/WechatIMG62.png"
    />

    <img
      class="second animate__animated animate__fadeInUp"
      v-show="showNum > 1 && showNum < 4"
      src="../../assets/imgs/WechatIMG64.png"
    />
    <img
      class="third animate__animated animate__zoomIn"
      v-show="showNum > 2 && showNum < 4"
      src="../../assets/imgs/WechatIMG53.png"
    />
    <transition name="map">
      <img
        class="xianlu"
        v-show="showNum > 2 && showNum < 4"
        src="../../assets/imgs/WechatIMG69.png"
      />
    </transition>

    <img class="fourth" v-show="showNum > 3" src="../../assets/imgs/WechatIMG61.png" />
    <img
      class="fifth animate__animated animate__slideInRight"
      v-show="showNum > 3 && showNum <= 6"
      src="../../assets/imgs/WechatIMG64.png"
    />
    <img
      class="sixth animate__animated animate__slideInUp"
      v-show="showNum > 4"
      src="../../assets/imgs/WechatIMG65.png"
    />
    <img
      class="seventh sixth animate__animated animate__flash"
      v-show="showNum > 5"
      src="../../assets/imgs/WechatIMG56.png"
    />
    <img src="../../assets/imgs/WechatIMG63.png" v-show="showNum > 6" class="eighth" alt="" />

    <transition name="zhankai">
      <img src="../../assets/imgs/WechatIMG73.png" v-show="showNum > 6" class="ninth" alt="" />
    </transition>
    <transition name="dizuo">
      <img src="../../assets/imgs/WechatIMG74.png" v-show="showNum > 6" class="tenth" alt="" />
    </transition>
  </div>
</template>

<script>
var _ = require('lodash')
export default {
  data() {
    return {
      showNum: 1
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    clickPage: _.debounce(function(event) {
      let that = this
      event.preventDefault()
      that.showNum++
      if (that.showNum > 7) {
        that.$router.replace('/gaotanxing/home')
      }
    }, 500)
  }
}
</script>
<style lang="less" scoped>
.guide {
  width: 100%;
  height: 100%;
}
.first {
  width: 1000px;
  position: fixed;
  left: 100px;
  bottom: 80px;
}
.second {
  width: 1600px;
  position: fixed;
  left: 1100px;
  bottom: 80px;
}
.third {
  width: 1200px;
  position: fixed;
  left: 2600px;
  bottom: 50px;
}
.xianlu {
  width: 1200px;
  position: fixed;
  left: 2600px;
  bottom: 50px;
}
.fourth {
  width: 373px;
  position: fixed;
  left: 115px;
  bottom: 412px;
}
.fifth {
  width: 1500px;
  position: fixed;
  left: 600px;
  bottom: 80px;
}
.sixth {
  width: 1600px;
  position: fixed;
  left: 2100px;
  bottom: 80px;
}
.seventh {
  width: 1000px;
  position: fixed;
  left: 2438px;
  bottom: 180px;
}

.eighth {
  width: 350px;
  position: fixed;
  left: 705px;
  bottom: 572px;
}
.ninth {
  width: 800px;
  height: 300px;
  position: fixed;
  left: 1170px;
  bottom: 370px;
}

.tenth {
  width: 1200px;
  position: fixed;
  left: 970px;
  bottom: 200px;
}

.zhankai-enter,
.zhankai-leave-to {
  width: 0px;
  height: 300px;
}
.zhankai-enter-active,
.zhankai-leave-active {
  transition: all 1s;
  transition-delay: 0.6s;
}

.dizuo-enter,
.dizuo-leave-to {
  transform: scaleX(0.1);
}
.dizuo-enter-active,
.dizuo-leave-active {
  transition: all 0.5s;
}

.map-enter {
  transform: scale(0.1);
  opacity: 0;
}
.map-enter-active {
  transition: all 2s ease;
}
</style>
