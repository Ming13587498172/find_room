<template>
  <div>
    <!-- 头部轮播 -->
    <template>
      <van-search v-model="value" show-action placeholder="请输入搜索关键词">
        <template #left>
          <van-tabs @click="onCity">
            <van-tab title="北京"></van-tab>
            <template #nav-right>
              <van-icon class="tFont" name="arrow-down" />
            </template>
          </van-tabs>
        </template>
        <template #action>
          <van-icon name="location-o" />
        </template>
      </van-search>

      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="image in images" :key="image.id">
          <img :src="baseURL + image.imgSrc" />
        </van-swipe-item>
      </van-swipe>
    </template>
    <!-- 导航栏 -->
    <template>
      <van-grid :border="false">
        <van-grid-item text="整租">
          <template #icon>
            <img class="gImg" src="@/img/1.png" />
          </template>
        </van-grid-item>
        <van-grid-item text="合租">
          <template #icon>
            <img class="gImg" src="@/img/2.png" />
          </template>
        </van-grid-item>
        <van-grid-item text="地图找房">
          <template #icon>
            <img class="gImg" src="@/img/3.png" />
          </template>
        </van-grid-item>
        <van-grid-item text="去出租">
          <template #icon>
            <img class="gImg" src="@/img/4.png" />
          </template>
        </van-grid-item>
      </van-grid>
    </template>
    <!-- 租房小组 -->
    <template>
      <div class="more">
        <van-nav-bar>
          <template #left>
            <h3>租房小组</h3>
          </template>
          <template #right>
            <span>更多</span>
          </template>
        </van-nav-bar>

        <van-grid :gutter="10" :column-num="2" direction="horizontal">
          <van-grid-item v-for="item in groups" :key="item.id">
            <template #icon>
              <img :src="baseURL + item.imgSrc" />
            </template>
            <template #text>
              <div class="gText">
                <p>{{ item.title }}</p>
                <p>{{ item.desc }}</p>
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </template>
  </div>
</template>

<script>
import { img, groups } from '@/api/home'
export default {
  created () {
    this.getImg()
    this.getGroups()
  },
  data () {
    return {
      value: '',
      baseURL: 'http://liufusong.top:8080',
      images: [],
      groups: []
    }
  },
  methods: {
    async getImg (values) {
      try {
        const res = await img(values)
        this.images = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async getGroups (city) {
      try {
        const res = await groups(city)
        this.groups = res.data.body
        console.log(res.data.body)
      } catch (err) {
        console.log(err)
      }
    },
    onCity () {
      console.log(123)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
// 头部轮播
// #region
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
img {
  width: 100%;
  height: 100%;
}
.van-swipe {
  height: 212px;
}
.van-search {
  padding: 0 0 0 10px;
  position: absolute;
  top: 25px;
  z-index: 1;
  width: 100%;
  background-color: transparent;
  .van-field {
    border-radius: 3px;
    margin: 0 10px;
  }
}
.van-search__content {
  background-color: #fff;
  border-radius: 0 4px 4px 0;
}
/deep/ .van-dropdown-menu__bar {
  height: 34px;
  width: 70px;
}
/deep/ .van-tabs--line .van-tabs__wrap {
  height: 34px;
  width: 60px;
  border-radius: 4px 0 0 4px;
}
/deep/ .van-tabs__line {
  background-color: transparent;
}
.tFont {
  font-size: 14px;
  line-height: 26px;
  height: 26px;
  margin-top: 4px;
  width: 20px;
  border-right: 1px solid #e5e5e5;
}
// #endregion

// 导航栏
// #region
.van-grid {
  border: none;
}
.gImg {
  width: 60px;
  height: 60px;
}
/deep/ .van-grid-item__text {
  font-size: 14px;
  font-weight: 400;
}
// #endregion

// 租房小组
// #region
.more {
  width: 376px;
  height: 188px;
  background-color: #f6f5f6;
}
.more h3 {
  font-size: 15px;
}
.more span {
  color: #787d82;
  font-size: 14px;
  font-weight: 400;
}
.van-nav-bar {
  background-color: transparent;
}
.more .van-grid {
  width: 356px;
  height: 130px;
  padding-left: 15px !important;
}
.more .van-grid-item {
  height: 62px;
}
/deep/ .van-grid-item__content--horizontal {
  border-radius: 12px;
}
.van-grid img {
  width: 50px;
  height: 50px;
}
.gText {
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-left: 10px;
}
// #endregion
</style>
