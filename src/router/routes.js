import Layout from '@/layouts/Layout'

export const constantRouteMap = [
  { path: '/error/:code', component: () => import('@/modules/error/Error'), hidden: true },
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
    path: '/report',
    component: Layout,
    redirect: '/report',
    children: [
      { path: '', name: 'Reports', component: () => import('@/modules/reports/Reports') }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table',
    children: [
      { path: '', name: 'Table', component: () => import('@/modules/table/Table') }
    ]
  },
  { path: '*', redirect: '/error/404', hidden: true }
]

export const asyncRouteMap = []
