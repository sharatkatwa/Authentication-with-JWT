const { customAPIError } = require('../errors');
const { statusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(statusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again later');
};

module.exports = errorHandlerMiddleware;
