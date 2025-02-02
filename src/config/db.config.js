require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
    HOST: DB_HOST,
    USER: DB_USERNAME,
    PASSWORD: DB_PASSWORD,
    DB: "nex",
    dialect: "postgres",
  };