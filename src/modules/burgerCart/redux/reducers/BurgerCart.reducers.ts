import { IDefaultState, IBurgerCart } from "../../../../interfaces";
import {
  initialBurgerCartState,
  BURGER_CART_FETCH, BURGER_CART_FETCH_SUCCESS, BURGER_CART_FETCH_FAILED,
  CART_ITEM_SET_QTY, CART_ITEM_SET_QTY_SUCCESS, CART_ITEM_SET_QTY_FAILED
} from "../../contants";
import { BurgerCartActions } from "../../interfaces";
import { countTotalPrice } from "../../../../utilities/BurgerCartUtil";

export const burgerCartReducer = (
  state: IDefaultState<IBurgerCart> = initialBurgerCartState,
  action: BurgerCartActions,
): IDefaultState<IBurgerCart> => {
  switch (action.type) {
    case BURGER_CART_FETCH: return burgerCartFetch(state, action);
    case BURGER_CART_FETCH_SUCCESS: return burgerCartFetchSuccess(state, action);
    case BURGER_CART_FETCH_FAILED: return burgerCartFetchFailed(state, action);
    case CART_ITEM_SET_QTY: return cartItemSetQty(state, action);
    case CART_ITEM_SET_QTY_SUCCESS: return cartItemSetQtySuccess(state, action);
    case CART_ITEM_SET_QTY_FAILED: return cartItemSetQtyFailed(state, action);

    default: return state;
  }
}

const burgerCartFetch = (
  state: IDefaultState<IBurgerCart>,
  action: BurgerCartActions
): IDefaultState<IBurgerCart> => {
  if (action.type === BURGER_CART_FETCH) {
    return {
      ...state,
      fetch: true,
      action: action.type,
      err: null,
      res: null,
    }
  }
  return state;
}

const burgerCartFetchSuccess = (
  state: IDefaultState<IBurgerCart>,
  action: BurgerCartActions
): IDefaultState<IBurgerCart> => {
  if (action.type === BURGER_CART_FETCH_SUCCESS) {
    return {
      ...state,
      fetch: false,
      action: action.type,
      err: null,
      res: action.cart,
    }
  }
  return state;
}

const burgerCartFetchFailed = (
  state: IDefaultState<IBurgerCart>,
  action: BurgerCartActions
): IDefaultState<IBurgerCart> => {
  if (action.type === BURGER_CART_FETCH_FAILED) {
    return {
      ...state,
      fetch: false,
      action: action.type,
      res: null,
      err: action.error,
    }
  }
  return state;
}

const cartItemSetQty = (
  state: IDefaultState<IBurgerCart>,
  action: BurgerCartActions
): IDefaultState<IBurgerCart> => {
  if (action.type === CART_ITEM_SET_QTY) {
    return {
      ...state,
      fetch: true,
      action: action.type,
      err: null,
    }
  }
  return state;
}

const cartItemSetQtySuccess = (
  state: IDefaultState<IBurgerCart>,
  action: BurgerCartActions
): IDefaultState<IBurgerCart> => {
  if (action.type === CART_ITEM_SET_QTY_SUCCESS) {
    const index = state.res?.items.findIndex((x) => x.burger.ingredients === action.item.burger.ingredients) ?? 0;
    const cart = [
      ...state.res?.items.slice(0, index) ?? [],
      { ...action.item },
      ...state.res?.items.slice(index + 1) ?? []
    ]

    return {
      ...state,
      fetch: true,
      action: action.type,
      err: null,
      res: {
        ...state.res,
        items: cart,
        totalPrice: countTotalPrice(cart)
      }
    }
  }
  return state;
}

const cartItemSetQtyFailed = (
  state: IDefaultState<IBurgerCart>,
  action: BurgerCartActions
): IDefaultState<IBurgerCart> => {
  if (action.type === CART_ITEM_SET_QTY_FAILED) {
    return {
      ...state,
      fetch: true,
      action: action.type,
      err: action.error,
    }
  }
  return state;
}