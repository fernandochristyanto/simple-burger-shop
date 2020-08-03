import { IDefaultRoute } from '../interfaces';
import LoginRouter from '../modules/login/login.router';
import BurgerOrderRouter from '../modules/burgerOrder/burgerOrder.router';

export const nonLayoutRoute: IDefaultRoute[] = [
  ...LoginRouter,
];

export const defaultLayoutRoute: IDefaultRoute[] = [
  ...BurgerOrderRouter,
];