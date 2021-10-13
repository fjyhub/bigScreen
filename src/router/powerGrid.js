export default [
  {
    path: '/powerGrid',
    name: 'powerGrid',
    meta: {
      title: '电网诊断'
    },
    component: () => import('@/views/powerGrid/index.vue')
  }
]
