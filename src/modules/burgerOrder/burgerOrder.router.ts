import React from "react";
import { IDefaultRoute } from "../../interfaces";

const routes: IDefaultRoute[] = [
  {
    name: 'Order Burger',
    path: '/order-burger',
    exact: true,
    component: React.lazy(() => import('./views/BurgerOrder')),
  },
];

export default routes;