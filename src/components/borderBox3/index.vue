<!--  -->
<template>
  <div class="container" :style="{ width: width + 'px', height: height + 'px' }">
    <svg :width="width" :height="height">
      <polyline
        class="out-border"
        :points="`2,${height * 0.2} 2,${bevel + 14} ${bevel},14 ${width * 0.1},14`"
        fill="none"
        stroke="#00E8F9"
      />
      <polyline
        class="out-border"
        :points="`${width * 0.1 + 5 + titleWidth}, 14 ${width * 0.9 - btnWidth},14`"
        fill="none"
        stroke="#00E8F9"
      />
      <polyline
        class="out-border"
        :points="
          `${width * 0.9},14 ${width - bevel},14 ${width},${bevel + 14} ${width},${height * 0.2}`
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
          `${width * 0.1},${height} ${bevel},${height} 2,${height - bevel} 2,${height * 0.9}`
        "
        fill="none"
        stroke="#00E8F9"
      />
      <polygon
        :points="
          `2,${height * 0.2} 2,${bevel + 14} ${bevel},14 ${width * 0.1},14 ${width -
            bevel},14 ${width},${bevel + 14} ${width},${height - bevel} ${width -
            bevel},${height} ${bevel},${height} 2,${height - bevel}`
        "
        fill="rgba(0,0,0,0.5)"
      ></polygon>

      <polyline
        class="in-border"
        :points="
          `${padding},${height * 0.2} ${padding},${bevel + 14} ${bevel},${padding + 14} ${width *
            0.1},${padding + 14}`
        "
        fill="none"
        stroke="#00E8F9"
      />
      <polyline
        class="in-border"
        :points="
          `${width * 0.9},${padding + 14} ${width - bevel},${padding + 14} ${width -
            padding},${bevel + 14} ${width - padding},${height * 0.2}`
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
          `${width * 0.1},${height - padding} ${bevel},${height - padding} ${padding},${height -
            bevel} ${padding},${height * 0.9}`
        "
        fill="none"
        stroke="#00E8F9"
      />
      <text :x="`${width * 0.1 + 10}`" y="20" fill="#00E7FD" font-size="20">
        {{ title }}
      </text>
    </svg>
    <div
      class="content"
      :style="{ width: width + 'px', height: height + 'px', padding: padding + 5 + 'px' }"
    >
      <div class="btn" :style="{ right: width * 0.1 + 'px', width: btnWidth + 'px' }">
        <slot name="btn"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BorderBox3',
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
    btnWidth: {
      type: Number,
      default: 120
    },
    padding: {
      type: Number,
      default: 12
    },
    title: {
      type: String,
      default: '义乌市技术指标概括'
    },
    titleWidth: {
      type: Number,
      default: 190
    }
  },
  data() {
    return {}
  },

  components: {},

  computed: {
    getLinepointsX() {
      return this.width * 0.1 + 20 + this.titleWidth
      // return 300
    }
  },

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
    .btn {
      position: absolute;
      top: 0;
      height: 30px;
      padding: 0 5px;
      // background: red;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.in-border {
  opacity: 0.3;
}
</style>
