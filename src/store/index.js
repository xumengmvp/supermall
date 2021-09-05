import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//安装插件
Vue.use(Vuex)


const state =  {
  shoppingCart: []
}

//创建store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
})


//导出store
export default store