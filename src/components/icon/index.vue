<!--  -->
<template>
  <svg class="icon" :style="{ ...styleObject }">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    styleObject: Object
  },
  data() {
    return {}
  },

  components: {},

  computed: {
    iconName() {
      return `#${this.name}`
    }
  },

  mounted() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.icon {
  width: 100%;
  height: 100%;
  display: inline-block;
  fill: currentColor;
  overflow: hidden;
}
</style>
