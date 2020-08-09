import { IDefaultState, IBurgerCart } from "../../../interfaces";
import initialDefaultState from "../../../constants/InitialDefaultState";

export const BURGER_CART_FETCH = 'BURGER_CART_FETCH';
export const BURGER_CART_FETCH_SUCCESS = 'BURGER_CART_FETCH_SUCCESS';
export const BURGER_CART_FETCH_FAILED = 'BURGER_CART_FETCH_FAILED';

export const initialBurgerCartState: IDefaultState<IBurgerCart> = {
  ...initialDefaultState,
  res: {
    items: [],
    totalPrice: 0,
  }
}