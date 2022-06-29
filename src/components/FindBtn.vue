<template>
  <div class="find-btn">
    <van-button class="no" type="default">取消</van-button>
    <van-button class="yes" type="primary">确定</van-button>
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

<style scoped lang="less">
.find-btn {
  display: flex;
  .no {
    flex: 1;
  }
  .yes {
    flex: 2;
  }
}
</style>
