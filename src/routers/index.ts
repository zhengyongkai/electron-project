import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 推荐使用 hash 模式（避免文件协议问题）
  routes,
});

export default router;
