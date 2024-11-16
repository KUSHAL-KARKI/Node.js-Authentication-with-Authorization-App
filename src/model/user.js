import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// hashing the password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password"))
    next();
    this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = mongoose.model("User", userSchema);