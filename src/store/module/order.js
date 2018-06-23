import axios from 'axios'

export default {
  state: {
    orderInfo: {}
  },
  mutations: {
    SET_ORDER (state, order) {
      state.orderInfo = order.data
      console.log('SET_ORDER_SUCC', order.data)
    }
  },
  actions: {
    CREATE_ORDER ({ commit }, payload) {
      return axios.get('/static/mock/order-confirm.json', payload).then(res => {
        if (res.status === 200) {
          commit('SET_ORDER', res.data)
        }
      })
    }
  }
}
