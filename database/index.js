const mongoose = require('mongoose');
const { DB_URL } = require('../config/database.config');

module.exports = async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log('Connect database successfully');
  } catch (error) {
    console.log('Connect database fail');
  }
};