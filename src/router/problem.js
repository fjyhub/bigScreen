export default [
  {
    path: '/problem',
    name: 'problem',
    meta: {
      title: '问题管控'
    },
    component: () => import('@/views/problem/index.vue')
  }
]
