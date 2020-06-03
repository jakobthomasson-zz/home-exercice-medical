import { ActionType } from "typesafe-actions";
import * as appConstants from "./constants";
import * as appActions from "./actions";
import * as appSagas from "./sagas";
import appReducer from "./reducer";
import * as appSelectors from "./selectors";

export type AppAction = ActionType<typeof appActions>;

export type AppState = {
  searchPatientIds: string[];
};

export { appConstants, appActions, appSagas, appReducer, appSelectors };
