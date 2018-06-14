import Vue from 'vue'
import Router from 'vue-router'

// 首页组件
import Home from '@/pages/home/Home'
// 电影页面组件
import MovieDetail from '@/pages/movie/MovieDetail'
import MovieScreen from '@/pages/movie/Screen'
import MovieSeat from '@/pages/movie/Seat'
// 个人页面组件
import Person from '@/pages/person/Person'
import SignIn from '@/pages/signin/SignIn'
//  订单页面组件
import Order from '@/pages/order/Order'
import OrderDetail from '@/pages/order/OrderDetail'
import OrderConfirm from '@/pages/order/OrderConfirm'
import SignUp from '@/pages/signup/SignUp'
// 搜索页面组件
import Search from '@/pages/search/Search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/person',
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
      path: '/detail/:id',
      name: 'MovieDetail',
      component: MovieDetail
    }, {
      path: '/screen/:movieId',
      name: 'MovieScreen',
      component: MovieScreen
    }, {
      path: '/seat/:screenId',
      name: 'MovieSeat',
      component: MovieSeat
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
