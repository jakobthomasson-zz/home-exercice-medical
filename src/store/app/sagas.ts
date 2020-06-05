import {
  all,
  takeLatest,
  fork,
  select,
  call,
  put,
  delay,
} from "redux-saga/effects";

import { ActionType } from "typesafe-actions";
import { appActions, appConstants } from "store/app";
import { statusActions } from "store/status";
import { patientHelpers, patientSelectors } from "store/patient";
import { testResultHelpers } from "store/testResult";

import Fuse from "fuse.js";
import { fileHelpers, parserHelpers, utilityHelpers } from "helpers";
import "data/data.txt";
function* initializeSaga() {
  try {
    yield put(
      statusActions.setRequestStatus({
        request: "initilized",
        status: "loading",
      })
    );

    // yield delay(100); // simulate loading

    const text: string = yield call(fileHelpers.readTextFile, [
      "data",
      "data.txt",
    ]);

    const rawItems: Diaverum.RawItem[] = parserHelpers.parseText(text);

    yield call(patientHelpers.setDomainFromRawItems, rawItems);
    yield call(testResultHelpers.setDomainFromRawItems, rawItems);

    const allPatientIds: string[] = yield select(patientSelectors.allIds);
    yield put(appActions.setSearchPatientIds(allPatientIds));
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

function* startSearchSaga(action: ActionType<typeof appActions.startSearch>) {
  try {
    yield put(
      statusActions.setRequestStatus({
        request: "searching",
        status: "loading",
      })
    );
    yield delay(200);
    const search = action.payload;
    if (utilityHelpers.isEmpty(search)) {
      const allPatientIds: string[] = yield select(patientSelectors.allIds);
      yield put(appActions.setSearchPatientIds(allPatientIds));
      return;
    }
    const items: Diaverum.Patient[] = yield select(patientSelectors.allItems);
    const options: Fuse.IFuseOptions<Diaverum.Patient> = {
      keys: [
        { name: "name", weight: 1 },
        { name: "id", weight: 2 },
      ],
      shouldSort: true,
      threshold: 0.2,
    };
    const fuse = new Fuse(items, options);
    const searchResultIds = fuse
      .search(search)
      .map((fuseResultItem) => fuseResultItem.item.id);
    yield put(appActions.setSearchPatientIds(searchResultIds));
  } catch (error) {
    yield put(
      statusActions.setRequestStatus({
        request: "searching",
        status: "error",
      })
    );
    console.log(error);
  } finally {
    yield put(
      statusActions.setRequestStatus({
        request: "searching",
        status: "done",
      })
    );
  }
}

function* startSelectSaga(action: ActionType<typeof appActions.startSelect>) {
  try {
    yield put(
      statusActions.setRequestStatus({
        request: "select_patient",
        status: "loading",
      })
    );

    const patientId = action.payload;
    yield put(appActions.setSelectedPatientId(patientId));

    yield delay(200);
  } catch (error) {
    yield put(
      statusActions.setRequestStatus({
        request: "select_patient",
        status: "error",
      })
    );
    console.log(error);
  } finally {
    yield put(
      statusActions.setRequestStatus({
        request: "select_patient",
        status: "done",
      })
    );
  }
}

export function* watcher() {
  yield fork(initializeSaga);
  yield all([
    yield takeLatest(appConstants.START_SEARCH, startSearchSaga),
    yield takeLatest(appConstants.START_SELECT, startSelectSaga),
  ]);
}
