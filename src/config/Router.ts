import { IDefaultRoute } from '../interfaces';
import LoginRouter from '../modules/login/login.router';

export const nonLayoutRoute: IDefaultRoute[] = [
  ...LoginRouter,
];

export const defaultLayoutRoute: IDefaultRoute[] = [

];