require('dotenv').config();

const DB_URL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

module.exports = {
  DB_URL,
};