<!--  -->
<template>
  <div class="funeng between">
    <div class="funeng-item relative" v-for="(item, i) in funengList" :key="i">
      <img :src="item.icon" class="funeng-icon absolute" alt="" />
      <div class="funeng-name absolute fz30 fw600">{{ item.label }}</div>
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
  margin-left: 100px;
  width: 2020px;
  .funeng-item {
    width: 237px;
    height: 76px;
    background: url('../../../assets/imgs/92.png');
    background-size: 100%;
    .funeng-icon {
      width: 38px;
      height: 38px;
      left: 20px;
      top: 17px;
    }
    .funeng-name {
      left: 90px;
      top: 19px;
    }
  }
}
</style>
