import { StateType } from "typesafe-actions";
import rootReducer from "store/root-reducer";

import { AppAction } from "store/app";
import { StatusAction } from "store/status";
import { PatientAction } from "store/patient";
import { TestResultAction } from "store/testResult";

declare module "Types" {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction =
    | AppAction
    | StatusAction
    | PatientAction
    | TestResultAction;
}
