import { ADD_INGREDIENT, RESET_INGREDIENT, SET_INGREDIENTS, REMOVE_INGREDIENT } from "../constants";

declare interface IAddIngredientAction {
  type: typeof ADD_INGREDIENT
  ingredient: string
}

declare interface IResetIngredientAction {
  type: typeof RESET_INGREDIENT
}

declare interface ISetIngredientAction {
  type: typeof SET_INGREDIENTS
  ingredients: string
}

declare interface IRemoveIngredientAction {
  type: typeof REMOVE_INGREDIENT
  index: number
}

export type BurgerBuilderActions = IAddIngredientAction | IResetIngredientAction | ISetIngredientAction | IRemoveIngredientAction;
