import { IDefaultState, IBurgerCart } from "../../../../interfaces";
import { initialBurgerCartState, BURGER_CART_FETCH, BURGER_CART_FETCH_SUCCESS, BURGER_CART_FETCH_FAILED } from "../../contants";
import { BurgerCartActions } from "../../interfaces";

export const burgerCartReducer = (
  state: IDefaultState<IBurgerCart> = initialBurgerCartState,
  action: BurgerCartActions,
): IDefaultState<IBurgerCart> => {
  switch (action.type) {
    case BURGER_CART_FETCH:
      return {
        ...state,
        action: action.type,
        fetch: true,
        err: null,
        res: null,
      };

    case BURGER_CART_FETCH_SUCCESS:
      return {
        ...state,
        action: action.type,
        fetch: false,
        err: null,
        res: action.cart,
      };

    case BURGER_CART_FETCH_FAILED:
      return {
        ...state,
        action: action.type,
        fetch: false,
        res: null,
        err: action.error,
      }

    default:
      return state;
  }
}