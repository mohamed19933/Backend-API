const sendErrorForDev = (res, err) => {
  res.status(err.statusCode).json({
    error: err,
    status: err.status,
    message: err.message,
    stack: err.stack, //Place of the Error
  });
};

const sendErrorForProd = (res, err) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorForDev(res, err);
  } else {
    sendErrorForProd(res, err);
  }
};

module.exports = globalError;
