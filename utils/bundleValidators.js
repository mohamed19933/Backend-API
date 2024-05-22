const { query } = require("express-validator");
const validatorMiddleware = require("../middleWares/validatorMiddleware");
const {
  validShiftValues,
  validweighingAreaValues,
  validCrewValues,
} = require("../constants/constants");

const bundleValidator = [
  //Rules
  query("page").isInt().withMessage("Page must be an integer"),
  query("limit").isInt().withMessage("Limit must be an integer"),
  query("start")
    .optional({ nullable: true })
    .isISO8601()
    .withMessage("Start date must be in YYYY-MM-DD format"),
  query("stop")
    .optional({ nullable: true })
    .isISO8601()
    .withMessage("Stop date must be in YYYY-MM-DD format"),
  query().custom((value, { req }) => {
    if (req.query.start && req.query.stop) {
      const startDate = new Date(req.query.start);
      const stopDate = new Date(req.query.stop);
      if (startDate >= stopDate) {
        throw new Error("Stop date must be greater than start date");
      }
    }
    return true;
  }),
  query("shift")
    .optional()
    .custom((value) => {
      if (!validShiftValues.includes(value.toUpperCase())) {
        throw new Error(
          `Invalid shift value. Valid values are: ${validShiftValues.join(
            ", "
          )}`
        );
      }
      return true;
    }),
  query("area")
    .optional()
    .custom((value) => {
      if (!validweighingAreaValues.includes(value.toUpperCase())) {
        throw new Error(
          `Invalid area value. Valid values are: ${validweighingAreaValues.join(
            ", "
          )}`
        );
      }
      return true;
    }),
  query("crew")
    .optional()
    .custom((value) => {
      if (!validCrewValues.includes(value.toUpperCase())) {
        throw new Error(
          `Invalid Crew value. Valid values are: ${validCrewValues.join(", ")}`
        );
      }
      return true;
    }),

  validatorMiddleware,
];

module.exports = bundleValidator;
