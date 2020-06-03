/* eslint-disable no-case-declarations */
import { getType } from "typesafe-actions";
import { AppAction, AppState, appActions as actions } from "store/app";
import { domainHelpers } from "helpers";

const initialState: AppState = { searchPatientIds: [] };

export default (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case getType(actions.setSearchPatientIds):
      return { ...state, searchPatientIds: action.payload };
    default:
      return state;
  }
};
