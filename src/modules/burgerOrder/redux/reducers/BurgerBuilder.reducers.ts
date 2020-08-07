import { IDefaultState, IBurgerBuilder } from "../../../../interfaces";
import { ADD_INGREDIENT, RESET_INGREDIENT, initialBurgerBuilderState, SET_INGREDIENTS } from "../../constants";
import { BurgerBuilderActions } from "../../interfaces";

export const burgerBuilderReducer = (
  state: IDefaultState<IBurgerBuilder> = initialBurgerBuilderState,
  action: BurgerBuilderActions,
): IDefaultState<IBurgerBuilder> => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        action: action.type,
        fetch: false,
        err: null,
        res: { ...state.res, ingredients: state.res?.ingredients.concat(action.ingredient) ?? '' },
      };

    case RESET_INGREDIENT:
      return {
        ...state,
        action: action.type,
        fetch: false,
        err: null,
        res: { ...state.res, ingredients: '' },
      };

    case SET_INGREDIENTS:
      return {
        ...state,
        action: action.type,
        fetch: false,
        err: null,
        res: { ...state.res, ingredients: action.ingredients },
      };

    default:
      return state;
  }
}