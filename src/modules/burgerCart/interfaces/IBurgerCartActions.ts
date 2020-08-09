import { BURGER_CART_FETCH, BURGER_CART_FETCH_SUCCESS, BURGER_CART_FETCH_FAILED } from "../contants";
import { IBurgerCart } from "../../../interfaces";

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

export type BurgerCartActions = IBurgerCartFetch | IBurgerCartFetchSuccess | IBurgerCartFetchFailed;
