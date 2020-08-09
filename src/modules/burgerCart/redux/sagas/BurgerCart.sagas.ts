import { BurgerCartActions } from "../../interfaces";
import { put, takeLatest } from "redux-saga/effects";
import { burgerCartFetchFailed, burgerCartFetchSuccess } from "../actions";
import { BURGER_CART_FETCH } from "../../contants";
import mockAPIRequest from "../../../../mockAPIRequest";

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

export const watcherBurgerCart = [
  takeLatest(BURGER_CART_FETCH, workerSagaBurgerCartFetch),
];
