const mongoose = require('mongoose');
require('dotenv/config');

const dbConfig = process.env.DB_HOST;

const connection = mongoose.connect(dbConfig);

module.exports = connection;