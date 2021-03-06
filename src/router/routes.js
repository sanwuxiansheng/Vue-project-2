// 引入路由
import Msite from '../pages/Msite';
import Order from '../pages/Order';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Login from '../pages/Login';
import UserInfo from '../pages/UserInfo';
import Shop from '../pages/Shop';
import Goods from '../pages/Shop/Goods';
import Info from '../pages/Shop/Info';
import Ratings from '../pages/Shop/Ratings'
// 向外暴露
export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userInfo',
    component: UserInfo
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: Goods
      },
      {
        path: '/shop/info',
        component: Info
      },
      {
        path: '/shop/ratings',
        component: Ratings
      },
      {
        path: '/shop',
        redirect: '/shop/goods'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]