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
        :points="`${width * 0.1 + 5 + titleWidth + 140}, 14 ${width * 0.9},14`"
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
      <polyline
        v-for="(point, i) in linepoints"
        :key="i"
        class="out-border"
        :points="`${point.top[0]},${point.top[1]} ${point.bottom[0]},${point.bottom[1]}`"
        fill="none"
        stroke="#00E8F9"
        stroke-width="2"
        :transform="`translate(${getLinepointsX}, -2)`"
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
  name: 'BorderBox2',
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
    return {
      interval: 10,
      linepoints: []
    }
  },

  components: {},

  computed: {
    getLinepointsX() {
      return this.width * 0.1 + 20 + this.titleWidth
      // return 300
    }
  },

  mounted() {
    this.getIntervals()
  },

  methods: {
    getIntervals() {
      let num = 10
      this.linepoints = []
      for (let i = 0; i < num; i++) {
        this.linepoints.push({
          top: JSON.parse(`[${(i + 1) * this.interval}, 10]`),
          bottom: JSON.parse(`[${i * this.interval}, ${this.interval + 10}]`)
        })
      }
      console.log(this.linepoints[0])
    }
  }
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
