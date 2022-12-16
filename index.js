import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/db.js";
import bodyParser from "body-parser";
import { createUserController } from "./controllers/userController.js";
import {
  shortenController,
  shortUrlController,
} from "./controllers/urlShortenController.js";
import { apiRequestLimiter } from "./middleware/apiRateLimiter.js";
import { whitelist } from "./middleware/ipWhiteListing.js";
import cors from 'cors'
dotenv.config();

dbConnection();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiRequestLimiter);

app.post("/user", cors(whitelist), createUserController);
app.post("/shorten", cors(whitelist), shortenController);
app.get("/shortUrl/:shortUrl", cors(whitelist), shortUrlController);

app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});
