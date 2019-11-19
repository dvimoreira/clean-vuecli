export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "tournament" */ './../layouts/Unauthenticated.vue'),
    meta: { auth: false },
    children: [
      {
        path: '',
        name: 'auth.login',
        component: () => import(/* webpackChunkName: "tournament" */ './../views/Login.vue'),
        meta: {
          auth: false
        }
      },
      {
        path: 'login',
        name: 'auth.login',
        component: () => import(/* webpackChunkName: "tournament" */ './../views/Login.vue'),
        meta: {
          auth: false
        }
      }
    ]
  }
]
