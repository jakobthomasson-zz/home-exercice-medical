import { put, delay } from "redux-saga/effects";
import { testResultActions } from "store/testResult";
import * as R from "remeda";
import { utilityHelpers, domainHelpers } from "helpers";

function getOptionalStringValue(valueString: string) {
  const isEmpty = utilityHelpers.isEmpty(valueString);

  if (isEmpty) return undefined;
  return valueString;
}

function getOptionalNumberValue(valueString: string) {
  const isEmpty = utilityHelpers.isEmpty(valueString);
  if (isEmpty) return undefined;

  const returnValue = Number(valueString);
  if (isNaN(returnValue)) return undefined;

  return returnValue;
}

function* setDomainFromRawItems(rawItems: Diaverum.RawItem[]) {
  yield delay(100);
  const domain: System.NormalizedDomain<Diaverum.TestResult> = {
    allIds: [],
    byId: {},
  };

  const testResults = rawItems.map((rawItem) => {
    const {
      barcode,
      clinicNo,
      collectionDate,
      collectionTime,
      patientId,
      testCode,
      testName,
      result,
      unit,
      refrangeLow,
      refrangeHigh,
      note,
      nonSpecRefs,
    } = rawItem;

    const collectionTimestamp = new Date(
      `${collectionDate} ${collectionTime}`
    ).getTime();

    const testResult: Diaverum.TestResult = {
      id: barcode,
      barcode: Number(barcode),
      clinicId: clinicNo,
      patientId,
      collectionTimestamp,
      testCode,
      testName,
      result: result as Diaverum.ResultType,
      unit: utilityHelpers.isEmpty(unit) ? undefined : unit,
      refrangeLow: getOptionalNumberValue(refrangeLow),
      refrangeHigh: getOptionalNumberValue(refrangeHigh),
      note: getOptionalStringValue(note),
      nonSpecRefs: getOptionalStringValue(nonSpecRefs),
    };
    return testResult;
  });

  const byId = R.indexBy(testResults, R.prop("id"));
  const allIds = Object.keys(byId);
  yield put(testResultActions.setDomain({ byId, allIds }));
}

export { setDomainFromRawItems };
