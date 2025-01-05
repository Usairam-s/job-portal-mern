import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    unique: true,
  },
  resume: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
