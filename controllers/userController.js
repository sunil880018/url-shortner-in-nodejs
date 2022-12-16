import { User } from "../models/User.js";
import { StatusCodes } from "http-status-codes";
const createUserController = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name });
    res.status(StatusCodes.CREATED).json({ user: user });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({});
  }
};

export { createUserController };
