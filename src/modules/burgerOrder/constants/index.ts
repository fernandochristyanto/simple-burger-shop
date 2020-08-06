import { IDefaultState, IBurgerBuilder } from "../../../interfaces";
import initialDefaultState from "../../../constants/InitialDefaultState";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const RESET_INGREDIENT = "RESET_INGREDIENT";
export const SET_INGREDIENTS = "SET_INGREDIENTS";

export const initialBurgerBuilderState: IDefaultState<IBurgerBuilder> = {
  ...initialDefaultState,
  res: {
    ingredients: '',
  }
}
