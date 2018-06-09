import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Movie from '@/pages/movie/Movie.vue'
import Person from '@/pages/person/Person.vue'
import SignIn from '@/pages/signin/SignIn.vue'
<<<<<<< HEAD
import Order from '@/pages/order/Order.vue'
=======
import SignUp from '@/pages/signup/SignUp.vue'
>>>>>>> ccd08631d4074b2fc9c60c7f6d78717e0817736a

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
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
