
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      //{ path: '', component: () => import('pages/IndexPage.vue') }
      { path: '', component: () => import('pages/inicio.vue') },
      { path: '/servicios', component: () => import('pages/servicios.vue') },
      { path: '/blog', component: () => import('pages/blog.vue') },
      { path: '/moodle', component: () => import('pages/moodle.vue') },
      { path: '/mapas', component: () => import('pages/mapas.vue') },
      { path: '/noticias', component: () => import('pages/noticias.vue') },
      { path: '/enl-const', component: () => import('pages/enl-const.vue') },
      { path: '/ayuda', component: () => import('pages/ayuda.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
