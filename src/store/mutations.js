import {
  INCREMENTCOUNT,
  PUSHPRODUCT,
  UPDATECHECKSTATE,
  UPDATEALLCHECKSTATE
} from './mutations.type'


export default {
  //只写入修改state的代码
  
  [INCREMENTCOUNT](state, index) {
    state.shoppingCart[index].count++
  },

  [PUSHPRODUCT](state, payload){
    state.shoppingCart.push(payload)
  },

  [UPDATECHECKSTATE](state,payload){
    state.shoppingCart[payload.itemIndex].checked = payload.checkState
  },
  [UPDATEALLCHECKSTATE](state,payload) {
    state.shoppingCart.forEach(element => {
      element.checked = !payload
    })
  }
}