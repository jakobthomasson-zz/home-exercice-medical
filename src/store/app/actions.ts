import { createAction } from "typesafe-actions";
import {
  START_SEARCH,
  SET_SEARCH_PATIENT_IDS,
  SET_SELECTED_PATIENT_ID,
  START_SELECT,
} from "./constants";

export const startSearch = createAction(
  START_SEARCH,
  (payload: string) => payload
)();

export const startSelect = createAction(
  START_SELECT,
  (payload: string) => payload
)();

export const setSearchPatientIds = createAction(
  SET_SEARCH_PATIENT_IDS,
  (payload: string[]) => payload
)();

export const setSelectedPatientId = createAction(
  SET_SELECTED_PATIENT_ID,
  (payload: string) => payload
)();
