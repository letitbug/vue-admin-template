import Layout from '@/layouts/Layout'

export const constantRouteMap = [
  { path: 'error', component: () => import('@/modules/error/Error'), hidden: true },
  {
    path: '/',
    component: Layout,
    children: []
  }
]

export const asyncRouteMap = []
