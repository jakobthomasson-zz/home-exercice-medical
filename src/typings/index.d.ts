declare namespace Diaverum {
  interface RawData {
    clinicNo: string;
    barcode: string;
    patientId: string;
    patientName: string;
    dateOfBirth: string;
    gender: "F" | "M";
    collectionDate: string;
    collectionTime: string;
    testCode: string;
    testName: string;
    result: string;
    unit?: string;
    refrangeLow?: string;
    refrangeHigh?: string;
    note?: string;
    nonSpecRefs?: string;
  }

  interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    gender: "F" | "M";
  }

  interface TestResult {
    id: string;
  }
}

declare namespace System {
  export interface NormalizedDomain<T> {
    byId: Record<string, T>;
    allIds: string[];
  }

  export type RequestStatus = "unstarted" | "loading" | "error" | "done";
  export type RequestType = "initilized" | "save";
}

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare type PartialWithId<T> = Partial<T> & { id: string };
