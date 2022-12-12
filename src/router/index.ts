import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/components/Button',
  },
  {
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('@packages/components/Button/docs/README.md'),
  },
  {
    title: '输入框',
    name: 'Input',
    path: '/components/Input',
    component: () => import('@packages/components/Input/docs/README.md'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
});
