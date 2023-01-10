<<<<<<< HEAD
import { createRouter, createWebHashHistory } from 'vue-router';
=======
import { createRouter, createWebHistory } from 'vue-router';
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208

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
  {
    title: '表格',
    name: 'Table',
    path: '/components/Table',
    component: () => import('@packages/components/Table/docs/README.md'),
  },
];

export default createRouter({
<<<<<<< HEAD
  history: createWebHashHistory(),
=======
  history: createWebHistory(),
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
});
