import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/db.js";
import { URL } from "./models/Url.js";
import { generateShortUrl } from "./utils/generateShortUrl.js";
import bodyParser from "body-parser";
import { StatusCodes } from "http-status-codes";

dotenv.config();

dbConnection();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Url shortner");
});

app.post("/shorten", async (req, res) => {
  try {
    const { longUrl } = req.body;
    const shortUrl = generateShortUrl(longUrl);
    const newUrl = {
      long_url: longUrl,
      short_url: shortUrl,
    };
    console.log(newUrl);
    await URL.create({ newUrl });
    res.status(StatusCodes.CREATED).json({ shortUrl: shortUrl });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({});
  }
});

app.get("/shortUrl/:shortUrl", async (req, res) => {
  try {
    const url = await URL.findOne({ short_url: req.params.shortUrl });
    if (url) {
      res.status(StatusCodes.OK).json({ longUrl: url.long_url });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({});
    }
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).json({});
  }
});

app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});
