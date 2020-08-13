import { IBurgerCart, ICartItem, IBurgerBuilder } from "../../../interfaces";

export declare interface IBurgerCartFetchSuccessParam extends IBurgerCart { }

export declare interface ICartItemSetQtyParam {
  ingredients: string
  qty: number
}

export declare interface ICartItemSetQtySuccessParam {
  item: ICartItem
}

export declare interface ICartAddItemParam {
  burger: IBurgerBuilder
}
