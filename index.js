import express from "express";
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
import { CONFIG } from "./config/config.js";
import { NotFound } from "./middleware/notFound.js";

dbConnection();
const app = express();
const PORT = CONFIG.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiRequestLimiter);

app.post("/user", cors(whitelist), createUserController);
app.post("/shorten", cors(whitelist), shortenController);
app.get("/shortUrl/:shortUrl", cors(whitelist), shortUrlController);

app.use(NotFound)
app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});
