import axios from 'axios'

let user = JSON.parse(localStorage.getItem('user')) || ''

export default {
  state: {
    user: user || ''
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
      if (user !== '') {
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        localStorage.removeItem('user')
      }
    },
    MODIFY_PASSWORD (state, password) {
      state.user.password = password
      if (user !== '') {
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        localStorage.removeItem('user')
      }
    },
    PAY (state, money) {
      state.user.money -= money
    },
    DELETE_USER (state) {
      state.user = ''
      localStorage.removeItem('user')
    },
    // data type is key-value
    UPDATE_USER (state, data) {
      state.user[data[0]] = data[1]
    }
  },
  actions: {
    // 获取用户的信息，在服务端判断是否登陆
    GET_USER_INFO ({commit}) {
      return axios.get('/api/state').then((res) => {
        if (res.status === 200 || res.data.message === 'Online') {
          commit('SET_USER', res.data)
        } else {
          commit('SET_USER', '')
        }
      })
    },
    // SIGN_UP ({commit}, data) {
    //   return axios.post('', data).then(res => {
    //     commit('SET_RESULT', res.data.message)
    //   })
    // },
    SIGN_OUT ({commit}) {
      return axios.delete('/api/users/login').then(res => {
        commit('DELETE_USER')
      })
    }
  }
}
