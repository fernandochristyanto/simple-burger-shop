import { BurgerCartActions } from "../../interfaces";
import { put, takeLatest, select, takeEvery } from "redux-saga/effects";
import {
  burgerCartFetchFailed, burgerCartFetchSuccess,
  cartItemSetQtyFailed, cartItemSetQtySuccess, cartAddItemFailed, cartAddItemSuccess
} from "../actions";
import { BURGER_CART_FETCH, CART_ITEM_SET_QTY, CART_ADD_ITEM } from "../../contants";
import mockAPIRequest from "../../../../mockAPIRequest";
import { ICartItem, IBurgerBuilder } from "../../../../interfaces";
import { countBurgerPrice } from "../../../../utilities";
import { countItemPrice } from "../../../../utilities/BurgerCartUtil";

const auth = (state: any) => state.auth;

function* workerSagaBurgerCartFetch(action: BurgerCartActions) {
  try {
    if (action.type === BURGER_CART_FETCH) {
      const { username } = yield select(auth) ?? {};
      const response = yield mockAPIRequest('Cart', { username: username });
      if (response.status !== 200) throw new Error('Error');

      yield put(burgerCartFetchSuccess(response.res));
    }
  }
  catch (error) {
    console.log(error)
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
      yield put(cartItemSetQtySuccess({ item: item }));
    }
  }
  catch (error) {
    yield put(cartItemSetQtyFailed(error));
  }
}

function* workerSagaCartAddItem(action: BurgerCartActions) {
  try {
    if (action.type === CART_ADD_ITEM) {
      const { username } = yield select(auth);
      const response = yield mockAPIRequest('Cart/AddItem', { username: username, burger: action.burger })

      if (response.status !== 200) throw Error('error');
      yield put(cartAddItemSuccess());
    }
  }
  catch (error) {
    yield put(cartAddItemFailed(error));
  }
}

export const watcherBurgerCart = [
  takeLatest(BURGER_CART_FETCH, workerSagaBurgerCartFetch),
  takeLatest(CART_ITEM_SET_QTY, workerSagaCartItemSetQty),
  takeEvery(CART_ADD_ITEM, workerSagaCartAddItem),
];
