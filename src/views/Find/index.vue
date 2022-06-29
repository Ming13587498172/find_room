<template>
  <div>
    <div class="find-house">
      <van-icon class="head-left" name="arrow-left" />
      <MainHead class="find-search"></MainHead>
      <div class="find-screen">
        <van-dropdown-menu>
          <van-dropdown-item title="区域">
            <van-area :area-list="columns" :columns-num="3" />
            <!-- <van-picker :columns="newAreaList">
              <template #option="option">
                <div>{{ option.area.label }}</div>
              </template>
            </van-picker>
            <FindBtn></FindBtn> -->
            <!-- <van-picker :columns="columns" :columns-num="3">
              <template #option>
                <ul v-for="(item, index) in columns" :key="index">
                  <li>{{ item.area.label }}</li>
                  <li>{{ item.subway.label }}</li>
                </ul>
                <ul v-for="(area, index) in columns.area" :key="index">
                  <li>{{ area.label }}</li>
                </ul>
              </template>
            </van-picker> -->
            <FindBtn></FindBtn>
          </van-dropdown-item>
          <van-dropdown-item title="方式">
            <van-picker :columns="newAreaList.rentType">
              <template #option="option">
                <div>{{ option.label }}</div>
              </template>
            </van-picker>
            <FindBtn></FindBtn>
          </van-dropdown-item>
          <van-dropdown-item title="租金">
            <van-picker :columns="newAreaList.price">
              <template #option="option">
                <div>{{ option.label }}</div>
              </template>
            </van-picker>
            <FindBtn></FindBtn>
          </van-dropdown-item>
          <van-dropdown-item class="last-dropdown" title="筛选">
            <van-popup
              v-model="show"
              position="right"
              :style="{ height: '30%' }"
            />
            <van-index-bar>
              <van-index-anchor index="A" />
              <van-cell title="文本" />
              <van-cell title="文本" />
              <van-cell title="文本" />
              <van-index-anchor index="B" />
              <van-cell title="文本" />
              <van-cell title="文本" />
              <van-cell title="文本" />
            </van-index-bar>
            <FindBtn></FindBtn>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>

      <van-card desc title thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
        <template #price-top>
          <h3>低价一室房</h3>
          <div class="house">
            <span>一室/</span>
            <span>20/</span>
            <span>南/</span>
            <span>北路</span>
          </div>
          <van-tag type="primary">标签</van-tag>
        </template>
        <template #bottom>
          <p class="price"><span>1234</span> 元/月</p>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data'
import { area } from '@/api/find'
import FindBtn from '@/components/FindBtn.vue'
export default {
  name: 'find',
  created () {
    this.getArea()
  },
  data () {
    return {
      areaList,
      show: false,
      newAreaList: [],
      columns: {
        province_list: {},
        city_list: {},
        county_list: {}
      }
    }
  },
  methods: {
    async getArea (values) {
      try {
        const res = await area(values)
        this.newAreaList = res.data.body
        const first = {
          quyu: this.newAreaList.area.label,
          ditie: this.newAreaList.subway.label
        }
        this.columns.province_list = first
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    FindBtn
  }
}
</script>

<style scoped lang="less">
/deep/ .van-tabs {
  margin-left: 30px;
}
/deep/ .van-picker__toolbar {
  display: none;
}
/deep/ .van-picker__columns {
  height: 238px !important;
}
.last-dropdown {
  /deep/ .van-dropdown-item__content {
    height: 100%;
    width: 80%;
    max-height: unset;
    background-color: #fff;
  }
  /deep/ .van-popup--top {
    right: 0;
    left: unset;
  }
}
/deep/ .van-index-bar__sidebar {
  display: none;
}
// 找房子条件
.find-house {
  .head-left {
    position: fixed;
    top: 12px;
    margin-left: 8px;
    color: #fff;
  }
  .find-search {
    display: flex;
    background-color: #21b97a;
    height: 50px;
    padding: 0 10px;
    position: unset;
  }
}

// 房子信息
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
    color: #39becd;
    background: #e1f5f8;
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
</style>
