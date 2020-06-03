import Types from "Types";

// export const dummy = (state: Types.RootState) => state.domain...;'
export const requestStatus = (
  state: Types.RootState,
  request: System.RequestType
) => state.statusCommunication[request];
