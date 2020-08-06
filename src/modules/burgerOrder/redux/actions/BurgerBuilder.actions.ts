import { IDefaultAction } from "../../../../interfaces";
import { ADD_INGREDIENT, REMOVE_INGREDIENT, RESET_INGREDIENT, SET_INGREDIENTS } from "../../constants";

export const addIngredient = (ingredients: string): IDefaultAction => ({ type: ADD_INGREDIENT, data: { ingredients: ingredients } });
export const removeIngredient = (): IDefaultAction => ({ type: REMOVE_INGREDIENT });
export const resetIngredient = (): IDefaultAction => ({ type: RESET_INGREDIENT });
export const setIngredients = (ingredients: string): IDefaultAction => ({ type: SET_INGREDIENTS, data: { ingredients: ingredients } });
