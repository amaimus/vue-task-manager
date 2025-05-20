import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import TaskDetailView from '@/views/TaskDetailView.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Login', component: LoginView },
  { 
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    children: [
      { path: 'task/:id', name: 'TaskDetail', component: TaskDetailView, props: true },
    ] 
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
