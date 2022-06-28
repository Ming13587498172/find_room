<template>
  <div>
    <LcHead name="账号登录"></LcHead>
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model.trim="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div class="btn" style="margin: 16px">
        <van-button square block type="primary" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <p>还没有账号，去注册~</p>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'login',
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        this.$toast.success('登录成功')
        this.$store.commit('setUser', res.data.body)
        setTimeout(() => {
          this.$router.push({ name: 'my' })
        }, 1000)
      } catch (err) {
        console.log(err)
        this.$toast.fail('账号或密码有误')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.van-form {
  margin: 10px 0 0 0;
}
.van-nav-bar {
  background-color: #21b97a;
}
/deep/ .van-nav-bar__title {
  color: #fff;
}
/deep/ .van-cell {
  position: relative;
  margin-bottom: 9px;
}
.btn {
  margin-top: 27px;
}
/deep/ .van-button--square {
  display: block;
  outline: 0 none;
  -webkit-appearance: none;
  padding: 0;
  text-align: center;
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  color: #fff;
  background-color: #1cb676;
  border: 1px solid #1cb676;
  border-radius: 2px;
  width: 100%;
}
p {
  margin-top: 30px;
  text-align: center;
  color: #666;
  text-align: center;
  font-size: 14px;
}
</style>
