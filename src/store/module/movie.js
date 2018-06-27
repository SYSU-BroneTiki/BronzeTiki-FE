import axios from 'axios'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    GET_MOVIES ({ commit }) {
      // console.log('GET_MOVIES')
      return axios.get('/test/api/movies').then(res => {
        console.log(res)
        if (res.status === 200) {
          return res.data
        } else {
          return {
            'ret': false,
            'data': {
              'movies': []
            }
          }
        }
      })
    },
    GET_MOVIE_DETAIL ({ commit }, movieId) {
      return axios.get('/test/api/movies/' + movieId).then(res => {
        if (res.status === 200) {
          console.log(res.data)
          return res.data
        }
      })
    },
    GET_SCREENS ({ commit }, movieId) {
      return axios.get('/test/api/screens/' + movieId).then(res => {
        if (res.status === 200) {
          return res.data
        }
      })
    },
    GET_SEATS ({ commit }, payload) {
      return axios.get('/static/mock/seat.json').then(res => {
        if (res.status === 200) {
          return res.data
        }
      })
    }
  }
}