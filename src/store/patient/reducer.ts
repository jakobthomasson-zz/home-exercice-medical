/* eslint-disable no-case-declarations */
import { getType } from "typesafe-actions";
import {
  PatientAction,
  PatientState,
  patientActions as actions,
} from "store/patient";
import { domainHelpers } from "helpers";

const initialState: PatientState = { allIds: [], byId: {} };

export default (
  state: PatientState = initialState,
  action: PatientAction
): PatientState => {
  switch (action.type) {
    case getType(actions.add):
      return domainHelpers.add(state, action.payload);
    case getType(actions.set):
      return domainHelpers.set(state, action.payload);
    case getType(actions.update):
      return domainHelpers.update(state, action.payload);
    case getType(actions.remove):
      return domainHelpers.remove(state, action.payload);
    case getType(actions.setDomain):
      const { allIds, byId } = action.payload;
      return { allIds, byId };
    default:
      return state;
  }
};
