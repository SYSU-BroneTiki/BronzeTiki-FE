import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Movie from '@/pages/movie/Movie.vue'
import Person from '@/pages/person/Person.vue'
import SignIn from '@/pages/signin/SignIn.vue'
import SignUp from '@/pages/signup/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/',
      name: 'Person',
      component: Person
    }, {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }, {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }, {
      path: '/movie',
      name: 'Movie',
      component: Movie
    }
  ]
})
