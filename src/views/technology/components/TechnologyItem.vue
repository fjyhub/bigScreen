<!--  -->
<template>
  <div class="right-item">
    <Icon
      name="iconyuandian"
      :styleObject="{
        width: 16,
        height: 16,
        color: '#FFC533',
        position: 'relative',
        left: 0,
        top: 3
      }"
    ></Icon>
    <span class="right-item-date">[2019-10-23]</span>
    中压线路典型接线提升5个百分点。
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'normal'
    }
  },
  data() {
    return {}
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.right-item {
  line-height: 28px;
  text-align: left;
}
.right-item-date {
  color: #a3b1cc !important;
}
</style>
