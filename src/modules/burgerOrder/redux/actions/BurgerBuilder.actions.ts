import { IDefaultAction } from "../../../../interfaces";
import { ADD_INGREDIENT, REMOVE_INGREDIENT, RESET_INGREDIENT } from "../../constants";

export const addIngredient = (ingredients: string): IDefaultAction => { console.log('ACTION: ' + ingredients); return ({ type: ADD_INGREDIENT, data: { ingredients: ingredients } }) };
export const removeIngredient = (): IDefaultAction => ({ type: REMOVE_INGREDIENT });
export const resetIngredient = (): IDefaultAction => ({ type: RESET_INGREDIENT });
