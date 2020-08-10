import { BurgerCartActions } from "../../interfaces";
import { put, takeLatest } from "redux-saga/effects";
import { burgerCartFetchFailed, burgerCartFetchSuccess, cartItemSetQtyFailed, cartItemSetQtySuccess } from "../actions";
import { BURGER_CART_FETCH, CART_ITEM_SET_QTY } from "../../contants";
import mockAPIRequest from "../../../../mockAPIRequest";
import { ICartItem, IBurgerBuilder } from "../../../../interfaces";
import { countBurgerPrice } from "../../../../utilities";
import { countItemPrice } from "../../../../utilities/BurgerCartUtil";

function* workerSagaBurgerCartFetch(action: BurgerCartActions) {
  try {
    if (action.type === BURGER_CART_FETCH) {
      const response = yield mockAPIRequest('cart', { username: action.username });
      if (response.status !== 200) throw new Error('Error');

      yield put(burgerCartFetchSuccess(response.res));
    }
  }
  catch (error) {
    yield put(burgerCartFetchFailed(error));
  }
}

function* workerSagaCartItemSetQty(action: BurgerCartActions) {
  try {
    if (action.type === CART_ITEM_SET_QTY) {
      const burger: IBurgerBuilder = {
        ingredients: action.ingredients,
        price: countBurgerPrice(action.ingredients)
      };
      const item: ICartItem = {
        burger: burger,
        itemPrice: countItemPrice(burger.price, action.qty),
        quantity: action.qty,
      }
      yield put(cartItemSetQtySuccess({ item: item }))
    }
  }
  catch (error) {
    yield put(cartItemSetQtyFailed(error));
  }
}

export const watcherBurgerCart = [
  takeLatest(BURGER_CART_FETCH, workerSagaBurgerCartFetch),
  takeLatest(CART_ITEM_SET_QTY, workerSagaCartItemSetQty),
];
