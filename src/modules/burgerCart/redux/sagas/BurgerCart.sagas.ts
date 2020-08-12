import { BurgerCartActions } from "../../interfaces";
import { put, takeLatest, call } from "redux-saga/effects";
import { burgerCartFetchFailed, burgerCartFetchSuccess, cartItemSetQtyFailed, cartItemSetQtySuccess, cartAddItemFailed } from "../actions";
import { BURGER_CART_FETCH, CART_ITEM_SET_QTY, CART_ADD_ITEM } from "../../contants";
import mockAPIRequest from "../../../../mockAPIRequest";
import { ICartItem, IBurgerBuilder } from "../../../../interfaces";
import { countBurgerPrice } from "../../../../utilities";
import { countItemPrice } from "../../../../utilities/BurgerCartUtil";
import { HttpService, testAPIRequest } from "../../../../testAPIRequest";

function* workerSagaBurgerCartFetch(action: BurgerCartActions) {
  try {
    if (action.type === BURGER_CART_FETCH) {
      yield console.log('saga')
      // const response = yield mockAPIRequest('cart', { username: action.username }); // ini yang tidak getStore
      const response = yield call(HttpService.get, 'cart'); // ini yang getStore dan tidak bisa
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

function* workerSagaCartAddItem(action: BurgerCartActions) {
  try {
    if (action.type === CART_ADD_ITEM) {

    }
  }
  catch (error) {
    yield put(cartAddItemFailed(error))
  }
}

export const watcherBurgerCart = [
  takeLatest(BURGER_CART_FETCH, workerSagaBurgerCartFetch),
  takeLatest(CART_ITEM_SET_QTY, workerSagaCartItemSetQty),
];
