import Types from "Types";

export const searchPatientIds = (state: Types.RootState) =>
  state.app.searchPatientIds;

export const selectedPatientId = (state: Types.RootState) =>
  state.app.selectedPatientId;
