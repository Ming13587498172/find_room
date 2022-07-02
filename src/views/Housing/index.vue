<template>
  <div>
    <LcHead name="房屋管理"></LcHead>
    <div class="container" v-if="houseList.length === 0">
      <img src="http://liufusong.top:8080/img/not-found.png" alt="" />
      <p>
        您还没有房源，<a href="javascript:;" @click="release">去发布房源</a>吧~
      </p>
    </div>
    <div v-else>
      <CardMain :list="houseList"></CardMain>
    </div>
  </div>
</template>

<script>
import { faList } from '@/api/user'
import { mapState } from 'vuex'
export default {
  name: 'housing',
  created () {
    this.getList()
  },
  data () {
    return {
      houseList: []
    }
  },
  methods: {
    release () {
      if (this.user && this.user.token) {
        this.$router.push('/release')
      } else {
        this.$router.push('/login')
      }
    },
    async getList () {
      try {
        const res = await faList()
        this.houseList = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
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
