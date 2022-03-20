import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'


export default {
  addCart(context, payload) {
    return new Promise((resolve) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // }
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('商品在购物车等亲哦~')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('商品在购物车等亲哦~')
      }
    })

  }
}