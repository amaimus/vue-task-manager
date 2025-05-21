import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import TaskDetailView from '@/views/TaskDetailView.vue'
import { authGuard } from '@/router/authGuard';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Login', component: LoginView },
  { 
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      { path: 'task/:id', name: 'TaskDetail', component: TaskDetailView, props: true },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(authGuard);

export default router
