import { Schema, model } from "mongoose";
const URLSchema = new Schema(
  {
    short_url: {
      type: String,
      required:true,
      trim: true,
    },
    long_url: {
      type: String,
      required:true,
      trim: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const URL = model("URL", URLSchema);
export { URL };
