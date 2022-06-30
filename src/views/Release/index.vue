<template>
  <div>
    <LcHead name="发布房源"></LcHead>
    <van-cell-group>
      <van-cell value="房源信息" />
      <van-cell title="小区名称" value="请输入小区名称" is-link />
      <van-cell title="租金" class="input" value="￥/月">
        <template #title>
          <span>租金</span>
          <input type="text" placeholder="请输入租金/月" />
        </template>
      </van-cell>
      <van-cell title="建筑面积" class="input" value="m²">
        <template #title>
          <span>建筑面积</span>
          <input type="text" placeholder="建筑面积" style="margin-left: 34px" />
        </template>
      </van-cell>
      <van-cell title="户型" :value="uValue" is-link @click="uShow = !uShow">
        <template #label>
          <van-popup v-model="uShow" position="bottom" @click="uShow = !uShow">
            <van-picker
              show-toolbar
              :columns="units"
              @cancel="uShow = !uShow"
              @confirm="onUnit"
            />
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
          <van-popup v-model="fShow" position="bottom" @click="fShow = !fShow">
            <van-picker
              show-toolbar
              :columns="floors"
              @cancel="fShow = !fShow"
              @confirm="onFloor"
            />
          </van-popup>
        </template>
      </van-cell>
      <van-cell title="朝向" :value="tValue" is-link @click="tShow = !tShow">
        <template #label>
          <van-popup v-model="tShow" position="bottom" @click="tShow = !tShow">
            <van-picker
              show-toolbar
              :columns="toward"
              @cancel="tShow = !tShow"
              @confirm="onToward"
            />
          </van-popup>
        </template>
      </van-cell>
      <van-cell title="房屋标题">
        <template #label>
          <!-- <van-divider /> -->
          <van-field placeholder="请输入标题（例如：整租 小区名 2室 5000元）" />
        </template>
      </van-cell>
      <van-cell title="房屋图像">
        <template #label>
          <!-- <van-divider /> -->
          <van-uploader v-model="fileList" multiple />
        </template>
      </van-cell>
      <van-cell class="deploy" title="房屋配置">
        <template #label>
          <!-- <van-divider /> -->
          <van-grid square :border="false" :column-num="5">
            <van-grid-item icon="home-o" text="衣柜" to="/">
              <template #icon>
                <i class="iconfont">&#xe60d;</i>
              </template>
            </van-grid-item>
            <van-grid-item icon="home-o" text="洗衣机" to="/">
              <template #icon>
                <i class="iconfont">&#xe67d;</i>
              </template>
            </van-grid-item>
            <van-grid-item icon="home-o" text="空调" to="/">
              <template #icon>
                <i class="iconfont">&#xe65b;</i>
              </template>
            </van-grid-item>
            <van-grid-item icon="home-o" text="天然气" to="/">
              <template #icon>
                <i class="iconfont">&#xe613;</i>
              </template>
            </van-grid-item>
            <van-grid-item icon="home-o" text="冰箱" to="/">
              <template #icon>
                <i class="iconfont">&#xe625;</i>
              </template>
            </van-grid-item>
            <van-grid-item icon="home-o" text="暖气" to="/">
              <template #icon>
                <i class="iconfont">&#xe636;</i>
              </template>
            </van-grid-item>
            <van-grid-item icon="home-o" text="电视" to="/">
              <template #icon>
                <i class="iconfont">&#xe680;</i>
              </template>
            </van-grid-item>
            <van-grid-item icon="home-o" text="热水器" to="/">
              <template #icon>
                <i class="iconfont">&#xe6fc;</i>
              </template>
            </van-grid-item>
            <van-grid-item icon="home-o" text="宽带" to="/">
              <template #icon>
                <i class="iconfont">&#xe62c;</i>
              </template>
            </van-grid-item>
            <van-grid-item icon="home-o" text="沙发" to="/">
              <template #icon>
                <i class="iconfont">&#xe63a;</i>
              </template>
            </van-grid-item>
          </van-grid>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell title="房屋描述">
        <template #label>
          <!-- <van-divider /> -->
          <van-field type="textarea" placeholder="请输入房屋描述信息" />
        </template>
      </van-cell>
    </van-cell-group>

    <FindBtn class="btn"></FindBtn>
  </div>
</template>

<script>
import FindBtn from '@/components/FindBtn.vue'
export default {
  name: 'release',
  created () { },
  data () {
    return {
      fileList: [],
      uValue: '请选择',
      fValue: '请选择',
      tValue: '请选择',
      units: ['一室', '二室', '三室', '四室', '四室+'],
      floors: ['高楼层', '中楼层', '底楼层'],
      toward: ['东', '西', '南', '北', '东南', '东北', '西南', '西北'],
      uShow: false,
      fShow: false,
      tShow: false
    }
  },
  methods: {
    onUnit (value) {
      this.uValue = value
      this.uShow = false
    },
    onFloor (value) {
      this.fValue = value
      this.fShow = false
    },
    onToward (value) {
      this.tValue = value
      this.tShow = false
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

<style scoped lang='less'>
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
