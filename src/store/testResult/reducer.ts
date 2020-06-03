/* eslint-disable no-case-declarations */
import { getType } from "typesafe-actions";
import {
  TestResultAction,
  TestResultState,
  testResultActions as actions,
} from "store/testResult";
import { domainHelpers } from "helpers";

const initialState: TestResultState = { allIds: [], byId: {} };

export default (
  state: TestResultState = initialState,
  action: TestResultAction
): TestResultState => {
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
