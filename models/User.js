import { Schema, model } from "mongoose";
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const User = model("User", UserSchema);
export { User };
