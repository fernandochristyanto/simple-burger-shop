import { BurgerCartActions } from "../../interfaces";
import { BURGER_CART_FETCH, BURGER_CART_FETCH_SUCCESS, BURGER_CART_FETCH_FAILED } from "../../contants";
import { IBurgerCartFetchSuccessParam, IBurgerCartFetchParam } from "../../interfaces/IParams";

export const burgerCartFetch = (param: IBurgerCartFetchParam): BurgerCartActions => ({ type: BURGER_CART_FETCH, username: param.username });
export const burgerCartFetchSuccess = (param: IBurgerCartFetchSuccessParam): BurgerCartActions => ({ type: BURGER_CART_FETCH_SUCCESS, cart: param });
export const burgerCartFetchFailed = (error: any): BurgerCartActions => ({ type: BURGER_CART_FETCH_FAILED, error: error });