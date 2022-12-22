const customAPIError = require('./custom-error');
const { statusCode } = require('http-status-codes');

class unauthenticatedError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.UNAUTHORIZED;
  }
}
module.exports = unauthenticatedError;
