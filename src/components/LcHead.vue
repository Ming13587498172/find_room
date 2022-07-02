<template>
  <van-nav-bar :title="name">
    <template #left>
      <van-icon
        name="arrow-left"
        @click="
          cityName('');
          communityName('');
          $router.go(-1);
        "
      />
    </template>
  </van-nav-bar>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created () { },
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['cityName', 'communityName'])
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  background-color: #21b97a;
}
.van-icon {
  color: #fff;
}
/deep/ .van-nav-bar__title {
  color: #fff;
}
</style>
