<!--  -->
<template>
  <div class="container" :style="{ width: width + 'px', height: height + 'px' }">
    <svg :width="width" :height="height">
      <polyline
        class="out-border"
        :points="
          `2,${height * 0.15} 2,${bevel} ${bevel},2 ${width -
            bevel},2 ${width},${bevel} ${width},${height * 0.15}`
        "
        fill="none"
        stroke="#00E8F9"
      />
      <polyline
        class="out-border"
        :points="
          `${width},${height * 0.9} ${width},${height - bevel} ${width - bevel},${height} ${width *
            0.9},${height}`
        "
        fill="none"
        stroke="#00E8F9"
      />
      <polyline
        class="out-border"
        :points="
          `${width * 0.15},${height} ${bevel},${height} 2,${height - bevel} 2,${height * 0.9}`
        "
        fill="none"
        stroke="#00E8F9"
      />

      <polyline
        class="in-border"
        :points="
          `${padding},${height * 0.15} ${padding},${bevel} ${bevel},${padding} ${width *
            0.15},${padding}`
        "
        fill="none"
        stroke="#00E8F9"
      />
      <polyline
        class="in-border"
        :points="
          `${width * 0.5},${padding} ${width - bevel},${padding} ${width -
            padding},${bevel} ${width - padding},${height * 0.15}`
        "
        fill="none"
        stroke="#00E8F9"
      />
      <polyline
        class="in-border"
        :points="
          `${width - padding},${height * 0.9} ${width - padding},${height - bevel} ${width -
            bevel},${height - padding} ${width * 0.9},${height - padding}`
        "
        fill="none"
        stroke="#00E8F9"
      />
      <polyline
        class="in-border"
        :points="
          `${width * 0.15},${height - padding} ${bevel},${height - padding} ${padding},${height -
            bevel} ${padding},${height * 0.9}`
        "
        fill="none"
        stroke="#00E8F9"
      />
    </svg>
    <div
      class="content"
      :style="{ width: width + 'px', height: height + 'px', padding: padding + 5 + 'px' }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BorderBox1',
  props: {
    width: {
      type: Number,
      default: 651
    },
    height: {
      type: Number,
      default: 300
    },
    bevel: {
      type: Number,
      default: 20
    },
    padding: {
      type: Number,
      default: 12
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
.container {
  position: relative;
  .content {
    position: absolute;
    padding: 120px;
    top: 0;
    left: 0;
    text-align: right;
    box-sizing: border-box;
  }
}
.in-border {
  opacity: 0.3;
}
</style>
