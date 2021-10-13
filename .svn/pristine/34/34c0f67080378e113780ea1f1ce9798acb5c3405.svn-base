<template>
  <div class="container">
    <container :options="{ width: 3840, height: 1080 }">
      <div class="header">
        <Header></Header>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </container>
  </div>
</template>

<script>
import Header from './Header'
import Container from '@/components/container'
export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    Header,
    Container
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 600 !important;
  font-size: 18px;

  .header {
    height: 100px;
  }
  .content {
    height: calc(100% - 66px);
    overflow: hidden;
    padding: 48px 80px;
  }
}
</style>
