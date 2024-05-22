const { query } = require("express-validator");
const validatorMiddleware = require("../middleWares/validatorMiddleware");
const { validShiftValues, validCrewValues } = require("../constants/constants");

const delaysValidators = [
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
  validatorMiddleware,
];

module.exports = delaysValidators;
