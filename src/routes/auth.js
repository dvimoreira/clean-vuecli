export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "template-unauthenticated" */ './../layouts/Unauthenticated.vue'),
    redirect: { name: 'auth.login' },
    meta: { auth: false },
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import(/* webpackChunkName: "login" */ './../views/auth/Login.vue'),
        meta: {
          auth: false
        }
      },
      {
        path: 'register/basic',
        name: 'auth.register.basic',
        component: () => import(/* webpackChunkName: "register.basic" */ './../views/auth/register/step-01.vue'),
        meta: {
          auth: false
        }
      },
      {
        path: 'register/profile',
        name: 'auth.register.profile',
        component: () => import(/* webpackChunkName: "register.profile" */ './../views/auth/register/step-02.vue'),
        meta: {
          auth: false
        }
      }
    ]
  }
]
