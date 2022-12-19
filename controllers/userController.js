import { User } from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/badRequest.js";
const createUserController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new BadRequestError("Please provide name");
    }
    const user = await User.create({ name });
    res.status(StatusCodes.CREATED).json({ user });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: error.message, statusCode: error.statusCode });
  }
};

export { createUserController };
