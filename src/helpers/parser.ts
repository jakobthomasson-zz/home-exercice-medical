import * as R from "remeda";

function rowToRaw(row: string): Diaverum.RawItem | null {
  const properties = row.replace(/\r?\n|\r/g, "").split("|"); // clean and split
  if (properties.length !== 16) return null;
  return {
    clinicNo: properties[0],
    barcode: properties[1],
    patientId: properties[2],
    patientName: properties[3],
    dob: properties[4],
    gender: properties[5],
    collectionDate: properties[6],
    collectionTime: properties[7],
    testCode: properties[8],
    testName: properties[9],
    result: properties[10],
    unit: properties[11],
    refrangeLow: properties[12],
    refrangeHigh: properties[13],
    note: properties[14],
    nonSpecRefs: properties[15],
  };
}

function parseText(text: string): Diaverum.RawItem[] {
  const rows = text.split("\n");
  const rawItems = R.pipe(
    rows,
    R.filter((x) => !x.startsWith("#")), // remove all comment rows
    R.splitAt(1), // first row is header
    R.last, // only rows with data,
    (value) => (value ? value : []), // handle undefined
    R.map(rowToRaw), // to raw data format
    R.filter((raw) => !!raw) // filter away null, shouldn't really need to
  );
  return rawItems as Diaverum.RawItem[];
}

export default { parseText, rowToRaw };
