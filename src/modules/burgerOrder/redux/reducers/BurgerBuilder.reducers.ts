import { IDefaultState, IBurgerBuilder } from "../../../../interfaces";
import { ADD_INGREDIENT, RESET_INGREDIENT, initialBurgerBuilderState, SET_INGREDIENTS, REMOVE_INGREDIENT } from "../../constants";
import { BurgerBuilderActions } from "../../interfaces";
import { DEFAULT_PRICE } from "../../../../constants";
import { countBurgerPrice } from "../../../../utilities";

const addIngredient = (state: IDefaultState<IBurgerBuilder>, action: BurgerBuilderActions): IDefaultState<IBurgerBuilder> => {
  if (action.type === ADD_INGREDIENT) {
    const ingredients = state.res?.ingredients.concat(action.ingredient) ?? '';
    const price = countBurgerPrice(ingredients);

    return {
      ...state,
      action: action.type,
      fetch: false,
      err: null,
      res: { ...state.res, ingredients: ingredients, price: price }
    };
  }
  return state;
}

const resetIngredient = (state: IDefaultState<IBurgerBuilder>, action: BurgerBuilderActions): IDefaultState<IBurgerBuilder> => {
  if (action.type === RESET_INGREDIENT) {
    return {
      ...state,
      action: action.type,
      fetch: false,
      err: null,
      res: { ...state.res, ingredients: '', price: DEFAULT_PRICE }
    };
  }
  return state;
}

const setIngredients = (state: IDefaultState<IBurgerBuilder>, action: BurgerBuilderActions): IDefaultState<IBurgerBuilder> => {
  if (action.type === SET_INGREDIENTS) {
    return {
      ...state,
      action: action.type,
      fetch: false,
      err: null,
      res: { ...state.res, ingredients: action.ingredients, price: action.price }
    };
  }
  return state;
}

const removeIngredient = (state: IDefaultState<IBurgerBuilder>, action: BurgerBuilderActions): IDefaultState<IBurgerBuilder> => {
  if (action.type === REMOVE_INGREDIENT) {
    const ingredients = state.res?.ingredients.slice(0, action.index).concat(state.res.ingredients.slice(action.index + 1)) ?? '';
    const price = countBurgerPrice(ingredients);
    return {
      ...state,
      action: action.type,
      fetch: false,
      err: null,
      res: { ...state.res, ingredients: ingredients, price: price }
    }
  }
  return state;
}

export const burgerBuilderReducer = (
  state: IDefaultState<IBurgerBuilder> = initialBurgerBuilderState,
  action: BurgerBuilderActions,
): IDefaultState<IBurgerBuilder> => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredient(state, action);

    case RESET_INGREDIENT:
      return resetIngredient(state, action);

    case SET_INGREDIENTS:
      return setIngredients(state, action);

    case REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    default:
      return state;
  }
}