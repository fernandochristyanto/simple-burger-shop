import { takeLatest, put } from "redux-saga/effects";
import { DO_LOGIN } from "../../constants";
import { AuthActions } from "../../interfaces";
import { doLoginSuccess, doLoginFailed } from "../actions";
import mockAPIRequest from "../../../../mockAPIRequest";

function* workerSagaDoLogin(action: AuthActions) {
  try {
    if (action.type === DO_LOGIN) {
      const { username, password } = action.data;
      const response = yield mockAPIRequest('auth', { username, password });

      if (response.status !== 200) throw new Error('User not Found!');

      yield put(doLoginSuccess(response.res));
    }
  } catch (error) {
    yield put(doLoginFailed(error.message));
  }
};

export const watcherAuth = [
  takeLatest(DO_LOGIN, workerSagaDoLogin),
];
