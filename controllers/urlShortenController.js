import { URL } from "../models/Url.js";
import { generateShortUrl } from "../utils/generateShortUrl.js";
import { StatusCodes } from "http-status-codes";
import { BASE_URL } from "../constants.js";
import { NotFoundError, BadRequestError } from "../errors/index.js";
const shortenController = async (req, res) => {
  try {
    const { longUrl, userId, apiKey } = req.body;
    if (!longUrl || !userId || !apiKey) {
      throw new BadRequestError("Please provide all the values");
    }
    const shortUrl = generateShortUrl(apiKey);
    const newUrl = {
      user_id: userId,
      long_url: longUrl,
      short_url: shortUrl,
    };
    const responseUrl = await URL.create(newUrl);
    const short_url = BASE_URL + responseUrl.short_url;
    res.status(StatusCodes.CREATED).json({ short_url });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: error.message, statusCode: error.statusCode });
  }
};

const shortUrlController = async (req, res) => {
  try {
    const url = await URL.findOne({ short_url: req.params.shortUrl });
    if (url) {
      const long_url = BASE_URL + url.long_url;
      res.status(StatusCodes.OK).json({ long_url });
    } else {
      throw new NotFoundError(" Not Found!");
    }
  } catch (error) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: error.message, statusCode: error.statusCode });
  }
};

export { shortenController, shortUrlController };
