import { ActionType } from "typesafe-actions";
import * as appConstants from "./constants";
import * as appActions from "./actions";
import * as appSagas from "./sagas";

export type AppAction = ActionType<typeof appActions>;

export type AppState = {};

export { appConstants, appActions, appSagas };
