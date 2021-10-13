<!--  -->
<template>
  <div class="funeng between">
    <div class="funeng-item relative" v-for="(item, i) in funengList" :key="i">
      <img :src="item.icon" class="funeng-icon absolute" alt="" />
      <div class="funeng-name absolute fz22 fw600">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      funengList: [
        { icon: require('@/assets/imgs/jsfn.png'), label: '技术赋能' },
        { icon: require('@/assets/imgs/zcfn.png'), label: '政策赋能' },
        { icon: require('@/assets/imgs/scfn.png'), label: '市场赋能' },
        { icon: require('@/assets/imgs/szfn.png'), label: '数字赋能' },
        { icon: require('@/assets/imgs/zzfn.png'), label: '组织赋能' }
      ]
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.funeng {
  width: 1185px;
  .funeng-item {
    width: 217px;
    height: 76px;
    background: url('../../../assets/imgs/sanjx.png');
    background-size: 217px 76px;
    .funeng-icon {
      width: 38px;
      height: 38px;
      left: 29px;
      top: 18px;
    }
    .funeng-name {
      left: 103px;
      top: 27px;
    }
  }
}
</style>
