import { createRouter, createWebHistory } from 'vue-router'
import SearchResults  from '../views/SearchResults.vue'
import SearchResults_local  from '../views/SearchResults_local.vue'

const routes = [
  {
    path: '/search_local',
    name: 'SearchResults_local',
    component: SearchResults_local
  },
  {  
    path: '/',  
    name: 'SearchResults', // 这里的name最好与组件的name一致  
    component: SearchResults  
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
