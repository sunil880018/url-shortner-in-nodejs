import { Schema, model } from "mongoose";
const URLSchema = new Schema(
  {
    short_url: {
      type: String,
      required:true,
      minLength: 7,
      maxLength:25,
      trim: true,
    },
    long_url: {
      type: String,
      required:true,
      trim: true,
    },
    createdAt: { // remove this document after 10 minutes
      type: Date,
      default: Date.now,
      expires: 10*60, // 10 minutes
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const URL = model("URL", URLSchema);
export { URL };
