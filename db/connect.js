const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.set('strictQuery', false).connect(url);
};

module.exports = connectDB;
