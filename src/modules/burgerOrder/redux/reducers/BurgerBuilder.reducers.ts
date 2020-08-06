import { IDefaultState, IBurgerBuilder, IDefaultAction } from "../../../../interfaces";
import initialDefaultAction from "../../../../constants/InitialDefaultAction";
import { ADD_INGREDIENT, RESET_INGREDIENT, initialBurgerBuilderState, SET_INGREDIENTS } from "../../constants";

export const burgerBuilderReducer = (
  state: IDefaultState<IBurgerBuilder> = initialBurgerBuilderState,
  action: IDefaultAction<IBurgerBuilder> = initialDefaultAction,
): IDefaultState<IBurgerBuilder> => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        action: action.type,
        fetch: false,
        err: null,
        res: { ...state.res, ingredients: state.res?.ingredients.concat(action.data?.ingredients ?? '') ?? '' },
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
        res: { ...state.res, ingredients: action.data?.ingredients ?? '' },
      };

    default:
      return state;
  }
}