import { createAction } from "typesafe-actions";
import { ADD, UPDATE, REMOVE, SET, SET_DOMAIN } from "./constants";

export const add = createAction(
  ADD,
  (payload: Diaverum.TestResult) => payload
)();
export const update = createAction(
  UPDATE,
  (payload: PartialWithId<Diaverum.TestResult>) => payload
)();

export const remove = createAction(REMOVE, (payload: string) => payload)();

export const set = createAction(
  SET,
  (payload: Diaverum.TestResult) => payload
)();

export const setDomain = createAction(
  SET_DOMAIN,
  (payload: System.NormalizedDomain<Diaverum.TestResult>) => payload
)();
