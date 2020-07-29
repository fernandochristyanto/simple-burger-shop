import React from 'react';
import { IDefaultRoute } from '../../interfaces';

const routes: IDefaultRoute[] = [
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: React.lazy(() => import('./views/Login')),
  }
];

export default routes;
