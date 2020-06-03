import { combineReducers } from "redux";
import { patientReducer } from "store/patient";
import { statusReducer } from "store/status";
import { testResultReducer } from "store/testResult";

const rootReducer = combineReducers({
  patientData: patientReducer,
  testResultData: testResultReducer,
  statusCommunication: statusReducer,
});

export default rootReducer;
