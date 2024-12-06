import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import TrainClassPage from '@/views/TrainClassPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  { path: '/train-class', name: 'TrainClassPage', component: TrainClassPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user')
  if (!isAuthenticated && to.path !== '/login' && to.path !== '/register') {
    next('/login')
  } else {
    next()
  }
})

export default router
