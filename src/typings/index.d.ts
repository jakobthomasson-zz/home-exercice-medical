declare namespace Diaverum {
  interface RawItem {
    clinicNo: string;
    barcode: string;
    patientId: string;
    patientName: string;
    dob: string;
    gender: string;
    collectionDate: string;
    collectionTime: string;
    testCode: string;
    testName: string;
    result: string;
    unit: string;
    refrangeLow: string;
    refrangeHigh: string;
    note: string;
    nonSpecRefs: string;
  }
  type Gender = "F" | "M";
  interface Patient {
    id: string;
    name: string;
    dob: string;
    gender: Gender;
    testIds: string[];
  }

  type ResultType = "Pending" | number;
  interface TestResult {
    id: string;
    barcode: number;
    clinicId: string;
    patientId: string;
    collected: string;
    testCode: string;
    testName: string;
    result: ResultType;
    unit?: string;
    refrangeLow?: number;
    refrangeHigh?: number;
    note?: string;
    nonSpecRefs?: string;
  }

  // TODO: Separate into two domains, TestResult & Test.
  interface Test {
    id: string;
    code: string;
    name: string;
    unit: string;
  }
  // TODO: implement clinic
  interface Clinic {
    id: string;
  }
}

declare namespace System {
  export interface NormalizedDomain<T> {
    byId: Record<string, T>;
    allIds: string[];
  }

  export type RequestStatus = "unstarted" | "loading" | "error" | "done";
  export type RequestType = "initilized" | "select_patient" | "searching";

  export type HeaderColumn = {
    fr: number;
    title: string;
  };
}

declare namespace Styles {
  export type BaseSize = "small" | "medium" | "large";
  export type IconType = "loading" | "search";

  export type TextType = "standard";
  type TextVariation = Partial<Record<"bold" | "italic" | "rule", boolean>>;
}
declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare type PartialWithId<T> = Partial<T> & { id: string };
