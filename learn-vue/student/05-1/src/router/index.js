import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // detail / about / product / detail1 / profile/2 / user / me
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView,
      redirect: '/about',
    },
    {
      path: '/about',
      name: 'about',
      component: {
        header: () => import('../views/AboutView.vue'),
        default: () => import('../views/AboutView.vue'),
        footer: () => import('../views/dashboard/DashboardSettingView.vue'),
      },
      props: {
        header: true,
        default: false,
        footer: true,
      },
    },
    {
      path: '/dashboard',
      component: () => import('../views/dashboard/DashBoardView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/dashboard/DashboardHomeView.vue'),
          // 화살표함수: 리렌더링이 발생하더라도 1번만
          // 화살표X: 리렌더링할때마다 매번 로드
        },
        {
          path: 'setting',
          component: () => import('../views/dashboard/DashboardSettingView.vue'),
        },
      ],
    },
    {
      path: '/product/:orderId(\\d+)',
      // \\d+: 숫자만 매칭되도록 하는 정규식
      // 변경사항은 watch로 감시해서 처리 가능
      name: 'productDetail',
      component: () => import('../views/OrderView.vue'),
    },
    // 네임드 라우트: 네임 속성값을 사용하여 path를 지정
    // 지연된 로딩 -> 전체 라우트의 일괄 로딩을 방지. 성능 개선
    // 라우트가 전환될 떄마다 리소스를 다운받아야 하는 부분은 단점
    // 동적 세그먼트: 세그먼트를 고정하지 않음
    // 똑같이 일치되는 세그먼트를 먼저 보여준다.
    // {
    //   // /detail
    //   // /:id <- 세그먼트: 라우트에서 쪼개서 사용할 수 있는 하나의 단위
    //   path: '/detail/:id',
    //   name: 'detail',
    //   component: () => import('../views/DetailView.vue'),
    // },
    // {
    //   path: '/user-:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('../views/NotFound.vue'),
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('../views/NotFound.vue'),
    // },
    // 별칭: 해당 라우트에 접근할 수 있는 또 다른 이름
  ],
})

export default router
