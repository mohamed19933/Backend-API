const asyncHandler = require("express-async-handler");
const delayController = require("../controllers/delay.controller");

const getDelayConsumption = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  // Validate mandatory parameters
  if (Number.isNaN(page) || Number.isNaN(limit)) {
    return next(new ApiError("Page and limit parameters are mandatory", 400));
  }

  const { totalCount, delayData: data } = await delayController.getAll(
    offset,
    limit
  );
  res.json({ totalCount, data });
});

module.exports = {
  getDelayConsumption,
};
