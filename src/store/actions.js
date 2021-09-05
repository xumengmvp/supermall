import {
  INCREMENTCOUNT,
  PUSHPRODUCT,
  UPDATECHECKSTATE
} from './mutations.type'

export default {
  //写异步代码以及逻辑代码
  addCart(context,payload) {
    return new Promise((resolve,reject) => {
      let flag = true

      let shoppingCart = context.state.shoppingCart
  
      for(let i = 0;i < shoppingCart.length; i++) {
        if( shoppingCart[i].iid === payload.iid ) {
          context.commit(INCREMENTCOUNT,i)
          resolve('加入购物车成功')
          flag = false
          break
        }
      }

      if(flag) {
        context.commit(PUSHPRODUCT,payload)
        resolve('加入购物车成功')
      }
    }) 
  },
  findIndex(context,payload) {
    let shoppingCart = context.state.shoppingCart
    let itemIndex = shoppingCart.findIndex((item) => {
      return item.iid === payload.iid
    })
    if(itemIndex != -1) {
      context.commit(UPDATECHECKSTATE,{
        itemIndex,
        checkState: payload.checkState
      })
    }
  }
}