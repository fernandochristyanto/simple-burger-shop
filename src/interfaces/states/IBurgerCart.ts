import { IBurgerBuilder } from "./IBurgerBuilder";

export declare interface IBurgerCart {
  items: ICartItem[]
  totalPrice: number
}

export declare interface ICartItem {
  burger: IBurgerBuilder
  quantity: number
  itemPrice: number
}
