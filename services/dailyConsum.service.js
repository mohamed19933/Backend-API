const asyncHandler = require("express-async-handler");
const dailyController = require("../controllers/dailyConsumption.controller");
const excelExport = require("../controllers/excelExportController");
const { dailyConsHeaders } = require("../constants/constants");

const getDailyConsumption = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const startDate = req.query.start || "";
  const endDate = req.query.stop || "";

  // Validate mandatory parameters
  if (Number.isNaN(page) || Number.isNaN(limit)) {
    return next(new ApiError("Page and limit parameters are mandatory", 400));
  }

  // Check if stop date is less than start date
  if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
    return next(
      new ApiError("The Stop Date can't be less than Start Date", 400)
    );
  }

  const { totalCount, dailyConsumption: data } = await dailyController.getAll(
    skip,
    limit,
    startDate,
    endDate
  );
  res.json({ totalCount, data });
});

const exportDailyConsToExcel = asyncHandler(async (req, res, next) => {
  // Extract optional query parameters
  const start = req.query.start || "";
  const stop = req.query.stop || "";



  // Check if stop date is less than start date
  if (start && stop && new Date(stop) < new Date(start)) {
    return next(
      new ApiError(`The Stop Date can't be less than Start Date`, 404)
    );
  }

  const { dailyConsumption: dataToExport } = await dailyController.getAll(
    1,
    100000,
    start,
    stop
  );
  await excelExport.exportToExcel(
    res,
    dailyConsHeaders,
    dataToExport,
    "Power Conumptions Sheet",
    "Power Conumptions Data" // Ensure this is a valid filename without special characters
  );
});
module.exports = {
  getDailyConsumption,
  exportDailyConsToExcel,
};
