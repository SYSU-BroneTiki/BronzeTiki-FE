import axios from 'axios'
// import DataProcess from '../../common/utils/DataProcess'

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
    CREATE_ORDER ({ commit }, payload) {
      // console.log('POST数据', tOrder)
      console.log('POST订单数据', payload)
      return axios.post('/test/api/orders', payload).then(res => {
        if (res.status === 200) {
          console.log('订单提交返回数据', res.data)
          commit('SET_ORDER', res.data)
        }
      })
    },
    PAY_ORDER ({ commit }, payload) {
      // return axios.patch('/test/api/orders/' + payload.orderId).then(res => {
      return axios.get('/static/mock/pay-result.json').then(res => {
        console.log(res)
        if (res.status === 200) {
          return res.data
        }
      })
    }
  }
}
