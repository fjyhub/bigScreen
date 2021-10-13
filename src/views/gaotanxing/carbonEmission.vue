<!-- 
 -->
<template>
  <div class="carbon_emission_box">
    <el-row class="vertical_box">
      <el-col :span="7" class="colBox">
        <div class="vertical_li">
          <div class="content_boxs">
            <div class="title_box">高承载</div>
            <div class="component_box clearfix">
              <div class="left_component">
                <externalElec></externalElec>
              </div>
              <div class="right_component">
                <newEnergy></newEnergy>
              </div>
              <div class="dec_str"></div>
            </div>
          </div>
          <div class="dec_border dec_border1"></div>
          <div class="dec_border dec_border2"></div>
        </div>
        <div class="vertical_li">
          <div class="content_boxs">
            <div class="title_box">高互动</div>
            <div class="component_box clearfix">
              <div class="left_component">
                <interactive></interactive>
              </div>
              <div class="right_component">
                <responsivity></responsivity>
              </div>
              <div class="dec_str"></div>
            </div>
          </div>
          <div class="dec_border dec_border1"></div>
          <div class="dec_border dec_border2"></div>
        </div>
      </el-col>
      <el-col :span="10" class="col_12">
        <div class="vertical_li vertical_li_mid">
          <div class="map">
            <img class="map-icon" src="@/assets/imgs/home/map_title.png" />
            <Map></Map>
            <p class="title-left-top">
              <span class="name">安徽芜湖1000kV特高压</span>
              <span class="sub-name">±800kV白鹤滩直流</span>
            </p>
            <p class="title-left-middle sub-name">±800kV灵绍直流</p>
            <p class="title-left-bottom sub-name">±800kV宜金直流</p>
            <p class="title-right-top name">上海练塘1000kV特高压</p>
            <p class="title-bottom sub-name">福建榕城1000kV特高压</p>
          </div>
        </div>
      </el-col>
      <el-col :span="7" class="colBox">
        <div class="vertical_li">
          <div class="content_boxs">
            <div class="title_box">高效能</div>
            <div class="component_box clearfix economy_box">
              <el-carousel indicator-position="outside" :interval="5000">
                <el-carousel-item>
                  <div class="left_component">
                    <economy></economy>
                  </div>
                  <div class="right_component">
                    <discountRate :echartData="echartData1"></discountRate>
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div class="left_component">
                    <gdpComsume :echartData="echartData2"></gdpComsume>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="dec_border dec_border1"></div>
          <div class="dec_border dec_border2"></div>
        </div>
        <div class="vertical_li">
          <div class="content_boxs">
            <div class="title_box">高自愈</div>
            <div class="component_box clearfix">
              <el-carousel indicator-position="outside" :interval="5000">
                <el-carousel-item>
                  <div class="left_component">
                    <recoveryDisaster></recoveryDisaster>
                  </div>
                  <div class="right_component">
                    <networkHealing :healingData="healingData1"></networkHealing>
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div class="left_component">
                    <networkHealing2 :healingData="healingData2"></networkHealing2>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="dec_border dec_border1"></div>
          <div class="dec_border dec_border2"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import externalElec from '@/views/gaotanxing/components/carbon/externalElec'
import newEnergy from '@/views/gaotanxing/components/carbon/newEnergy'
import interactive from '@/views/gaotanxing/components/carbon/interactive'
import responsivity from '@/views/gaotanxing/components/carbon/responsivity'
import economy from '@/views/gaotanxing/components/carbon/economy'
import discountRate from '@/views/gaotanxing/components/carbon/discountRate'
import networkHealing from '@/views/gaotanxing/components/carbon/networkHealing'
import networkHealing2 from '@/views/gaotanxing/components/carbon/networkHealing2'
import recoveryDisaster from '@/views/gaotanxing/components/carbon/recoveryDisaster'
import gdpComsume from '@/views/gaotanxing/components/carbon/gdpComsume'
import Map from './components/MapSvg'
export default {
  data() {
    return {
      healingData1: {
        rate: 89,
        title: '三遥有效覆盖线路自愈功能投入占比'
      },
      healingData2: {
        rate: 9.7,
        title: '可承受大电源功率损失占全社会最大负荷的比重'
      },
      echartData1: {
        title: '综合线损率',
        yData: [3.7, 3.7, 3.7],
        xData: ['浙江', '韩国', '德国']
      },
      echartData2: {
        title: '万元GDP能耗',
        yData: [0.39, 0.41, 0.17],
        xData: ['浙江', '韩国', '德国']
      }
    }
  },

  components: {
    Map,
    externalElec,
    newEnergy,
    interactive,
    responsivity,
    economy,
    discountRate,
    gdpComsume,
    recoveryDisaster,
    networkHealing,
    networkHealing2
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
  }
}
</script>
<style lang="less" scoped>
.carbon_emission_box {
  width: 100%;
  height: 100%;
  .dec_border {
    width: 150px;
    height: 80px;
    background: url('../../assets/carbon/dec_border.png') no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    position: absolute;

    &.dec_border1 {
      top: -16px;
      left: -16px;
    }
    &.dec_border2 {
      transform: rotate(180deg);
      right: -14px;
      bottom: -16px;
    }
  }
  .vertical_box {
    height: 100%;
    padding: 0 0 20px;

    .colBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    > .el-col {
      height: 100%;

      .vertical_li {
        height: calc(50% - 20px);
        position: relative;
        background: rgba(7, 35, 66, 0.49);
        border: 2px dashed rgba(44, 220, 220, 0.49);
        padding: 20px 40px;

        &.vertical_li_mid {
          height: 100%;
          background: none;
          border: none;
          .map {
            width: 100%;
            height: 100%;
            margin-left: 40px;
            position: relative;
            &-icon {
              position: absolute;
              top: -48px;
              left: 370px;
              right: 0;
              width: 661px;
              height: 41px;
            }
            .name {
              height: 28px;
              opacity: 1;
              font-size: 20px;
              font-weight: 400;
              text-align: center;
              color: #fff704;
            }
            .sub-name {
              height: 28px;
              opacity: 1;
              font-size: 20px;
              font-weight: 400;
              text-align: center;
              color: #00ff91;
            }
            .title-left {
              &-top {
                position: absolute;
                top: 30px;
                left: 176px;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              &-middle {
                position: absolute;
                top: 110px;
                left: 128px;
              }
              &-bottom {
                position: absolute;
                bottom: 306px;
                left: -30px;
              }
            }
            .title-right {
              &-top {
                position: absolute;
                top: 40px;
                right: 354px;
              }
            }
            .title-bottom {
              position: absolute;
              bottom: 42px;
              left: 306px;
            }
          }
        }

        .content_boxs {
          height: 100%;
          overflow: hidden;
        }
        .title_box {
          height: 40px;
          line-height: 40px;
          padding-left: 60px;
          background: url('../../assets/carbon/title_bg.png') left center no-repeat;
          background-size: 44px 24px;
          color: #38e6fc;
          font-size: 30px;
          font-weight: bold;
        }
        .component_box {
          width: 100%;
          height: calc(100% - 40px);
          position: relative;
          // &.economy_box {
          //   .left_component {
          //     width: 40%;
          //   }
          //   .right_component {
          //     width: 60%;
          //   }
          // }

          .left_component {
            width: 50%;
            height: 100%;
            float: left;
          }
          .right_component {
            width: 50%;
            height: 100%;
            float: left;
            padding-left: 40px;
          }
          .dec_str {
            width: 4px;
            height: 100%;
            position: absolute;
            left: 50%;
            margin-left: -2px;
            background: url('../../assets/carbon/dec_str.png') center bottom no-repeat;
            background-size: 100% 80%;
          }
        }
      }
    }
  }
}
/deep/.el-carousel__indicator {
  margin-left: 10px;
  .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #8a8a8a;
    opacity: 1;
  }
  &.is-active {
    .el-carousel__button {
      background-color: #2cdcdc;
      opacity: 1;
    }
  }
}
/deep/ .el-carousel__indicators {
  margin-top: 40px;
}

</style>
