import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  FullName: String,
  profilePic: String,
  email: String,
  address: String,
  qualification: String,
  city: String,
  bio: String,
  cnic: String,
  phoneNum: String,
  expertize: String,
});

export const UserModel =
  mongoose.models.Users || mongoose.model("Users", userSchema);
