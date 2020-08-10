import { BURGER_CART_FETCH, BURGER_CART_FETCH_SUCCESS, BURGER_CART_FETCH_FAILED, CART_ITEM_SET_QTY, CART_ITEM_SET_QTY_SUCCESS, CART_ITEM_SET_QTY_FAILED } from "../contants";
import { IBurgerCart, ICartItem } from "../../../interfaces";

declare interface IBurgerCartFetch {
  type: typeof BURGER_CART_FETCH
  username: string
}

declare interface IBurgerCartFetchSuccess {
  type: typeof BURGER_CART_FETCH_SUCCESS
  cart: IBurgerCart
}

declare interface IBurgerCartFetchFailed {
  type: typeof BURGER_CART_FETCH_FAILED
  error: any
}

declare interface ICartItemSetQty {
  type: typeof CART_ITEM_SET_QTY
  ingredients: string
  qty: number
}

declare interface ICartItemSetQtySuccess {
  type: typeof CART_ITEM_SET_QTY_SUCCESS
  item: ICartItem
}

declare interface ICartItemSetQtyFailed {
  type: typeof CART_ITEM_SET_QTY_FAILED
  error: any
}

export type BurgerCartActions =
  IBurgerCartFetch |
  IBurgerCartFetchSuccess |
  IBurgerCartFetchFailed |
  ICartItemSetQty |
  ICartItemSetQtySuccess |
  ICartItemSetQtyFailed;
