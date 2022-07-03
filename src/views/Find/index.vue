<template>
  <div>
    <div class="find-house">
      <van-icon class="head-left" name="arrow-left" @click="$router.go(-1)" />
      <MainHead class="find-search"></MainHead>
      <div class="find-screen">
        <van-dropdown-menu>
          <van-dropdown-item title="区域" ref="area">
            <van-picker show-toolbar :columns="areaList" @change="chang">
              <template #columns-bottom>
                <div class="find-btn">
                  <van-button class="no" type="button">取消</van-button>
                  <van-button
                    class="yes"
                    type="primary"
                    @click="onArea(selected)"
                    >确定</van-button
                  >
                </div>
              </template>
            </van-picker>
          </van-dropdown-item>
          <van-dropdown-item title="方式" ref="rent">
            <van-picker :columns="newAreaList.rentType" @change="chang">
              <template #option="option">
                <div>{{ option.label }}</div>
              </template>
              <template #columns-bottom>
                <div class="find-btn">
                  <van-button class="no" type="button">取消</van-button>
                  <van-button
                    class="yes"
                    type="primary"
                    @click="onRent(selected)"
                    >确定</van-button
                  >
                </div>
              </template>
            </van-picker>
          </van-dropdown-item>
          <van-dropdown-item title="租金" ref="price">
            <van-picker :columns="newAreaList.price" @change="chang">
              <template #option="option">
                <div>{{ option.label }}</div>
              </template>
              <template #columns-bottom>
                <div class="find-btn">
                  <van-button class="no" type="button">取消</van-button>
                  <van-button
                    class="yes"
                    type="primary"
                    @click="onPrice(selected)"
                    >确定</van-button
                  >
                </div>
              </template>
            </van-picker>
            <!-- <FindBtn></FindBtn> -->
          </van-dropdown-item>
          <van-dropdown-item class="last-dropdown" title="筛选" ref="more">
            <van-popup
              v-model="show"
              position="right"
              :style="{ height: '30%' }"
            />
            <van-checkbox-group v-model="result">
              <template #default>
                <van-index-bar>
                  <van-index-anchor index="户型" />
                  <van-checkbox-group v-model="result">
                    <template #default>
                      <van-row>
                        <van-col
                          span="12"
                          v-for="(item, index) in list.roomType"
                          :key="index"
                        >
                          <van-checkbox :name="item.value">{{
                            item.label
                          }}</van-checkbox>
                        </van-col>
                      </van-row>
                    </template>
                  </van-checkbox-group>
                  <van-index-anchor index="朝向" />
                  <van-checkbox-group v-model="result">
                    <template #default>
                      <van-row>
                        <van-col
                          span="12"
                          v-for="(item, index) in list.oriented"
                          :key="index"
                        >
                          <van-checkbox :name="item.value">{{
                            item.label
                          }}</van-checkbox>
                        </van-col>
                      </van-row>
                    </template>
                  </van-checkbox-group>
                  <van-index-anchor index="楼层" />
                  <van-checkbox-group v-model="result">
                    <template #default>
                      <van-row>
                        <van-col
                          span="12"
                          v-for="(item, index) in list.floor"
                          :key="index"
                        >
                          <van-checkbox :name="item.value">{{
                            item.label
                          }}</van-checkbox>
                        </van-col>
                      </van-row>
                    </template>
                  </van-checkbox-group>
                  <van-index-anchor index="房屋亮点" />
                  <van-checkbox-group v-model="result">
                    <template #default>
                      <van-row>
                        <van-col
                          span="12"
                          v-for="(item, index) in list.characteristic"
                          :key="index"
                        >
                          <van-checkbox :name="item.value">{{
                            item.label
                          }}</van-checkbox>
                        </van-col>
                      </van-row>
                    </template>
                  </van-checkbox-group>
                </van-index-bar>
              </template>
            </van-checkbox-group>
            <div class="find-btn">
              <van-button class="no" type="button" @click="result = []"
                >清除</van-button
              >
              <van-button class="yes" type="primary" @click="yes"
                >确定</van-button
              >
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <CardMain :list="allList"></CardMain>
          <!-- <van-cell v-for="(item, index) in allList" :key="index">
            <van-card desc title :thumb="item.houseImg">
              <template #price-top>
                <h3>低价一室房</h3>
                <div class="house">
                  <span>{{ item.desc }}</span>
                </div>
                <van-tag type="primary">{{ item.tags[0] }}</van-tag>
              </template>
              <template #bottom>
                <p class="price">
                  <span>{{ item.price }}</span> 元/月
                </p>
              </template>
            </van-card>
          </van-cell> -->
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { houses, area, searchHouses } from '@/api/find'
// import FindBtn from '@/components/FindBtn.vue'
import CardMain from '@/components/CardMain.vue'
export default {
  name: 'find',
  created () {
    this.getArea()
    this.getHouses()
  },
  data () {
    return {
      show: false,
      list: [],
      areaList: [],
      newAreaList: [],
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],
      allList: [],
      loading: false,
      finished: false,
      refreshing: false,
      selected: '',
      valName: '',
      areaVal: '',
      subVal: '',
      checked: true,
      result: []
    }
  },
  methods: {
    houseObj (val) {
      val.forEach(item => {
        item.text = item.label
        if (item.children) {
          this.houseObj(item.children)
        } else {
          item.children = [{ text: '' }]
        }
      })
    },
    async getArea () {
      try {
        const res = await area({ id: this.areaValue })
        this.list = res.data.body
        console.log(this.list)
        this.areaList.push(res.data.body.area)
        this.areaList.push(res.data.body.subway)
        this.houseObj(this.areaList)

        this.newAreaList = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async getHouses () {
      if (this.refreshing) {
        this.allList = []
        this.refreshing = false
      }
      try {
        const res = await houses({ id: this.areaValue })
        this.allList.push(...res.data.body.list)
        this.loading = false
      } catch (err) {
        console.log(err)
      }
    },
    onChange (picker, index) {
      console.log(index, picker)
      const val = picker.getValues()
      console.log(val)
    },
    onLoad () {
      this.getHouses()
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.getHouses()
    },
    async onPrice (selected) {
      try {
        const res = await searchHouses({ cityId: this.areaValue, price: selected })
        this.allList = res.data.body.list
        this.$refs.price.toggle()
      } catch (err) {
        console.log(err)
      }
    },
    async onRent (selected) {
      try {
        const res = await searchHouses({ cityId: this.areaValue, rentType: selected })
        this.allList = res.data.body.list
        this.$refs.rent.toggle()
      } catch (err) {
        console.log(err)
      }
    },
    async onArea (selected) {
      if (this.valName === 'area') {
        this.areaVal = selected
        this.subVal = ''
      } else {
        this.subVal = selected
        this.areaVal = ''
      }

      try {
        const res = await searchHouses({ cityId: this.areaValue, area: this.areaVal, subway: this.subVal })
        this.allList = res.data.body.list
        this.$refs.area.toggle()
      } catch (err) {
        console.log(err)
      }
    },
    chang (picker) {
      const val = picker.getValues()
      this.valName = val[0].value
      if (val.length > 1) {
        if (val[length].value === 'null') {
          this.selected = val[length - 1].value
        } else {
          this.selected = val[length].value
        }
      } else {
        this.selected = val[0].value
      }
    },
    async yes () {
      try {
        const res = await searchHouses({ cityId: this.areaValue, more: this.result })
        this.allList = res.data.body.list
        this.$refs.more.toggle()
        this.result = []
      } catch (err) {
        console.log(err)
      }
      console.log(this.result)
    }
  },
  computed: {
    ...mapState(['areaValue'])
  },
  watch: {},
  filters: {},
  components: {
    // FindBtn,
    CardMain
  }
}
</script>

<style scoped lang="less">
/deep/ .van-checkbox__icon {
  width: 90px;
}
/deep/ .van-checkbox {
  height: 30px;
  width: 70px;
}
/deep/ .van-icon-success:before {
  content: "";
}
/deep/ .van-checkbox__icon--checked .van-icon {
  color: unset;
  background-color: unset;
  border-radius: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: 2px solid #1989fa !important;
}
/deep/ .van-checkbox__icon .van-icon {
  height: 30px;
  width: 70px;
  margin-top: -7px;
  margin-left: -1px;
  border-radius: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: 1px solid #c8c9cc !important;
}
/deep/ .van-checkbox__label {
  margin-left: -80px;
}
/deep/ .van-checkbox-group {
  padding-left: 30px;
}
/deep/ .van-col {
  text-align: center;
  display: inline-block;
  height: 32px;
  width: 90px;
  margin: 0 18px 15px 0;
  border-radius: 3px;
  line-height: 32px;
  text-align: center;
  font-size: 12px;
  color: #888;
}
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
.find-btn {
  display: flex;
  border-top: 1px solid #e9e9e9;
  .no {
    flex: 1;
    border: none;
    background-color: #fff;
  }
  .yes {
    flex: 2;
  }
}
</style>
