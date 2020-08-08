import { IDefaultRoute } from '../interfaces';
import LoginRouter from '../modules/login/login.router';
import BurgerOrderRouter from '../modules/burgerOrder/burgerOrder.router';
import BurgerCartRouter from '../modules/burgerCart/burgerCart.router';

export const nonLayoutRoute: IDefaultRoute[] = [
  ...LoginRouter,
];

export const defaultLayoutRoute: IDefaultRoute[] = [
  ...BurgerOrderRouter,
  ...BurgerCartRouter,
];