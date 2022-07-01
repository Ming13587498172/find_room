<template>
  <div>
    <!-- 登录后 -->
    <div v-if="user && user.token" class="header login">
      <img src="../../img/avatar-login.png" />
      <div class="box">
        <div class="avatar">
          <img :src="userInfo.avatar" />
          <div class="title login-title">
            <p>{{ userInfo.nickname }}</p>
            <van-button class="logout-btn" round type="primary" @click="logout"
              >退出</van-button
            >
            <van-button
              class="diet-btn"
              icon="play"
              icon-position="right"
              type="primary"
              >编辑个人资料</van-button
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 登录前 -->
    <div v-else class="header notlogin">
      <img src="../../img/bg.png" />
      <div class="box">
        <div class="avatar">
          <img src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          <div class="title">
            <p>游客</p>
            <van-button type="primary" @click="$router.push('/login')"
              >去登陆</van-button
            >
          </div>
        </div>
      </div>
    </div>

    <van-grid clickable :column-num="3">
      <van-grid-item icon="star-o" text="我的收藏" @click="goCollect" />
      <van-grid-item icon="wap-home-o" text="我的出租" @click="goHousing" />
      <van-grid-item icon="clock-o" text="看房记录" to="" />
      <van-grid-item icon="coupon-o" text="成为房主" to="" />
      <van-grid-item icon="user-o" text="个人资料" to="" />
      <van-grid-item icon="service-o" text="联系我们" to="" />
    </van-grid>

    <div class="footer-img">
      <img src="@/img/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'
export default {
  name: 'my',
  async created () {
    if (this.user && this.user.token) {
      try {
        const res = await getUserInfo()
        this.userInfo = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗?' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    },
    goCollect () {
      if (this.user && this.user.token) {
        try {
          this.$router.push('/collect')
        } catch (err) {
          console.log(err)
        }
      } else {
        this.$router.push('/login')
      }
    },
    goHousing () {
      if (this.user && this.user.token) {
        try {
          this.$router.push('/housing')
        } catch (err) {
          console.log(err)
        }
      } else {
        this.$router.push('/login')
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

<style scoped lang="less">
// 登录前
// #region
.header {
  width: 376px;
  height: 300px;
  min-height: 300px;
  position: relative;
  img {
    width: 100%;
  }
  .box {
    position: absolute;
    background: #fff;
    width: 74%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .avatar {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .title {
        padding-top: 15px;
        p {
          margin: 5px 0 15px 0;
        }
        .van-button {
          width: 70px;
          height: 30px;
          border-radius: 5px;
          color: #fff;
          background-color: #21b97a;
          padding: unset;
          .van-button__text {
            font-size: 14px;
          }
        }
      }
    }
  }
}
// #endregion

// 登录后
// #region
.login {
  width: 376px;
  height: 378px;
  .box {
    .avatar {
      .login-title {
        p {
          margin: 0 0 6px 0;
        }
        .logout-btn {
          width: 54px;
          height: 20px;
          border-radius: 30px;
          color: #fff;
          background: #21b97a;
          /deep/ .van-button__text {
            font-size: 12px;
          }
        }
        .diet-btn {
          width: 108px;
          margin: 30px 0 0 -20px;
          color: #999;
          border: none;
          background-color: transparent;
          /deep/ .van-button__text {
            font-size: 12px;
          }
        }
      }
    }
  }
}
// #endregion

.van-grid {
  margin-top: 14px;
}
.footer-img {
  margin-top: 10px;
  text-align: center;
  img {
    width: 92%;
  }
}
</style>
