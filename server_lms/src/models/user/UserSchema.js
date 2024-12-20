import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    role: { type: String, default: "user", required: true },
    refreshJWT: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
// User model is converted to users table in MongoDB
