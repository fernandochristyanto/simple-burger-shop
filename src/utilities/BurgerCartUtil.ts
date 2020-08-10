import { ICartItem } from "../interfaces";

export const countTotalPrice = (items: ICartItem[]): number => {
  return +items.reduce((price, item) => price += item.itemPrice, 0).toFixed(2);
}

export const countItemPrice = (burgerPrice: number, quantity: number): number => {
  return +(burgerPrice * quantity).toFixed(2);
}
