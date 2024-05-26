const asyncHandler = require("express-async-handler");
const reasonController = require("../controllers/reason.controller");

const getReasons = asyncHandler(async (req, res, next) => {
  const { reasonData: data } = await reasonController.getAll();
  res.json({ data });
});

module.exports = {
  getReasons,
};
