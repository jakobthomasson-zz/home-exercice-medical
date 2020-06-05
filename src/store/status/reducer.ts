import { getType } from "typesafe-actions";
import { StatusAction, StatusState, statusActions as actions } from ".";
import * as R from "remeda";
const initialState: StatusState = {
  initilized: "unstarted",
  select_patient: "unstarted",
  searching: "unstarted",
};

export default (
  state: StatusState = initialState,
  action: StatusAction
): StatusState => {
  switch (action.type) {
    case getType(actions.setRequestStatus):
      const { request, status } = action.payload;
      return R.set(state, request, status);
    default:
      return state;
  }
};
