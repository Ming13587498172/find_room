import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectCity: '北京',
    user: {},
    code: '',
    isCollect: false,
    areaValue: 'AREA|88cff55c-aaa4-e2e0',
    communityName: '',
    community: ''
  },
  getters: {
  },
  mutations: {
    sCity (state, payload) {
      state.selectCity = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    houseCode (state, payload) {
      state.code = payload
    },
    cityVal (state, payload) {
      state.areaValue = payload
    },
    communityName (state, payload) {
      state.communityName = payload
    },
    community (state, payload) {
      state.community = payload
    },
    getCollect (state, payload) {
      state.isCollect = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
