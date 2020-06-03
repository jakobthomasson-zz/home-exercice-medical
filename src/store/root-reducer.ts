import { combineReducers } from "redux";
import { patientReducer } from "store/patient";
import { statusReducer } from "store/status";
import { testResultReducer } from "store/testResult";
import { appReducer } from "store/app";

const rootReducer = combineReducers({
  patientData: patientReducer,
  testResultData: testResultReducer,
  statusCommunication: statusReducer,
  app: appReducer,
});

export default rootReducer;
