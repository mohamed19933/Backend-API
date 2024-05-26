const asyncHandler = require("express-async-handler");
const summaryController = require("../controllers/summary.controller");

const getSummary = asyncHandler(async (req, res, next) => {
  const { summaryData: data } = await summaryController.getAll();
  res.json({ data });
});

module.exports = {
  getSummary,
};
