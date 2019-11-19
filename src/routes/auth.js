export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "tournament" */ './../layouts/Unauthenticated.vue'),
    redirect: { name: 'auth.login' },
    meta: { auth: false },
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import(/* webpackChunkName: "tournament" */ './../views/auth/Login.vue'),
        meta: {
          auth: false
        }
      }
    ]
  }
]
