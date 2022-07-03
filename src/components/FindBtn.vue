<template>
  <div class="find-btn">
    <van-button class="no" type="button">取消</van-button>
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
  border-top: 1px solid #e9e9e9;
  .no {
    flex: 1;
    border: none;
    background-color: #fff;
  }
  .yes {
    flex: 2;
  }
}
</style>
