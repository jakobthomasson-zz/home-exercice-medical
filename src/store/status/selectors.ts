import Types from "Types";

export const requestStatus = (
  state: Types.RootState,
  request: System.RequestType
) => state.statusCommunication[request];
