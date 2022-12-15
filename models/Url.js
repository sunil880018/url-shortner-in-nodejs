import { Schema, model } from "mongoose";
const URLSchema = new Schema(
  {
    short_url: {
      type: String,
      trim: true,
    },
    long_url: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const URL = model("URL", URLSchema);
export { URL };
