import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// 首页组件
import Home from '@/pages/home/Home'
// 电影页面组件
import MovieDetail from '@/pages/movie/MovieDetail'
import MovieScreen from '@/pages/movie/Screen'
import MovieSeat from '@/pages/movie/Seat'
// 个人页面组件
import User from '@/pages/user/UserInfo'
import SignIn from '@/pages/auth/SignIn'
//  订单页面组件
import Order from '@/pages/order/Order'
// import OrderDetail from '@/pages/order/OrderDetail'
// import OrderConfirm from '@/pages/order/OrderConfirm'
import SignUp from '@/pages/auth/SignUp'
// 搜索页面组件
import Search from '@/pages/search/Search'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/user/:username',
      name: 'User',
      component: User,
      meta: {
        requireAuth: true
      }
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
      component: Order,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})

// 路由守卫，未登陆时的路由跳转
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!store.state.auth.user) {
      next({
        path: '/signin'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
