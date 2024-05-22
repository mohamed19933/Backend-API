const { validationResult } = require("express-validator");

const validatorMiddleware = (req, res, next) => {
  //Finds the validation errors in this request and wraps them in an object with the handy funcation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Error is Validator Fire = ", errors);
    return res.status(400).json({ errors: errors.array() });
  }
  next(); //next if important becasue if there is no error well -->next well move it to the service
};

module.exports = validatorMiddleware;
