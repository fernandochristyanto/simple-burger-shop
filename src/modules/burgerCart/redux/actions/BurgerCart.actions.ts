import { BurgerCartActions } from "../../interaces";
import { BURGER_CART_FETCH, BURGER_CART_FETCH_SUCCESS, BURGER_CART_FETCH_FAILED } from "../../contants";
import { IBurgerCartFetchSuccessParam } from "../../interaces/IParams";

export const burgerCartFetch = (): BurgerCartActions => ({ type: BURGER_CART_FETCH });
export const burgerCartFetchSuccess = (param: IBurgerCartFetchSuccessParam): BurgerCartActions => ({ type: BURGER_CART_FETCH_SUCCESS, cart: param });
export const burgerCartFetchFailed = (error: any): BurgerCartActions => ({ type: BURGER_CART_FETCH_FAILED, error: error });