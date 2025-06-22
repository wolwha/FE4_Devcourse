import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: () => {
        return false
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiredAuth: true,
      },
    },
  ],
})

// 전역가드
// 라우트 전환 전, 라우트 확정 전, 라우트 전환 후
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
  // next를 써야지 페이지 전환이 허용됨
})
router.beforeResolve((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
  // next를 써야지 페이지 전환이 허용됨
})
// beforeResolve는 beforeEach이후에 실행

router.afterEach((to, from, failuer) => {
  console.log(to) // 이동할 대상
  console.log(from) // 머물고 있는 곳
  console.log(failuer)
})

export default router
