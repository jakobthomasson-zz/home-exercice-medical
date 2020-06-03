import { createSelector } from "reselect";
import * as R from "remeda";
import Types from "Types";

export const domain = (state: Types.RootState) => state.patientData;

export const byId = (state: Types.RootState) => state.patientData.byId;
export const allIds = (state: Types.RootState) => state.patientData.allIds;

export const allItems = createSelector(byId, allIds, (byId, allIds) => {
  return allIds.map((id) => byId[id]);
});

export const item = createSelector(
  (state: Types.RootState, ownProps: { patientId: string }) =>
    ownProps.patientId,
  byId,
  (patientId, byId) => R.pipe(byId, R.prop(patientId))
);
