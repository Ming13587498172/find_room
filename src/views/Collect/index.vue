<template>
  <div>
    <LcHead name="我的收藏"></LcHead>

    <CardMain :list="collectList"></CardMain>
  </div>
</template>

<script>
import { collect } from '@/api/user'
export default {
  name: 'collect',
  created () {
    this.getCollect()
  },
  data () {
    return {
      collectList: []
    }
  },
  methods: {
    async getCollect (values) {
      try {
        const res = await collect(values)
        this.collectList = res.data.body
        console.log(this.collectList)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/ .van-card {
  background-color: #fff;
  // /deep/ .van-card__thumb {
  //   width: 106px;
  //   height: 80px;
  // }
  // /deep/ .van-card__content {
  //   overflow: hidden;
  //   line-height: 22px;
  // }
  // h3 {
  //   font-size: 15px;
  //   color: #000;
  // }
  // .house {
  //   font-size: 12px;
  //   color: #afb2b3;
  //   margin-bottom: 4px;
  // }
  // .van-tag {
  //   color: #39becd;
  //   background: #e1f5f8;
  //   display: inline-block;
  //   font-size: 12px;
  //   border-radius: 3px;
  //   padding: 4px 5px;
  //   margin-right: 5px;
  //   line-height: 12px;
  // }
  // .price {
  //   font-size: 12px;
  //   color: #fa5741;
  //   span:nth-of-type(1) {
  //     font-size: 16px;
  //     font-weight: bolder;
  //   }
  // }
}
</style>
