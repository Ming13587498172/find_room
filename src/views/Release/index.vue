<template>
  <div>
    <LcHead name="发布房源"></LcHead>
    <van-form @submit="onSubmit" ref="formValue">
      <template #default>
        <van-cell-group>
          <van-cell value="房源信息" />
          <van-cell
            title="小区名称"
            v-model="communityName"
            :value="communityName !== '' ? communityName : '请输入小区名称'"
            is-link
            to="/research"
          />
          <van-cell title="租金" class="input" value="￥/月">
            <template #title>
              <span>租金</span>
              <input type="text" v-model="price" placeholder="请输入租金/月" />
            </template>
          </van-cell>
          <van-cell title="建筑面积" class="input" value="m²">
            <template #title>
              <span>建筑面积</span>
              <input
                type="text"
                placeholder="建筑面积"
                v-model="size"
                style="margin-left: 34px"
              />
            </template>
          </van-cell>
          <van-cell
            title="户型"
            :value="uValue"
            is-link
            @click="uShow = !uShow"
          >
            <template #label>
              <van-popup
                v-model="uShow"
                position="bottom"
                @click="uShow = !uShow"
              >
                <van-picker
                  show-toolbar
                  :columns="roomType"
                  @cancel="uShow = !uShow"
                  @confirm="onUnit"
                >
                  <template #option="option">
                    <div>{{ option.label }}</div>
                  </template>
                </van-picker>
              </van-popup>
            </template>
          </van-cell>
          <van-cell
            title="所在楼层"
            :value="fValue"
            is-link
            @click="fShow = !fShow"
          >
            <template #label>
              <van-popup
                v-model="fShow"
                position="bottom"
                @click="fShow = !fShow"
              >
                <van-picker
                  show-toolbar
                  :columns="floor"
                  @cancel="fShow = !fShow"
                  @confirm="onFloor"
                >
                  <template #option="option">
                    <div>{{ option.label }}</div>
                  </template>
                </van-picker>
              </van-popup>
            </template>
          </van-cell>
          <van-cell
            title="朝向"
            :value="tValue"
            is-link
            @click="tShow = !tShow"
          >
            <template #label>
              <van-popup
                v-model="tShow"
                position="bottom"
                @click="tShow = !tShow"
              >
                <van-picker
                  show-toolbar
                  :columns="oriented"
                  @cancel="tShow = !tShow"
                  @confirm="onToward"
                >
                  <template #option="option">
                    <div>{{ option.label }}</div>
                  </template>
                </van-picker>
              </van-popup>
            </template>
          </van-cell>
          <van-cell title="房屋标题">
            <template #label>
              <van-field
                v-model="title"
                placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
              />
            </template>
          </van-cell>
          <van-cell title="房屋图像">
            <template #label>
              <van-uploader v-model="fileList" :after-read="fileImg" multiple />
            </template>
          </van-cell>
          <van-cell class="deploy" title="房屋配置">
            <template #label>
              <van-checkbox-group v-model="result">
                <template #default>
                  <van-grid square :border="false" :column-num="5">
                    <van-grid-item text="衣柜">
                      <template #icon>
                        <van-checkbox name="衣柜">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe60d;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                    <van-grid-item text="洗衣机">
                      <template #icon>
                        <van-checkbox name="洗衣机">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe67d;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                    <van-grid-item text="空调">
                      <template #icon>
                        <van-checkbox name="空调">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe65b;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                    <van-grid-item text="天然气">
                      <template #icon>
                        <van-checkbox name="天然气">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe613;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                    <van-grid-item text="冰箱">
                      <template #icon>
                        <van-checkbox name="冰箱">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe625;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                    <van-grid-item text="暖气">
                      <template #icon>
                        <van-checkbox name="暖气">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe636;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                    <van-grid-item text="电视">
                      <template #icon>
                        <van-checkbox name="电视">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe680;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                    <van-grid-item text="热水器">
                      <template #icon>
                        <van-checkbox name="热水器">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe6fc;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                    <van-grid-item text="宽带">
                      <template #icon>
                        <van-checkbox name="宽带">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe62c;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                    <van-grid-item text="沙发">
                      <template #icon>
                        <van-checkbox name="沙发">
                          <template #icon="props">
                            <i
                              class="iconfont"
                              :class="props.checked ? 'checked' : ''"
                              >&#xe63a;</i
                            >
                          </template>
                        </van-checkbox>
                      </template>
                    </van-grid-item>
                  </van-grid>
                </template>
              </van-checkbox-group>
            </template>
          </van-cell>
        </van-cell-group>

        <van-cell-group>
          <van-cell title="房屋描述">
            <template #label>
              <van-field
                type="textarea"
                v-model="desc"
                placeholder="请输入房屋描述信息"
              />
            </template>
          </van-cell>
        </van-cell-group>
        <FindBtn class="btn"></FindBtn>
      </template>
    </van-form>
  </div>
</template>

<script>
import FindBtn from '@/components/FindBtn.vue'
import { faHouse } from '@/api/user'
import { qHouse, houseImg } from '@/api/house'
import { mapState } from 'vuex'
export default {
  name: 'release',
  created () {
    this.qHouse()
  },
  data () {
    return {
      checked: false,
      result: [],
      price: '',
      size: '',
      desc: '',
      title: '',
      fileList: [],
      uValue: '请选择',
      fValue: '请选择',
      tValue: '请选择',
      roomType: ['一室', '二室', '三室', '四室', '四室+'],
      roomVal: '',
      floor: ['高楼层', '中楼层', '底楼层'],
      fVal: '',
      oriented: ['东', '西', '南', '北', '东南', '东北', '西南', '西北'],
      fImg: [],
      imgs: '',
      oVal: '',
      uShow: false,
      fShow: false,
      tShow: false
    }
  },
  methods: {
    onUnit (value) {
      this.uValue = value.label
      this.roomVal = value.value
      this.uShow = false
    },
    onFloor (value) {
      this.fValue = value.label
      this.fVal = value.value
      this.fShow = false
    },
    onToward (value) {
      this.tValue = value.label
      this.oVal = value.value
      this.tShow = false
    },
    async fileImg (val) {
      const form = new FormData()
      form.append('file', val.file)
      try {
        const res = await houseImg(form)
        this.fImg.push(res.data.body[0])
      } catch (err) {
        console.log(err)
      }
    },
    async onSubmit (values) {
      const supList = this.result.join('|')
      const imgList = this.fImg.join('|')

      const data = {
        houseImg: imgList,
        title: this.title,
        description: this.desc,
        oriented: this.oVal,
        supporting: supList,
        price: this.price,
        roomType: this.roomVal,
        size: this.size,
        floor: this.fVal,
        community: this.community
      }
      console.log(data)
      try {
        const res = await faHouse(data)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    async qHouse () {
      try {
        const res = await qHouse()
        this.floor = res.data.body.floor
        this.roomType = res.data.body.roomType
        this.oriented = res.data.body.oriented
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['communityName', 'user', 'community'])
  },
  watch: {},
  filters: {},
  components: {
    FindBtn
  }
}
</script>

<style scoped lang='less'>
.checked {
  color: #21b97a;
}
/deep/ .van-checkbox__icon {
  height: unset;
  margin-top: 6px;
}
.input {
  .van-cell__title {
    height: 24px;
    position: absolute;
    z-index: 2;
    input {
      margin-left: 60px;
      border: none;
      &::placeholder {
        color: #969799;
      }
    }
  }
}
.btn {
  display: field;
  /deep/ .yes {
    flex: 1;
  }
}
.deploy {
  .iconfont {
    font-size: 30px;
  }
}
</style>
