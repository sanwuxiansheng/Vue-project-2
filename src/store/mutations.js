// 存储直接修改状态数据的方法的对象
// 引入定义的常量
import { RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS, RECEIVE_USER, RESET_USER } from './mutation-types'
export default {
  // 更新地址
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  // 更新食品分类
  [RECEIVE_CATEGORIES] (state, categories) {
    state.categories = categories
  },
  // 更新店铺信息
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
  // 更新用户信息
  [RECEIVE_USER] (state, user) {
    state.user = user
  },
  // 删除用户信息
  [RESET_USER] (state) {
    state.user = {}
  }
} 