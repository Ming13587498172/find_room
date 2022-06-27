<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar class="city" title="城市列表">
      <template #left>
        <van-icon name="arrow-left" @click="$router.push('/home')" />
      </template>
    </van-nav-bar>
    <!-- 当前 -->
    <van-index-bar>
      <van-index-anchor index="当前城市" />
      <van-cell :title="selectCity" />
    </van-index-bar>
    <!-- 热门 -->
    <van-index-bar>
      <van-index-anchor index="热门城市" />
      <span v-for="(item, index) in hotList" :key="index">
        <van-cell
          @click="
            sCity(item.label);
            $router.push('/home');
          "
          :title="item.label"
        />
      </span>
    </van-index-bar>
    <!-- 所有 -->
    <van-index-bar v-for="(arr, index) in indexList" :key="index">
      <template v-if="arr.newCity.length > 0">
        <van-index-anchor :index="arr.index" />
        <span v-for="(item, index) in arr.newCity" :key="index">
          <van-cell
            @click="
              sCity(item.label);
              $router.push('/home');
            "
            :title="item.label"
          />
        </span>
      </template>
      <template v-else>
        <van-index-anchor :index="arr.index" />
        <van-cell title="暂无城市" />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import { list, hot } from '@/api/city'
import { mapState, mapMutations } from 'vuex'
export default {
  created () {
    this.getList()
    this.getHot()
  },
  data () {
    return {
      cityList: [],
      indexList: [
        {
          index: 'A',
          newCity: []
        },
        {
          index: 'B',
          newCity: []
        },
        {
          index: 'C',
          newCity: []
        },
        {
          index: 'D',
          newCity: []
        },
        {
          index: 'E',
          newCity: []
        },
        {
          index: 'F',
          newCity: []
        },
        {
          index: 'G',
          newCity: []
        },
        {
          index: 'H',
          newCity: []
        },
        {
          index: 'I',
          newCity: []
        },
        {
          index: 'J',
          newCity: []
        },
        {
          index: 'K',
          newCity: []
        },
        {
          index: 'L',
          newCity: []
        },
        {
          index: 'M',
          newCity: []
        },
        {
          index: 'N',
          newCity: []
        },
        {
          index: 'O',
          newCity: []
        },
        {
          index: 'P',
          newCity: []
        },
        {
          index: 'Q',
          newCity: []
        },
        {
          index: 'R',
          newCity: []
        },
        {
          index: 'S',
          newCity: []
        },
        {
          index: 'T',
          newCity: []
        },
        {
          index: 'U',
          newCity: []
        },
        {
          index: 'V',
          newCity: []
        },
        {
          index: 'W',
          newCity: []
        },
        {
          index: 'X',
          newCity: []
        },
        {
          index: 'Y',
          newCity: []
        },
        {
          index: 'Z',
          newCity: []
        }
      ],
      hotList: []
    }
  },
  methods: {
    async getList (values) {
      try {
        const res = await list(values)
        this.indexList.forEach(arr => {
          res.data.body.forEach(item => {
            const firstName = item.pinyin.charAt(0).toUpperCase()
            if (firstName === arr.index) {
              arr.newCity.push(item)
              this.cityList.push(arr)
            }
          })
        })
      } catch (err) {
        console.log(err)
      }
    },
    async getHot () {
      try {
        const res = await hot()
        this.hotList = res.data.body
        // console.log(this.hotList)
      } catch (err) {
        console.log(err)
      }
    },
    ...mapMutations(['sCity'])
  },
  computed: {
    ...mapState(['selectCity'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
/* 城市列表 头部 */
/* #region */
.city {
  background-color: #21b97a;
}
.city .van-icon {
  color: #fff;
}
/deep/ .city .van-nav-bar__title {
  color: #fff;
}
/* #endregion */

// 热门城市
// #region
/deep/ .van-index-anchor {
  font-size: 14px;
  padding: 10px 15px;
  color: #999;
}
.van-cell {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  color: #333;
  background: #fff;
  cursor: pointer;
}
// #endregion
</style>
