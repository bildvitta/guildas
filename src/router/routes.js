
const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Home', path: '', component: () => import('pages/Index.vue') },
      { name: 'About', path: '/sobre', component: () => import('pages/About.vue') },
      { name: 'Contact', path: '/contato', component: () => import('pages/Contact.vue') },
      { name: 'Events', path: '/eventos', component: () => import('pages/Events.vue')},
      { name: 'Events', path: '/eventos/:id', component: () => import('pages/SingleEventPage.vue') },
      { name: 'Cases', path: '/cases', component: () => import('pages/Cases.vue') },
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
