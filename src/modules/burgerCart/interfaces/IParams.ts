import { IBurgerCart, ICartItem } from "../../../interfaces";

export declare interface IBurgerCartFetchParam {
  username: string
}

export declare interface IBurgerCartFetchSuccessParam extends IBurgerCart { }

export declare interface ICartItemSetQtyParam {
  ingredients: string
  qty: number
}

export declare interface ICartItemSetQtySuccessParam {
  item: ICartItem
}
