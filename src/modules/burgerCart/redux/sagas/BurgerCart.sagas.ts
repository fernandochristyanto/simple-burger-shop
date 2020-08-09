import { BurgerCartActions } from "../../interaces";
import { put, takeLatest } from "redux-saga/effects";
import { burgerCartFetchFailed, burgerCartFetchSuccess } from "../actions";
import { BURGER_CART_FETCH } from "../../contants";
import mockAPIRequest from "../../../../mockAPIRequest";

function* workerSagaBurgerCartFetch(action: BurgerCartActions) {
  try {
    if (action.type === BURGER_CART_FETCH) {
      console.log('MASUK SAGAA');
      const response = yield mockAPIRequest('cart', {});

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
