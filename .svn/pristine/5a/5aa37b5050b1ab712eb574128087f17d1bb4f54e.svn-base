<template>
  <div class="container">
    <Loading v-if="!ready">Loading...</Loading>
    <container :options="{ width: 1920, height: 1080 }" v-else>
      <div class="data-content">
        <div class="left">
          <div class="left-1"></div>
          <div class="left-2"></div>
        </div>
        <div class="center">
          <Map class="card-border"></Map>
        </div>
        <div class="right"></div>
      </div>
    </container>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Container from '@/components/Container'
import Map from '@/components/Map'
export default {
  name: 'Home',
  data() {
    return {
      ready: false
    }
  },
  components: {
    Loading,
    Container,
    Map
  },
  mounted() {
    setTimeout(() => {
      this.ready = !this.ready
    }, 500)
  }
}
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  // background-color: rgb(50, 47, 48);
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  .data-content {
    padding-top: 130px;
    display: flex;
    .card-border {
      border: 1px #0174f5 solid;
      border-radius: 10px;
    }
    .left {
      flex: 0 0 490px;
      display: flex;
      flex-direction: column;
      .left-1 {
        height: 400px;
        background: red;
      }
      .left-2 {
        height: 400px;
        background: yellow;
      }
    }
    .center {
      width: auto;
    }
    .right {
      flex: 0 0 490px;
    }
  }
}
</style>
