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
      },
      {
        path: 'register/company',
        name: 'auth.register.company',
        component: () => import(/* webpackChunkName: "register.company" */ './../views/auth/register/step-03.vue'),
        meta: {
          auth: false
        }
      },
      {
        path: 'register/term-of-use',
        name: 'auth.register.terms',
        component: () => import(/* webpackChunkName: "register.terms" */ './../views/auth/register/step-04.vue'),
        meta: {
          auth: false
        }
      },
      {
        path: 'register/finished',
        name: 'auth.register.finished',
        component: () => import(/* webpackChunkName: "register.finished" */ './../views/auth/register/finished.vue'),
        meta: {
          auth: false
        }
      }
    ]
  }
]
