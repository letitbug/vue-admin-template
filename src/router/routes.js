import Layout from '@/layouts/Layout'

export const constantRouteMap = [
  { path: 'error', component: () => import('@/modules/error/Error'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/modules/dashboard/Dashboard')
    }]
  }
]

export const asyncRouteMap = []
