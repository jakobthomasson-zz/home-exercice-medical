import { createAction } from "typesafe-actions";
import { SET_REQUEST_STATUS } from "./constants";

export const setRequestStatus = createAction(
  SET_REQUEST_STATUS,
  (payload: { request: System.RequestType; status: System.RequestStatus }) =>
    payload
)();
