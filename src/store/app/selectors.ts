import Types from "Types";
import { createSelector } from "reselect";
import { patientSelectors } from "store/patient";
import * as R from "remeda";
export const searchPatientIds = (state: Types.RootState) =>
  state.app.searchPatientIds;

export const selectedPatientId = (state: Types.RootState) =>
  state.app.selectedPatientId;

export const selectedPatient = createSelector(
  selectedPatientId,
  patientSelectors.byId,
  (patientId, patientById) =>
    patientId ? R.pipe(patientById, R.prop(patientId)) : null
);
