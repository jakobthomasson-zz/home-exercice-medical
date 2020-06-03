import { all, spawn } from "redux-saga/effects";
import { appSagas } from "store/app";

export function* rootSaga() {
  return yield all([spawn(appSagas.watcher)]);
}
