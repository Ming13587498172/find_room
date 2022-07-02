<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        left-icon=""
        show-action
        @input="inSearch(value)"
        input-align="center"
        placeholder="🔍请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-cell-group>
      <van-cell
        v-for="(item, index) in areaList"
        :key="index"
        :title="item.communityName"
        @click="
          communityName(item.communityName);
          community(item.community);
          $router.go(-1);
        "
      >
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { getArea } from '@/api/city'
import { mapState, mapMutations } from 'vuex'
let timer = null
export default {
  name: 'ReSearch',
  created () { },
  data () {
    return {
      value: '',
      areaList: []
    }
  },
  methods: {
    ...mapMutations(['communityName', 'community']),
    onSearch (val) {
      console.log(val)
    },
    onCancel () {
      this.$router.go(-1)
    },
    async inSearch (val) {
      if (this.timer) clearTimeout(timer)
      timer = setTimeout(async () => {
        try {
          const res = await getArea({ name: val, id: this.areaValue })
          this.areaList = res.data.body
          console.log(this.areaList)
        } catch (err) {
          console.log(err)
        }
      }, 500)
    }
  },
  computed: {
    ...mapState(['areaValue'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-search {
  background-color: #f6f5f6;
  .van-search__content {
    padding-left: unset;
  }
  .van-cell {
    background-color: #fff;
  }
  /deep/ .van-search__action {
    color: #6b7072;
    font-size: 15px;
  }
}
</style>
