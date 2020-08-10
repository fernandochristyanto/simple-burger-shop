import { BurgerCartActions } from "../../interfaces";
import {
  BURGER_CART_FETCH, BURGER_CART_FETCH_SUCCESS, BURGER_CART_FETCH_FAILED,
  CART_ITEM_SET_QTY, CART_ITEM_SET_QTY_SUCCESS, CART_ITEM_SET_QTY_FAILED
} from "../../contants";
import { IBurgerCartFetchSuccessParam, IBurgerCartFetchParam, ICartItemSetQtyParam, ICartItemSetQtySuccessParam } from "../../interfaces/IParams";

export const burgerCartFetch = (param: IBurgerCartFetchParam): BurgerCartActions => ({
  type: BURGER_CART_FETCH,
  username: param.username
});
export const burgerCartFetchSuccess = (param: IBurgerCartFetchSuccessParam): BurgerCartActions => ({
  type: BURGER_CART_FETCH_SUCCESS,
  cart: param
});
export const burgerCartFetchFailed = (error: any): BurgerCartActions => ({
  type: BURGER_CART_FETCH_FAILED,
  error: error
});

export const cartItemSetQty = (param: ICartItemSetQtyParam): BurgerCartActions => ({
  type: CART_ITEM_SET_QTY,
  ingredients: param.ingredients,
  qty: param.qty
});
export const cartItemSetQtySuccess = (param: ICartItemSetQtySuccessParam): BurgerCartActions => ({
  type: CART_ITEM_SET_QTY_SUCCESS,
  item: param.item
});
export const cartItemSetQtyFailed = (error: any): BurgerCartActions => ({
  type: CART_ITEM_SET_QTY_FAILED,
  error: error
});
