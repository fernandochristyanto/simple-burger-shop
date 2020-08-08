import React from "react";
import { IDefaultRoute } from "../../interfaces";

const routes: IDefaultRoute[] = [
  {
    name: 'Burger Cart',
    path: '/burger-cart',
    exact: true,
    component: React.lazy(() => import('./views/BurgerCart')),
  }
];

export default routes;
