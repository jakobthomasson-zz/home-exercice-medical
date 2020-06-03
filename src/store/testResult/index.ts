import { ActionType } from "typesafe-actions";
import * as testResultConstants from "./constants";
import * as testResultActions from "./actions";
import * as testResultSelectors from "./selectors";
import testResultReducer from "./reducer";

export type TestResultAction = ActionType<typeof testResultActions>;

export type TestResultState = System.NormalizedDomain<Diaverum.TestResult>;

export {
  testResultConstants,
  testResultActions,
  testResultReducer,
  testResultSelectors,
};
