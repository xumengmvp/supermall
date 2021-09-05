export default {
  shoppingCart(state, getters) {
    return state.shoppingCart
  },
  shoppingCartLength(state, getters) {
    return state.shoppingCart.length  
  },
  calculatePrice(state, getters) {
    return state.shoppingCart.filter(item => {
      return item.checked === true
    }).reduce((previous,item) => {
      return previous + item.price * item.count
    },0)
  },
  checkedLength(state, getters) {
    return state.shoppingCart.filter(item => {
      return item.checked === true
    }).length
  },
  isAllCheck(state, getters) {
    if(state.shoppingCart.length === 0){
      return false
    }
    return state.shoppingCart.every(item => {
      return item.checked === true
    })
  }
}