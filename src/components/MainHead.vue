<template>
  <van-search v-model="value" show-action placeholder="请输入搜索关键词">
    <template #left>
      <van-tabs>
        <van-tab to="/city" :title="selectCity"></van-tab>
        <template #nav-right>
          <van-icon class="tFont" name="arrow-down" />
        </template>
      </van-tabs>
    </template>
    <template #action>
      <van-icon name="location-o" />
    </template>
  </van-search>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () { },
  data () {
    return {
      value: ''
    }
  },
  methods: {},
  computed: {
    ...mapState(['selectCity'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
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
</style>
