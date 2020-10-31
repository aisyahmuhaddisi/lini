import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pembicara from '../components/Pembicara.vue'
import DetailPembicara from '../components/DetailPembicara.vue'
import Admin from '../components/Admin.vue'
import TambahPembicara from '../components/TambahPembicara.vue'
import Profile from '../components/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pembicara',
    name: 'Pembicara',
    component: Pembicara
  },
  {
    path: '/detail/:id',
    name: 'DetailPembicara',
    component: DetailPembicara
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    redirect: '/profile/admin',
    meta: { authUser: true },
    children: [
      {
        path: '/profile/admin',
        name: 'Admin',
        component: Admin,
        meta: { adminAuth: true, authUser: true }
      },
      {
        path: 'tambah-pembicara',
        name: 'TambahPembicara',
        component: TambahPembicara,
        meta: { adminAuth: true, authUser: true }
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const authUser = JSON.parse(window.localStorage.getItem("user"))
  if (to.meta.adminAuth && to.meta.authUser) {
      if (authUser && authUser.isAdmin == true) {
          next()
      }
      else {
          next("/")
      }
  }
  else {
      next() // make sure to always call next()!
  }
});

export default router
