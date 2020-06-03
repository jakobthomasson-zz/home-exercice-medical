import { put } from "redux-saga/effects";
import { patientActions } from "store/patient";
import * as R from "remeda";

function* setDomainFromRawItems(rawItems: Diaverum.RawItem[]) {
  const rawItemByPatientId = R.pipe(rawItems, R.groupBy(R.prop("patientId")));

  let allIds = Object.keys(rawItemByPatientId);
  let byId: Record<string, Diaverum.Patient> = {};

  // cleanup operation if something is fishy
  const cleanUp = (cleanUpId: string) => {
    allIds = R.reject(allIds, (id) => id === cleanUpId);
  };

  R.forEachObj.indexed(rawItemByPatientId, (val, key) => {
    const testIds = R.map(val, R.prop("barcode"));
    const patientInfo = R.last(val);

    // can't happen
    if (!patientInfo) return cleanUp(key);

    const { dob, gender, patientId, patientName } = patientInfo;

    // valid date check
    const dobTimestamp = new Date(dob).getTime();
    if (isNaN(dobTimestamp)) return cleanUp(key);

    const patient: Diaverum.Patient = {
      id: patientId,
      name: patientName,
      gender: gender as Diaverum.Gender,
      dobTimestamp,
      testIds,
    };

    byId = R.addProp(byId, key, patient);
  });

  yield put(patientActions.setDomain({ byId, allIds }));
}

export { setDomainFromRawItems };
