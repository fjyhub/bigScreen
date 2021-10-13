<!--  -->
<template>
  <div class="zhuzi direction-column align-center">
    <div class="top">
      <div class="top-title fz28 fw600 ta-center mt30">能源互联网形态下多元融合高弹性电网</div>
      <div class="guangxiao"></div>
      <div class="between pl30 pr30">
        <div class="top-item direction-column align-center" v-for="(item, i) in topList" :key="i">
          <img :src="item.icon" style="width: 120px;" class="gao-wailaidian-border" alt="" />
          <div class="fz22 fw600" style="margin-top: -14px">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="zhuzi-box between">
        <div
          class="zhuzi-item relative"
          v-for="(item, i) in bottomList"
          :key="i"
          :class="{ green: item.background === 'green' }"
        >
          <div class="zhuzi-item-first fz26 absolute">
            <div style="margin-bottom: 15px">{{ item.first.substring(0, 4) }}</div>
            <span>{{ item.first.substring(4) }}</span>
          </div>
          <div class="zhuzi-item-second fz18 fw600 absolute">
            {{ item.second }}
          </div>
          <div class="zhuzi-item-third fz22 fw600 absolute">
            {{ item.third }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topList: [
        {
          icon: require('@/assets/imgs/yuan.png'),
          name: '源'
        },
        {
          icon: require('@/assets/imgs/wang.png'),
          name: '网'
        },
        {
          icon: require('@/assets/imgs/he.png'),
          name: '荷'
        },
        {
          icon: require('@/assets/imgs/chu.png'),
          name: '储'
        }
      ],
      bottomList: [
        {
          first: `灵活规划网架坚强`,
          second: '网架柱',
          third: '谋全局 强筋骨',
          background: 'blue'
        },
        {
          first: '电网引导 多能互联',
          second: '融合柱',
          third: '融能源 促清洁',
          background: 'blue'
        },
        {
          first: '安全承载 耐受抗扰',
          second: '安全柱',
          third: '建防线 承冲击',
          background: 'green'
        },
        {
          first: '设备挖潜 运行高效',
          second: '效率柱',
          third: '挖潜力 降冗余',
          background: 'green'
        },
        {
          first: '各侧资源 唤醒聚集',
          second: '资源柱',
          third: '聚用户 增互动',
          background: 'blue'
        },
        {
          first: '源网荷储 弹性平衡',
          second: '互动柱',
          third: '集多元 调负荷',
          background: 'blue'
        },
        {
          first: '市场改革 机制配套',
          second: '市场柱',
          third: '搭市场 疏成本',
          background: 'green'
        },
        {
          first: '科创引领 数智赋能',
          second: '数智柱',
          third: '创新智 衍生态',
          background: 'green'
        }
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
.zhuzi {
  .top {
    width: 833px;
    height: 187px;
    background: url('../../../assets/imgs/zhuzishang.png');
    .guangxiao {
      height: 20px;
      background: url('../../../assets/imgs/guangxiao.png') no-repeat;
      background-size: 100% 20px;
      background-position: center;
    }
  }
  .bottom {
    width: 982px;
    height: 474px;
    background: url('../../../assets/imgs/zhuzixia.png');
  }
}
.zhuzi-box {
  padding: 35px 0;
  .zhuzi-item {
    width: 118px;
    height: 414px;
    background: url('../../../assets/imgs/zhuzi1.png');
    .zhuzi-item-first {
      width: 28px;
      top: 31px;
      left: 45px;
      line-height: 30px;
      font-weight: 600;
    }
    .zhuzi-item-second {
      color: #000;
      top: 315px;
      left: 31px;
      letter-spacing: 4px;
    }
    .zhuzi-item-third {
      width: 90px;
      top: 343px;
      left: 20px;
      line-height: 30px;
      letter-spacing: 4px;
    }
  }
  .green {
    background: url('../../../assets/imgs/zhuzi2.png');
  }
}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.gao-wailaidian-border {
  // transform: rotate(360deg);
  // animation: rotation 8s linear infinite;
}
</style>
