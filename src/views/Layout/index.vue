<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home"> 首页 </van-tabbar-item>
      <van-tabbar-item replace to="/find" icon="home"> 找房 </van-tabbar-item>
      <van-tabbar-item replace to="/consult" icon="home">
        咨询
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="home"> 我的 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
