import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/dashboard_nazir',
      component: () => import('./views/nazir/Default.vue'),
      children: [
        {
          path: '',
          name: 'dashboardNazir',
          component: () => import('./views/nazir/DashboardNazir.vue')
        }
      ]
    }

  ]
})
