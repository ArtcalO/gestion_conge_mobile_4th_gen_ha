import { createRouter, createWebHistory } from '@ionic/vue-router';
import LoginView from '../views/auth/LoginView.vue';
import EmployesView from '../views/employes/EmployesView.vue';

const routes = [
  {
    path: "/employes",
    name: "EmployesView",
    component: EmployesView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
