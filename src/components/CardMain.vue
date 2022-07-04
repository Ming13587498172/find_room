<template>
  <span>
    <van-cell v-for="(item, index) in list" :key="index">
      <van-card
        desc
        title
        :thumb="baseURL + item.houseImg"
        @click="
          houseCode(item.houseCode);
          $router.push('/details');
          collect(item.houseCode);
        "
      >
        <template #price-top>
          <h3>{{ item.title }}</h3>
          <div class="house">
            <span>{{ item.desc }}</span>
          </div>
          <van-tag type="primary">{{ item.tags[0] }}</van-tag>
        </template>
        <template #bottom>
          <p class="price">
            <span>{{ item.price }}</span> 元/月
          </p>
        </template>
      </van-card>
    </van-cell>
  </span>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { isCollect } from '@/api/user'
export default {
  name: 'CardMain',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  created () {
    this.collect()
  },
  data () {
    return {
      baseURL: 'http://liufusong.top:8080'
    }
  },
  methods: {
    ...mapMutations(['houseCode']),
    async collect (code) {
      try {
        const res = await isCollect(code)
        const list = res.data.body
        this.$store.commit('getCollect', list.isFavorite)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['code'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-card {
  /deep/ .van-card__thumb {
    width: 106px;
    height: 80px;
  }
  /deep/ .van-card__content {
    overflow: hidden;
    line-height: 22px;
  }
  h3 {
    font-size: 15px;
    color: #000;
  }
  .house {
    font-size: 12px;
    color: #afb2b3;
    margin-bottom: 4px;
  }
  .van-tag {
    color: #39becd;
    background: #e1f5f8;
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    padding: 4px 5px;
    margin-right: 5px;
    line-height: 12px;
  }
  .price {
    font-size: 12px;
    color: #fa5741;
    span:nth-of-type(1) {
      font-size: 16px;
      font-weight: bolder;
    }
  }
}
</style>
