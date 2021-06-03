const {
  validation,
  serverError,
  castError,
  validationError,
} = require('../utils');

module.exports = (err, req, res, next) => {
  if (err.statusCode === 400 || err.name === castError || err.name === validationError) {
    return res
      .status(400)
      .send({
        message: validation,
      });
  } if (err.name === null) { next(); }

  const { statusCode = 500, message } = err;
  return res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? serverError
        : message,
    });
};
