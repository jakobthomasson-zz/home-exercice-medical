/* eslint-disable no-case-declarations */
import { getType } from "typesafe-actions";
import { AppAction, AppState, appActions as actions } from "store/app";

const initialState: AppState = {
  searchPatientIds: [],
  selectedPatientId: null,
};

export default (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case getType(actions.setSearchPatientIds):
      return { ...state, searchPatientIds: action.payload };
    case getType(actions.setSelectedPatientId):
      return { ...state, selectedPatientId: action.payload };
    default:
      return state;
  }
};
