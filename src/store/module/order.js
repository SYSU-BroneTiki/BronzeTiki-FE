import axios from 'axios'

export default {
  state: {
    orderInfo: {}
  },
  mutations: {
    SET_ORDER (state, order) {
      state.orderInfo = order
    }
  },
  actions: {
    GET_ORDERLIST ({ commit }) {
      // return axios.get('/static/mock/order-list.json').then(res => {
      return axios.get('/host/api/orders').then(res => {
        if (res.status === 200) {
          return res.data
        }
      })
    },
    GET_ORDER ({ commit }, orderId) {
      // return axios.get('/static/mock/order.json').then(res => {
      return axios.get('/host/api/orders/' + orderId).then(res => {
        if (res.status === 200) {
          commit('SET_ORDER', res.data)
        } else {
          commit('SET_ORDER', {})
        }
      })
    },
    CREATE_ORDER ({ commit }, payload) {
      return axios.post('/host/api/orders', payload).then(res => {
        if (res.status === 200) {
          commit('SET_ORDER', res.data)
        }
      })
    },
    PAY_ORDER ({ commit }, payload) {
      // return axios.get('/static/mock/pay-result.json').then(res => {
      return axios.patch('/host/api/orders/' + payload.orderId).then(res => {
        if (res.status === 200) {
          return res.data
        }
      })
    }
  }
}
