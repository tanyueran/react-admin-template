import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/index'));
const classScheduleDemo = lazy(() => import('../pages/classScheduleDemo/index'));

const routes: any[] = [
  {
    title: '首页',
    path: '/home',
    component: Home,
  },
  {
    title: '课表demo',
    path: '/classScheduleDemo',
    component: classScheduleDemo,
  },
  {
    title: '首页',
    path: '/',
    component: () => {
      return <Navigate to={'/home'} replace />;
    },
  },
  {
    title: '404',
    path: '/*',
    component: () => {
      return <div>404</div>;
    },
  },
];

export default routes;
