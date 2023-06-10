import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'
import { messages, locale} from '@/i18n'
const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/chat/MainPage.vue'),
    meta: {auth: true, layout: 'main', title: 'main', transition: 'chat'},
    children: [
      {
        path: ':chatId',
        name: 'chat',
        component: () => import('@/components/Chat/ChatLayout.vue'),
        props: (route) => ({chatId: route.params.chatId})
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginPage.vue'),
    meta: {auth: false, layout: 'auth', transition: 'auth', title: 'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterPage.vue'),
    meta: {auth: false, layout: 'auth', transition: 'auth', title: 'signUp'}
  },
  {
    path: '/reset',
    name: 'password-reset',
    component: () => import('@/views/auth/PasswordReset.vue'),
    meta: {auth: false, layout: 'auth', transition: 'auth', title: 'passwordRecovery'}
  },
  {
    path: '/profile/:uid',
    name: 'profile-edit',
    component: () => import('@/views/auth/ProfileEditPage.vue'),
    meta: {auth: false, layout: 'auth', transition: 'auth', title: 'profile'},
    props: (route) => ({
      uid: route.params.uid
    })
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/auth/AvailableUsers.vue'),
    meta: {auth: false, layout: 'auth', transition: 'auth', title: 'users'}
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import ('@/views/app/NotFound.vue'),
    props: (route) => ({
      path: route.path
    }),
    meta: {layout: 'auth', title: 'notFound'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to: any)=>{
    if(to.meta.title) {
      const localizedTitle = messages[locale]?.pages?.[to.meta.title]
      document.title = localizedTitle ? localizedTitle : 'Chat app'
    }
    else document.title = 'Chat app'
    if(to.meta.auth && !auth.currentUser) {
      return {name: 'login', query: {
        redirect: to.name,
        message: 'auth/not-authorized'
      }}
    }
})
export default router

