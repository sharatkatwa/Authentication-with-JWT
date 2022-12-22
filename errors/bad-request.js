const customAPIError = require('./custom-error');
const { statusCode } = require('http-status-codes');

class badRequestError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.BAD_REQUEST;
  }
}
module.exports = badRequestError;
