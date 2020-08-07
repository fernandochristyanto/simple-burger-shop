import { ADD_INGREDIENT, REMOVE_INGREDIENT, RESET_INGREDIENT, SET_INGREDIENTS } from "../../constants";
import { BurgerBuilderActions } from "../../interfaces";

export const addIngredient = (ingredient: string): BurgerBuilderActions => ({ type: ADD_INGREDIENT, ingredient: ingredient });
export const removeIngredient = (index: number): BurgerBuilderActions => ({ type: REMOVE_INGREDIENT, index: index });
export const resetIngredient = (): BurgerBuilderActions => ({ type: RESET_INGREDIENT });
export const setIngredients = (ingredients: string): BurgerBuilderActions => ({ type: SET_INGREDIENTS, ingredients: ingredients });
