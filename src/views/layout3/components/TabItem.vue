<!--  -->
<template>
  <div>
    <svg>
      <polyline
        class="out-border"
        :points="
          `0,${height / 2} ${bevel},0 ${width - 2 * bevel},0 ${width},${height / 2} ${width -
            2 * bevel},${height} ${bevel},${height}`
        "
        fill="none"
        stroke="#0098B7"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    width: {
      type: Number,
      default: 128
    },
    height: {
      type: Number,
      default: 34
    },
    bevel: {
      type: Number,
      default: 4
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
<style lang="less" scoped></style>
