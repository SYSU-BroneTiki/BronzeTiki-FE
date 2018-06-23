import Vue from 'vue'
import Vuex from 'vuex'

import auth from './module/auth'
import movie from './module/movie'
import order from './module/order'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    movie,
    order
  }
})

export default store
