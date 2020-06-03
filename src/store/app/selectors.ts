import { createSelector } from "reselect";
import Types from "Types";
import * as R from "remeda";

export const searchPatientIds = (state: Types.RootState) =>
  state.app.searchPatientIds;
