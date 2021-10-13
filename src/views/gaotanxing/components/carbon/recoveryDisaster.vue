<!--  -->
<template>
  <div class="external_elec">
    <div class="sub_title">灾后供电恢复时间</div>
    <div class="inner_content">
      <img src="../../../../assets/carbon/healing_bg.png" alt="" class="img_box">
      <div class="list">
        <div class="item clearfix">
          <div class="name">13级及以下台风</div>
          <div class="time"><24小时</div>
          <div class="bottom_str"></div>
        </div>
        <div class="item clearfix">
          <div class="name">14级至15级强台风</div>
          <div class="time"><48小时</div>
          <div class="bottom_str"></div>
        </div>
        <div class="item clearfix">
          <div class="name">16级及以上超强台风</div>
          <div class="time"><72小时</div>
          <div class="bottom_str"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dianliChart: null,
      dianliangChart: null
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.external_elec {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .sub_title {
    height: 70px;
    line-height: 70px;
    color: #38e6fc;
    font-size: 24px;
    font-weight: bold;
    padding-left: 30px;
    background: url('../../../../assets/carbon/sub_title_bg.png') left center no-repeat;
    background-size: 5px 34px;
  }
  .inner_content {
    height: 100%;
    margin-top: -70px;
    padding-top: 130px;
    display: flex;
    align-items: center;
    font-size: 22px;
    color: #fff;
  }
  .img_box {
    width: 155px;
    height: 155px;
    margin-right: 20px;
  }
  .list{
    flex: 1;
  }
  .item{
    width: 100%;
    position: relative;
    height: 40px;
    margin-top: 14px;
  }
  .name {
    width: 71%;
    float: left;
  }
  .time {
    float: left;
    color: #38e6fc;
  }
  .bottom_str {
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0px;
    background: url('../../../../assets/carbon/healing_str.png') left center no-repeat;
    background-size: 100% 100%;
  }
}
</style>
