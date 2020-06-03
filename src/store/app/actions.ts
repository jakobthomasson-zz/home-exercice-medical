import { createAction, createCustomAction } from "typesafe-actions";
import {
  START_SAVE,
  START_SEARCH,
  SET_SEARCH_PATIENT_IDS,
  SET_SELECTED_PATIENT_ID,
} from "./constants";

export const startSave = createCustomAction(START_SAVE)();

export const startSearch = createAction(
  START_SEARCH,
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
