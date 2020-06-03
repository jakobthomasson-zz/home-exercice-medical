import { createAction, createCustomAction } from "typesafe-actions";
import { START_SAVE } from "./constants";

// export const startSave: EmptyAction<string> = { type: START_SAVE };

export const startSave = createCustomAction(START_SAVE)();

// startSave.
//     = createAction(
//   START_SAVE
// )());
