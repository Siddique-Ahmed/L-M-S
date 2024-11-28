import mongoose from "mongoose";

export function connectDB() {
  try {
    let connection;
    connection = mongoose.connect(process.env.MONGODB_URI);
    if (connection) {
      console.log("DB Connected");
    }
  } catch (error) {
    console.log("error is =>", error.message);
  }
}
