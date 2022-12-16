import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/db.js";
import bodyParser from "body-parser";
import { createUserController } from "./controllers/userController.js";
import { shortenController, shortUrlController } from "./controllers/urlShortenController.js";

dotenv.config();

dbConnection();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user", createUserController);
app.post("/shorten", shortenController);
app.get("/shortUrl/:shortUrl", shortUrlController);

app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});
