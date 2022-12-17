import dotenv from "dotenv";
dotenv.config();

const CONFIG = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};
export { CONFIG };
