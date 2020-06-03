import { createAction } from "typesafe-actions";
import { ADD, UPDATE, REMOVE, SET, SET_DOMAIN } from "./constants";

export const add = createAction(ADD, (payload: Diaverum.Patient) => payload)();
export const update = createAction(
  UPDATE,
  (payload: PartialWithId<Diaverum.Patient>) => payload
)();

export const remove = createAction(REMOVE, (payload: string) => payload)();

export const set = createAction(SET, (payload: Diaverum.Patient) => payload)();

export const setDomain = createAction(
  SET_DOMAIN,
  (payload: System.NormalizedDomain<Diaverum.Patient>) => payload
)();
