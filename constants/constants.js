const validShiftValues = ["ALL", "1", "2", "3"];
const validweighingAreaValues = ["ALL", "1", "2"];
const validCrewValues = ["ALL","A", "B", "C", "D"];

const validDelayShiftValues = ["1", "2", "3", "LPDL2"];


const bundleHeaders = [
  "TRK_ID",
  "HEAT_CODE",
  "WEIGHT",
  "LENGTH",
  "BARS_NO",
  "AREA",
  "NOTE",
  "SHIFT",
  "CREW",
  "SIZE",
  "GRADE",
  "CREATION_DATE",
  "IS_MIXED",
  "PRINTER_STATUS",
  "PRODUCTION_DATE",
];
const dailyConsHeaders = [
  "Q_DATE",
  "ELECTRIC_CONSUMPTION",
  "GAS_CONSUMPTION",
  "WATER_CONSUMPTION",
];

const  consStandsRHFHeaders = [
  "Q_DATE",
  "DAILY_CONS_01",
  "DAILY_CONS_03",
  "DAILY_CONS_05",
  "DAILY_CONS_07",
  "DAILY_CONS_09",
  "DAILY_CONS_11",
  "DAILY_CONS_13",
  "DAILY_CONS_14",
  "PGV1_M1",
  "PGV1_M2",
  "PGV2_M1",
  "PGV2_M2",
  "DAILY_RHF",
];

const jobHeaders = [
  "JOB_ID",
  "JOB_CODE",
  "JOB_SEQ",
  "REQ_WGT",
  "CUSTOMER",
  "STATUS",
  "GRADE",
  "MILL_CATALOGUE",
  "BUNDLE_CATALOGUE",
];

const delayHeaders = [
  "DELAY_CNT",
  "STOP_STATUS",
  "START_DELAY",
  "END_DELAY",
  "DURATION",
  "CENTER_CODE",
  "DEVICE",
  "REASON",
  "SHIFT",
  "CREW",
  "NOTE",
];

module.exports = {
  validShiftValues,
  validCrewValues,
  bundleHeaders,
  dailyConsHeaders,
  consStandsRHFHeaders,
  validweighingAreaValues,
  delayHeaders,
  validDelayShiftValues,
};
