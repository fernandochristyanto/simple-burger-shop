import { BurgerCartActions } from "../../interfaces";
import {
  BURGER_CART_FETCH, BURGER_CART_FETCH_SUCCESS, BURGER_CART_FETCH_FAILED,
  CART_ITEM_SET_QTY, CART_ITEM_SET_QTY_SUCCESS, CART_ITEM_SET_QTY_FAILED,
  CART_ADD_ITEM, CART_ADD_ITEM_SUCCESS, CART_ADD_ITEM_FAILED
} from "../../contants";
import {
  IBurgerCartFetchSuccessParam,
  ICartItemSetQtyParam, ICartItemSetQtySuccessParam,
  ICartAddItemParam
} from "../../interfaces/IParams";

export const burgerCartFetch = (): BurgerCartActions => ({
  type: BURGER_CART_FETCH
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

export const cartAddItem = (param: ICartAddItemParam): BurgerCartActions => ({
  type: CART_ADD_ITEM,
  burger: param.burger
});
export const cartAddItemSuccess = (): BurgerCartActions => ({
  type: CART_ADD_ITEM_SUCCESS
});
export const cartAddItemFailed = (error: any): BurgerCartActions => ({
  type: CART_ADD_ITEM_FAILED,
  error: error
});