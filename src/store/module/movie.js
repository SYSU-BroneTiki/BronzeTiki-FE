import axios from 'axios'

export default {
  state: {
  },
  mutations: {
    SET_MOVIE_DETAIL (state, detail) {
      state.detail = detail.data
    },
    UPDATE_MOVIE_COMMENTS (state, newComment) {
      state.detail.comments.push(newComment)
    }
  },
  actions: {
    GET_MOVIES ({ commit }) {
      // return axios.get('/static/mock/recommend.json').then(res => {
      return axios.get('/host/api/movies').then(res => {
        return res
      })
    },
    GET_MOVIE_DETAIL ({ commit }, movieId) {
      // return axios.get('/static/mock/movie-detail.json').then(res => {
      return axios.get('/host/api/movies/' + movieId).then(res => {
        if (res.status === 200) {
          commit('SET_MOVIE_DETAIL', res.data)
          return res.data
        }
      })
    },
    GET_SCREENS ({ commit }, movieId) {
      // return axios.get('/static/mock/screen.json').then(res => {
      return axios.get('/host/api/screens/' + movieId).then(res => {
        if (res.status === 200) {
          return res.data
        }
      })
    },
    GET_SEATS ({ commit }, screenId) {
      return axios.get('/host/api/seats/' + screenId).then(res => {
        if (res.status === 200) {
          console.log(res.data)
          return res.data
        }
      })
    },
    UPDATE_MOVIE_COMMENTS ({ commit }, newComment) {
      commit('UPDATE_MOVIE_COMMENTS', newComment)
    }
  }
}
