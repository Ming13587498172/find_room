<template>
  <div>
    <LcHead name="房屋管理"></LcHead>
    <div class="container">
      <img src="http://liufusong.top:8080/img/not-found.png" alt="" />
      <p>您还没有房源，<a href="javascript:;">去发布房源</a>吧~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collect',
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    margin: 30px 0;
  }
  p {
    font-size: 14px;
    a {
      color: #33be85;
    }
  }
}
</style>
