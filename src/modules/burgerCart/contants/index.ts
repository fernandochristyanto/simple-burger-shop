import { IDefaultState, IBurgerCart } from "../../../interfaces";
import initialDefaultState from "../../../constants/InitialDefaultState";

export const BURGER_CART_FETCH = 'BURGER_CART_FETCH';
export const BURGER_CART_FETCH_SUCCESS = 'BURGER_CART_FETCH_SUCCESS';
export const BURGER_CART_FETCH_FAILED = 'BURGER_CART_FETCH_FAILED';
export const CART_ITEM_SET_QTY = 'CART_ITEM_SET_QTY';
export const CART_ITEM_SET_QTY_SUCCESS = 'CART_ITEM_SET_QTY_SUCCESS';
export const CART_ITEM_SET_QTY_FAILED = 'CART_ITEM_SET_QTY_FAILED';
export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_ADD_ITEM_SUCCESS = 'CART_ADD_ITEM_SUCCESS';
export const CART_ADD_ITEM_FAILED = 'CART_ADD_ITEM_FAILED';

export const initialBurgerCartState: IDefaultState<IBurgerCart> = {
  ...initialDefaultState,
  res: {
    items: [],
    totalPrice: 0,
  }
}
