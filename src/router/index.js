import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue'

//indication of paths that direct to specific component - it's used via <router-link>
//vue.js custom component
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
