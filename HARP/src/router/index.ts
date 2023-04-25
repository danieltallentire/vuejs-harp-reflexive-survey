import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SurveyView from '../views/SurveyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: route => ({ test: route.query.test })
    },
    {
      path: '/survey',
      name: 'survey',
      component: SurveyView,
      props: true,
    }
  ]
})

export default router
