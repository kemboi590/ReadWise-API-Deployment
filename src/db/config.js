import dotenv from "dotenv";

import assert from "assert";

dotenv.config();

const {
  PORT,
  SQL_SERVER,
  SQL_USER,
  SQL_PWD,
  SQL_DB,
  JWT_SECRET,
} = process.env;


assert(PORT, "HOST_URL is required");

const config = {
  port: PORT,
  sql: {
    server: SQL_SERVER,
    user: SQL_USER,
    password: SQL_PWD,
    database: SQL_DB,
    options: {
      encrypt: true,
      trustServerCertificate: false
    },
  },
  jwt_secret: JWT_SECRET,
};

export default config;
