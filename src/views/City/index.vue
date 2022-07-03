<template>
  <div>
    <!-- 头部 -->
    <LcHead name="城市列表"></LcHead>
    <!-- 当前 -->
    <van-index-bar :index-list="iList">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="selectCity" />

      <van-index-anchor index="热">热门城市</van-index-anchor>
      <span v-for="(item, index) in hotList" :key="item.label + index">
        <van-cell
          @click="
            sCity(item.label);
            cityVal(item.value);
            $router.go(-1);
          "
          :title="item.label"
        />
      </span>

      <div v-for="(arr, index) in indexList" :key="arr.index + index">
        <template v-if="arr.newCity.length > 0">
          <van-index-anchor :index="arr.index" />
          <span v-for="(item, index) in arr.newCity" :key="item.label + index">
            <van-cell
              @click="
                sCity(item.label);
                cityVal(item.value);
                $router.go(-1);
              "
              :title="item.label"
            />
          </span>
        </template>
        <template v-else>
          <van-index-anchor :index="arr.index" />
          <van-cell title="暂无城市" />
        </template>
      </div>
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
      iList: ['#', '热', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      // aList: [{ index: 1, newCity: [] }],
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
        const result = res.data.body
        this.indexList.forEach(arr => {
          res.data.body.forEach(item => {
            const firstName = item.pinyin.charAt(0).toUpperCase()

            if (firstName === arr.index) {
              arr.newCity.push(item)
              this.cityList.push(arr)
            }
          })
        })

        // this.aList.forEach(arr => {
        //   result.forEach(item => {
        //     const firstName = item.pinyin.charAt(0).toUpperCase()

        //     if (firstName !== arr.index) {
        //       this.aList.push({
        //         index: firstName,
        //         newCity: []
        //       })
        //     }
        //   })
        // })
        // this.aList.forEach(arr => {
        //   if (!this.cityList[arr.index]) this.cityList[arr.index] = { index: arr.index, newCity: [] }
        // })
        // this.cityList.filter(item => {
        //   return this.aList.includes(item.index)
        // })
        // this.aList.forEach(arr => {
        //   if (!this.cityList[arr.index]) this.cityList[arr.index] = { index: arr.index, newCity: [] }
        // })
        // this.cityList.filter(item => {
        //   return this.cityList.includes(item.index)
        // })
        // console.log(this.aList)
        // console.log(this.cityList)
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
    ...mapMutations(['sCity']),
    ...mapMutations(['cityVal'])
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

/deep/ .van-index-bar__index--active {
  background-color: pink;
  border-radius: 50%;
}
/deep/ .van-index-bar__index {
  padding: 0 2px 0 2px;
}
</style>
