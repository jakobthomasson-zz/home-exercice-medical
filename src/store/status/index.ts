import { ActionType } from 'typesafe-actions';
import * as statusConstants from './constants';
import * as statusActions from './actions';
import * as statusSelectors from './selectors';
import statusReducer from './reducer';

export type StatusAction = ActionType<typeof statusActions>;

export type StatusState = Record<System.RequestType, System.RequestStatus>;

export { statusConstants, statusActions, statusReducer, statusSelectors };
