import { createSelector } from "reselect";
import * as R from "remeda";
import Types from "Types";

export const domain = (state: Types.RootState) => state.testResultData;

export const byId = (state: Types.RootState) => state.testResultData.byId;
export const allIds = (state: Types.RootState) => state.testResultData.allIds;

export const allItems = createSelector(byId, allIds, (byId, allIds) => {
  return allIds.map((id) => byId[id]);
});

export const item = createSelector(
  (state: Types.RootState, ownProps: { testResultId: string }) =>
    ownProps.testResultId,
  byId,
  (testResultId, byId) => R.pipe(byId, R.prop(testResultId))
);
