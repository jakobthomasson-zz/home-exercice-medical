import {
  all,
  takeLatest,
  fork,
  select,
  call,
  put,
  delay,
} from "redux-saga/effects";
import * as R from "remeda";

import { ActionType } from "typesafe-actions";
import { appActions, appConstants } from "store/app";
import { statusActions } from "store/status";
import { patientHelpers } from "store/patient";
import { testResultHelpers } from "store/testResult";

import { fileHelpers, parserHelpers } from "helpers";
import "data/data.txt";
function* initializeSaga() {
  try {
    yield put(
      statusActions.setRequestStatus({
        request: "initilized",
        status: "loading",
      })
    );

    yield delay(1000); // simulate loading

    const text: string = yield call(fileHelpers.readTextFile, [
      "data",
      "data.txt",
    ]);

    const rawItems: Diaverum.RawItem[] = parserHelpers.parseText(text);

    yield call(patientHelpers.setDomainFromRawItems, rawItems);
    yield call(testResultHelpers.setDomainFromRawItems, rawItems);
  } catch (error) {
    yield put(
      statusActions.setRequestStatus({
        request: "initilized",
        status: "error",
      })
    );
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
