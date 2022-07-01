<template>
  <div class="box">
    <LcHead name="123"></LcHead>
    <!-- 照片 -->
    <div class="headImg">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 房屋基本信息 -->
    <div class="mainTitle">
      <van-cell-group>
        <van-cell>
          <template #title>
            <h3>123</h3>
          </template>
          <template #label>
            <van-tag type="primary">标签</van-tag>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <p>3434<span>/月</span></p>
                <p>租金</p>
              </van-grid-item>
              <van-grid-item>
                <p>一室</p>
                <p>房型</p>
              </van-grid-item>
              <van-grid-item>
                <p>343平方米</p>
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
                <span>东</span>
              </van-grid-item>
              <van-grid-item>
                <span>楼层：</span>
                <span>高楼层</span>
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
          </template>
          <template #label>
            <div>123</div>
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
            <van-grid :border="false">
              <van-grid-item icon="photo-o" text="文字" />
              <van-grid-item icon="photo-o" text="文字" />
              <van-grid-item icon="photo-o" text="文字" />
              <van-grid-item icon="photo-o" text="文字" />
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
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <van-cell title="单元格" label="xxxxxx" value="内容" />
            </div>
            <div class="setMain">
              <span>123</span>
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
            <van-card thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
              <template #price-top>
                <h3>低价一室房</h3>
                <p>123</p>
                <van-tag type="primary">xxx</van-tag>
              </template>
              <template #bottom>
                <p class="price"><span>12345</span> 元/月</p>
              </template>
            </van-card>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- 按钮 -->
    <div class="btn">
      <van-button icon="star-o" type="primary">收藏</van-button>
      <van-button type="primary">在线咨询</van-button>
      <van-button type="primary">电话预约</van-button>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      show: false,
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
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
