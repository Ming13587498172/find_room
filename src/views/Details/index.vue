<template>
  <div class="box">
    <LcHead :name="details.community"></LcHead>
    <!-- 照片 -->
    <div class="headImg">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in details.houseImg" :key="index">
          <img :src="baseURL + image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 房屋基本信息 -->
    <div class="mainTitle">
      <van-cell-group>
        <van-cell>
          <template #title>
            <h3>{{ details.title }}</h3>
          </template>
          <template #label>
            <van-tag type="primary">{{ details.tags[0] }}</van-tag>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <p>{{ details.price }}<span>/月</span></p>
                <p>租金</p>
              </van-grid-item>
              <van-grid-item>
                <p>{{ details.roomType }}</p>
                <p>房型</p>
              </van-grid-item>
              <van-grid-item>
                <p>{{ details.size }}平米</p>
                <p>面积</p>
              </van-grid-item>
            </van-grid>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <van-grid direction="horizontal" :column-num="2" :border="false">
              <van-grid-item>
                <span>装修：</span>
                <span>精装</span>
              </van-grid-item>
              <van-grid-item>
                <span>朝向：</span>
                <span>{{ details.oriented[0] }}</span>
              </van-grid-item>
              <van-grid-item>
                <span>楼层：</span>
                <span>{{ details.floor }}</span>
              </van-grid-item>
              <van-grid-item>
                <span>类型：</span>
                <span>普通住宅</span>
              </van-grid-item>
            </van-grid>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- 地图位置 -->
    <div class="map">
      <van-cell-group>
        <van-cell>
          <template #title>
            <p>小区：<span>天山星城</span></p>
            <div id="detContainer"></div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- 配套信息 -->
    <div class="about">
      <van-cell-group>
        <van-cell>
          <template #title>
            <h3>房屋配套</h3>
            <van-divider />
          </template>
          <template #label>
            <van-grid square :border="false" :column-num="5">
              <van-grid-item
                v-for="(item, index) in details.supporting"
                :key="index"
                :text="item"
              >
                <template #icon>
                  <MyIcon :name="item"></MyIcon>
                </template>
              </van-grid-item>
            </van-grid>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- 房源概况 -->
    <div class="set">
      <van-cell-group>
        <van-cell>
          <template #title>
            <h3>房源概况</h3>
            <van-divider />
          </template>
          <template #label>
            <div class="setHead">
              <van-image
                round
                width="52"
                height="52"
                src="http://liufusong.top:8080/img/avatar.png"
              />
              <van-cell title="王女士">
                <template #label>
                  <van-icon name="shield-o" />
                  <span>已认证房主</span>
                </template>
                <template #default>
                  <van-button plain type="primary" size="small"
                    >发消息</van-button
                  >
                </template>
              </van-cell>
            </div>
            <div class="setMain">
              <span
                >1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
                2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
                3.人车分流，环境优美。
                4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。</span
              >
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- 猜你喜欢 -->
    <div class="recommend">
      <van-cell-group>
        <van-cell>
          <template #title>
            <h3>猜你喜欢</h3>
            <van-divider />
          </template>
          <template #label>
            <van-card
              v-for="(item, index) in list"
              :key="index"
              :thumb="baseURL + item.houseImg"
            >
              <template #price-top>
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
                <van-tag type="primary">{{ item.tags[0] }}</van-tag>
              </template>
              <template #bottom>
                <p class="price">
                  <span>{{ item.price }}</span> 元/月
                </p>
              </template>
            </van-card>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- 按钮 -->
    <div class="btn">
      <van-button
        icon="star-o"
        type="primary"
        :class="isCollect ? 'yes' : 'no'"
        @click="isFlag"
        >收藏</van-button
      >
      <van-button type="primary">在线咨询</van-button>
      <van-button type="primary">电话预约</van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { houseList, houseDetail } from '@/api/house'
import { delCollect, addCollect } from '@/api/user'
export default {
  name: 'details',
  created () {
    this.getDetails()
    this.getList()
  },
  data () {
    return {
      show: false,
      baseURL: 'http://liufusong.top:8080',
      details: {},
      list: {},
      coord: {}
    }
  },
  mounted () { },
  methods: {
    async getDetails () {
      try {
        const res = await houseDetail(this.code)
        this.details = res.data.body
        this.coord = this.details.coord
      } catch (err) {
        console.log(err)
      }
      this.$nextTick(() => {
        const { BMapGL } = window
        // 创建地图实例
        const map = new BMapGL.Map('detContainer')
        // 创建点坐标
        const point = new BMapGL.Point(this.coord.longitude, this.coord.latitude)
        // 初始化地图，设置中心点坐标和地图级别
        map.centerAndZoom(point, 15)

        map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
        const zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
        map.addControl(zoomCtrl)

        const marker1 = new BMapGL.Marker(new BMapGL.Point(this.coord.longitude, this.coord.latitude))
        // 在地图上添加点标记
        map.addOverlay(marker1)
      })
    },
    async getList () {
      try {
        const res = await houseList(this.code)
        this.list = res.data.body.list
      } catch (err) {
        console.log(err)
      }
    },
    async isFlag () {
      if (this.isCollect === true) {
        try {
          const res = await delCollect(this.code)
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          const res = await addCollect(this.code)
        } catch (err) {
          console.log(err)
        }
      }
    }
  },
  computed: {
    ...mapState(['code', 'isCollect'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
#detContainer {
  width: 100vw;
  height: 190px;
}
.yes {
  color: #f00 !important;
}
.no {
  color: #999 !important;
}
.box {
  padding-bottom: 50px;
  background-color: #f6f5f6;
  .van-divider {
    border-color: #cecece;
  }
  .headImg,
  .mainTitle,
  .set,
  .recommend {
    margin-bottom: 10px;
  }
  .van-tag {
    color: #39becd;
    background: #e1f5f8;
  }
  .headImg {
    width: 376px;
    height: 252px;
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .block {
      width: 120px;
      height: 120px;
      background-color: #fff;
    }
    .van-swipe {
      width: 376px;
      height: 246px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .mainTitle {
    .van-cell::after {
      border-bottom: 1px solid #cecece;
    }
    .van-cell:nth-of-type(2) {
      .van-grid-item {
        p:nth-of-type(1) {
          color: #fa5741;
          font-size: 18px;
          font-weight: bolder;
          span {
            font-size: 12px;
            font-weight: 400;
          }
        }
        p:nth-of-type(2) {
          text-align: center;
          color: #999;
        }
      }
    }
    .van-cell:nth-of-type(3) {
      .van-grid {
        .van-grid-item {
          span:nth-of-type(1) {
            display: inline-block;
            color: #999;
            padding-right: 5px;
            line-height: 26px;
          }
        }
        /deep/ .van-grid-item__content--center {
          justify-content: unset;
        }
      }
    }
  }
  .map {
    .van-cell-group {
      width: 376px;
      height: 190px;
    }
  }
  .about {
    .van-hairline--top-bottom {
      position: unset;
    }
  }
  .set {
    .setHead {
      display: flex;
      .van-cell__label {
        color: #fa5741;
        .van-icon {
          font-size: 18px;
          vertical-align: middle;
        }
        span {
          margin-left: 4px;
        }
      }
    }
    .setMain {
      span {
        color: #333;
        font-size: 14px;
      }
    }
  }
  .recommend {
    .van-card {
      /deep/ .van-card__thumb {
        width: 106px;
        height: 80px;
      }
      /deep/ .van-card__content {
        overflow: hidden;
        line-height: 22px;
      }
      h3 {
        font-size: 15px;
        color: #000;
      }
      .house {
        font-size: 12px;
        color: #afb2b3;
        margin-bottom: 4px;
      }
      .van-tag {
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
      }
      .price {
        font-size: 12px;
        color: #fa5741;
        span:nth-of-type(1) {
          font-size: 16px;
          font-weight: bolder;
        }
      }
    }
  }
  .btn {
    width: 100%;
    height: 50px;
    display: flex;
    position: fixed;
    bottom: 0;
    .van-button {
      flex: 1;
      border: none;
      height: 100%;
      line-height: 50px;
      font-size: 17px;
    }
    .van-button:nth-of-type(1),
    .van-button:nth-of-type(2) {
      color: #999;
      background-color: #fff;
      border-top: 1px solid #e8e8e9;
      border-right: 1px solid #e8e8e9;
    }
    .van-button:nth-of-type(3) {
      color: #fff;
      border-right: 1px solid #e8e8e9;
      background-color: #21b97a;
    }
  }
}
</style>
