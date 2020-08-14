
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/sobre', component: () => import('pages/About.vue') },
      { path: '/contato', component: () => import('pages/Contact.vue') },
      { path: '/eventos', component: () => import('pages/Events.vue') },
      { path: '/cases', component: () => import('pages/Cases.vue') },
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
