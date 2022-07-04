<template>
  <div>
    <LcHead name="地图找房"></LcHead>

    <div id="container"></div>

    <van-popup v-model="show" position="bottom">
      <van-cell-group>
        <van-cell
          title="房屋列表"
          value="更多"
          @click="$router.push('/find')"
        />
      </van-cell-group>
      <CardMain class="card" :list="list"></CardMain>
    </van-popup>
  </div>
</template>

<script>
import { getMapList } from '@/api/city'
import { searchHouses } from '@/api/find'
import { mapState } from 'vuex'
import CardMain from '@/components/CardMain.vue'
export default {
  name: 'map',
  async created () {
    this.getMap(this.areaValue)
  },
  mounted () {
    this.$toast.loading({
      message: '加载中...',
      duration: 5000,
      forbidClick: true
    })
  },
  data () {
    return {
      mapList: [],
      show: false,
      onCount: 0,
      list: []
    }
  },
  methods: {
    async getMap (code) {
      try {
        const res = await getMapList(code)
        this.mapList = res.data.body
      } catch (err) {
        console.log(err)
      }
      this.$nextTick(() => {
        this.refresh(this.mapList)
      })
    },
    refresh (arr) {
      const { BMapGL } = window
      // 创建地图实例
      const map = new BMapGL.Map('container')

      const scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
      map.addControl(scaleCtrl)
      const zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
      map.addControl(zoomCtrl)
      // 创建点坐标
      // const point = new BMapGL.Point(116.404, 39.915)
      // 初始化地图，设置中心点坐标和地图级别
      // map.centerAndZoom(point, 15)
      map.centerAndZoom(this.selectCity + '市', 15)
      map.enableScrollWheelZoom(true)

      arr.forEach(item => {
        const content = `
          <div class="box">
            <p>${item.label}</p>
            <p>${item.count}</p>
          </div>
        `
        const latitude = item.coord.latitude
        const longitude = item.coord.longitude
        const label = new BMapGL.Label(content, { // 创建文本标注
          position: new BMapGL.Point(longitude, latitude), // 设置标注的地理位置
          offset: new BMapGL.Size(10, 20) // 设置标注的偏移量
        })
        map.addOverlay(label) // 将标注添加到地图中

        label.addEventListener('click', () => {
          this.onCount++
          if (this.onCount > 2) {
            console.log('-------')
          } else {
            if (this.onCount > 1) {
              this.show = true
            }
            this.getMap(item.value)
            this.changList(item.value)
          }
          this.$toast.loading({
            message: '加载中...',
            duration: 5000,
            forbidClick: true
          })
        })
      })
    },
    async changList (code) {
      try {
        const res = await searchHouses({ cityId: code })
        this.list = res.data.body.list
        console.log(this.list)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['areaValue', 'selectCity'])
  },
  watch: {},
  filters: {},
  components: {
    CardMain
  }
}
</script>

<style scoped lang='less'>
#container {
  width: 100vw;
  height: 100vh;
  /deep/ .BMap_stdMpZoom {
    inset: auto 15px 70px auto !important;
  }
  /deep/ .BMap_scaleCtrl {
    inset: auto auto 80px 75px !important;
  }
  /deep/ .box {
    width: 70px;
    height: 70px;
    line-height: 1;
    display: inline-block;
    position: absolute;
    border-radius: 100%;
    background: rgba(12, 181, 106, 0.9);
    color: #fff;
    border: 2px solid hsla(0, 0%, 100%, 0.8);
    text-align: center;
    cursor: pointer;
    p:nth-of-type(1) {
      padding: 18px 0 6px;
    }
  }
}
.van-popup {
  height: 60%;
  margin-top: 44px;
}
.van-cell-group {
  position: fixed;
  bottom: 400px;
  width: 100%;
  z-index: 9;
}
.card {
  margin-top: 50px;
}
</style>
