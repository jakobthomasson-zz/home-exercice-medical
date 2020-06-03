import { ActionType } from "typesafe-actions";
import * as patientConstants from "./constants";
import * as patientActions from "./actions";
import * as patientSelectors from "./selectors";
import patientReducer from "./reducer";

export type PatientAction = ActionType<typeof patientActions>;

export type PatientState = System.NormalizedDomain<Diaverum.Patient>;

export { patientConstants, patientActions, patientReducer, patientSelectors };
