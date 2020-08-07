import { DEFAULT_PRICE, ingredientPrices } from "../constants"

export const countBurgerPrice = (ingredients: string): number => {
  let burgerPrice = DEFAULT_PRICE;
  ingredients.split('').forEach((ingredient) => {
    burgerPrice += ingredientPrices[ingredient];
  })

  return +burgerPrice.toFixed(2);
}