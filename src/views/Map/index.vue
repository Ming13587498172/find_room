<template>
  <div>
    <LcHead name="地图找房"></LcHead>

    <div id="container" style="opacity: 0.06"></div>
  </div>
</template>

<script>
import { getMapList } from '@/api/city'
import { mapState } from 'vuex'
export default {
  name: 'map',
  async created () {
    // this.getMap()
    try {
      const res = await getMapList()
      this.mapList = res.data.body
    } catch (err) {
      console.log(err)
    }
  },
  mounted () {
    const { BMapGL } = window
    const map = new BMapGL.Map('container')

    const scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
    map.addControl(scaleCtrl)
    const zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
    map.addControl(zoomCtrl)

    // 创建地图实例
    const point = new BMapGL.Point(116.404, 39.915)
    // 创建点坐标
    map.centerAndZoom(point, 15)
    // 初始化地图，设置中心点坐标和地图级别

    map.centerAndZoom(new BMapGL.Point(116.404, 39.928), 15)
    map.enableScrollWheelZoom(true)

    setTimeout(() => {
      const label = []
      for (let i = 0; i < this.mapList.length; i++) {
        const content = `
          <div class="box">
            <p>${this.mapList[i].label}</p>
            <p>${this.mapList[i].count}</p>
          </div>
        `
        const latitude = this.mapList[i].coord.latitude
        const longitude = this.mapList[i].coord.longitude
        const points = new BMapGL.Point(latitude, longitude)

        label[i] = new BMapGL.Label(content, { // 创建文本标注
          position: points, // 设置标注的地理位置
          offset: new BMapGL.Size(10, 20) // 设置标注的偏移量
        })
        // map.addOverlay(label[i]) // 将标注添加到地图中
      }
      label.forEach(item => map.addOverlay(item))
      // this.mapList.forEach(item => {
      //   const content = `
      //     <div class="box">
      //       <p>${item.label}</p>
      //       <p>${item.count}</p>
      //     </div>
      //   `
      //   const latitude = item.coord.latitude
      //   const longitude = item.coord.longitude
      //   const label = new BMapGL.Label(content, { // 创建文本标注
      //     position: new BMapGL.Point(latitude, longitude), // 设置标注的地理位置
      //     offset: new BMapGL.Size(10, 20) // 设置标注的偏移量
      //   })
      //   map.addOverlay(label) // 将标注添加到地图中
      // })
    }, 10000)

    // const content = `
    //   <div class="box">
    //     <p>123</p>
    //     <p>abc</p>
    //   </div>
    // `
    // const label = new BMapGL.Label(content, { // 创建文本标注
    //   position: point, // 设置标注的地理位置
    //   offset: new BMapGL.Size(10, 20) // 设置标注的偏移量
    // })
    // map.addOverlay(label) // 将标注添加到地图中
  },
  data () {
    return {
      mapList: []
    }
  },
  methods: {
    // async getMap () {
    //   try {
    //     const res = await getMapList()
    //     this.mapList = res.data.body
    //     console.log(this.mapList)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
  },
  computed: {
    ...mapState(['areaValue'])
  },
  watch: {},
  filters: {},
  components: {}
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
</style>
