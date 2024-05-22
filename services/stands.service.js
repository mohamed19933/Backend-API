const asyncHandler = require("express-async-handler");

const standsController = require("../controllers/stands.controller");
const { consStandsRHFHeaders } = require("../constants/constants");
const { exportToExcel } = require("../controllers/excelExportController");
 

const getStands = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const { totalCount, data } = await standsController.getAll(offset, limit,);
  res.json({ totalCount, data });
});


const exportStandsToExcel = asyncHandler(async (req, res, next) => {
  // Extract optional query parameters
  const start = req.query.start || "";
  const stop = req.query.stop || "";



  // Check if stop date is less than start date
  if (start && stop && new Date(stop) < new Date(start)) {
    return next(
      new ApiError(`The Stop Date can't be less than Start Date`, 404)
    );
  }

  const { data: dataToExport } = await standsController.getAll(
    1,
    100000,
    start,
    stop
  );
  await exportToExcel(
    res,
    consStandsRHFHeaders,
    dataToExport,
    "Stands Conumptions Sheet",
    "Stands Conumptions Data" // Ensure this is a valid filename without special characters
  );
});
module.exports = {
  getStands,
  exportStandsToExcel,
};
