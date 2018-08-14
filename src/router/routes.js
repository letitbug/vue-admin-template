import Layout from '@/layouts/Layout'

export const constantRouteMap = [
  { path: '/error', component: () => import('@/modules/error/Error'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/modules/dashboard/Dashboard')
    }]
  },
  {
    path: '/others',
    component: Layout,
    redirect: '/others',
    children: [
      { path: '', name: 'Others', component: () => import('@/modules/others/Others') }
    ]
  },
  { path: '*', redirect: '/error', hidden: true }
]

export const asyncRouteMap = []
