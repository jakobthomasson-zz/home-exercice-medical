import { all, takeLatest, fork, select, call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { appActions, appConstants } from "store/app";
import { statusActions } from "store/status";

function* initializeSaga() {
  try {
    yield put(
      statusActions.setRequestStatus({
        request: "initilized",
        status: "loading",
      })
    );
  } catch (error) {
    yield put(
      statusActions.setRequestStatus({
        request: "initilized",
        status: "error",
      })
    );
    console.log(error);
  } finally {
    yield put(
      statusActions.setRequestStatus({
        request: "initilized",
        status: "done",
      })
    );
  }
}

function* startSaveSaga(action: ActionType<typeof appActions.startSave>) {
  try {
    yield put(
      statusActions.setRequestStatus({
        request: "save",
        status: "loading",
      })
    );
  } catch (error) {
    yield put(
      statusActions.setRequestStatus({
        request: "save",
        status: "error",
      })
    );
    console.log(error);
  } finally {
    yield put(
      statusActions.setRequestStatus({
        request: "save",
        status: "done",
      })
    );
  }
}
export function* watcher() {
  yield fork(initializeSaga);
  yield all([yield takeLatest(appConstants.START_SAVE, startSaveSaga)]);
}
