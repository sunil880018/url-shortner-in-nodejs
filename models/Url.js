import { Schema, model } from "mongoose";
const URLSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  short_url: {
    type: String,
    required: [true, "User must have a short url"],
    unique: true,
    minLength: 1,
    maxLength: 30,
    trim: true,
  },
  long_url: {
    type: String,
    required: [true, "User must have a long url"],
    trim: true,
  },
  createdAt: {
    // remove this document after 10 minutes
    type: Date,
    default: Date.now,
    expires: 10 * 60, // 10 minutes
  },
});
const URL = model("URL", URLSchema);
export { URL };
