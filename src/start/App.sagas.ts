import { all } from 'redux-saga/effects'

import { reduxSaga } from "../config";

export default function* appSaga() {
  if (reduxSaga) yield all(reduxSaga);
};
