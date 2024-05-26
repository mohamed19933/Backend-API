const asyncHandler = require("express-async-handler");
const bundleController = require("../controllers/bundle.controller");
const excelExport = require("../controllers/excelExportController");
const { ApiError } = require("../utils/apiError"); // Assuming ApiError is defined in utils
const { bundleHeaders } = require("../constants/constants");

const getBundles = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const shift = req.query.shift || "";
  const area = req.query.area || "";
  const crew = req.query.crew || "";
  const start = req.query.start || "";
  const stop = req.query.stop || "";

  // Check if stop date is less than start date
  if (start && stop && new Date(stop) < new Date(start)) {
    return next(
      new ApiError(`The Stop Date can't be less than Start Date`, 404)
    );
  }

  const { totalCount, data } = await bundleController.getAll(
    offset,
    limit,
    shift,
    area,
    crew,
    start,
    stop
  );
  res.json({ totalCount, data });
});






// Function to get the current date and time
function getCurrentDateTime() {
  const now = new Date();
  return now.toLocaleString(); // Format the date and time as a string
}




const exportBundlesToExcel = asyncHandler(async (req, res, next) => {
  const currentDate = getCurrentDateTime();

  console.log('exportBundlesToExcel Start ..........',getCurrentDateTime())

  // Extract optional query parameters
  const shift = parseInt(req.query.shift, 10) || 0;
  const crew = req.query.crew || "";
  const start = req.query.start || "";
  const stop = req.query.stop || "";
  const page = 1; // Define the page parameter

  // Check if stop date is less than start date
  if (start && stop && new Date(stop) < new Date(start)) {
    return next(
      new ApiError(`The Stop Date can't be less than Start Date`, 404)
    );
  }
  const { data: dataToExport } = await bundleController.getAll(
    page,
    100000,
    shift,
    crew,
    start,
    stop
  );

  console.log('dataToExport ..........',getCurrentDateTime())

  await excelExport.exportToExcel(
    res,
    bundleHeaders,
    dataToExport,
    "Bundles Sheet",
    "BundlesData" // Ensure this is a valid filename without special characters
  );
});
console.log('excelExport.exportToExcel ..........',getCurrentDateTime())

module.exports = {
  getBundles,
  exportBundlesToExcel,
};
