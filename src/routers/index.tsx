import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/home/index'));
const About = lazy(() => import('../pages/about/index'));

const routes: any[] = [
  {
    title: '首页',
    redirect: '/home',
    component: () => {
      return <div>123</div>;
    },
  },
  {
    title: '首页',
    path: '/home',
    component: Home,
  },
  {
    title: '关于',
    path: '/about',
    component: About,
  },
];

export default routes;
