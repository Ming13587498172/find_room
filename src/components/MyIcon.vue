<template>
  <i v-if="name === '衣柜'" class="iconfont">&#xe60d;</i>
  <i v-else-if="name === '洗衣机'" class="iconfont">&#xe67d;</i>
  <i v-else-if="name === '空调'" class="iconfont">&#xe65b;</i>
  <i v-else-if="name === '天然气'" class="iconfont">&#xe613;</i>
  <i v-else-if="name === '冰箱'" class="iconfont">&#xe625;</i>
  <i v-else-if="name === '暖气'" class="iconfont">&#xe636;</i>
  <i v-else-if="name === '电视'" class="iconfont">&#xe680;</i>
  <i v-else-if="name === '热水器'" class="iconfont">&#xe6fc;</i>
  <i v-else-if="name === '宽带'" class="iconfont">&#xe62c;</i>
  <i v-else class="iconfont">&#xe63a;</i>
</template>

<script>
export default {
  name: 'MyIcon',
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
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
