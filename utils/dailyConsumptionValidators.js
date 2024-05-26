const { query } = require("express-validator");
const validatorMiddleware = require("../middleWares/validatorMiddleware");

const dailyConsValidator = [
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
  validatorMiddleware,
];

module.exports = dailyConsValidator;
