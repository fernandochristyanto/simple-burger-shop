import { ADD_INGREDIENT, REMOVE_INGREDIENT, RESET_INGREDIENT, SET_INGREDIENTS } from "../../constants";
import { BurgerBuilderActions } from "../../interfaces";

export const addIngredient = (ingredient: string): BurgerBuilderActions => ({ type: ADD_INGREDIENT, ingredient: ingredient });
export const removeIngredient = (index: number, ingredient: string): BurgerBuilderActions => ({ type: REMOVE_INGREDIENT, index: index, ingredient: ingredient });
export const resetIngredient = (): BurgerBuilderActions => ({ type: RESET_INGREDIENT });
export const setIngredients = (ingredients: string, price: number): BurgerBuilderActions => ({ type: SET_INGREDIENTS, ingredients: ingredients, price: price });
