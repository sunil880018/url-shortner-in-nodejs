import { URL } from "../models/Url.js";
import { generateShortUrl } from "../utils/generateShortUrl.js";
import { StatusCodes } from "http-status-codes";
import { BASE_URL } from "../constants.js";
const shortenController = async (req, res) => {
  try {
    const { longUrl, userId, apiKey } = req.body;
    const shortUrl = generateShortUrl(apiKey);
    const newUrl = {
      user_id: userId,
      long_url: longUrl,
      short_url: shortUrl,
    };
    const responseUrl = await URL.create(newUrl);
    const short_url = BASE_URL + responseUrl.short_url;
    res.status(StatusCodes.CREATED).json({ responseUrl: short_url });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({});
  }
};

const shortUrlController = async (req, res) => {
  try {
    const url = await URL.findOne({ short_url: req.params.shortUrl });
    if (url) {
      const long_url = BASE_URL + url.long_url;
      res.status(StatusCodes.OK).json({ long_url });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({});
    }
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).json({});
  }
};

export { shortenController, shortUrlController };
