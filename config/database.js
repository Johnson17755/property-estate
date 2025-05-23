import mongoose from "mongoose";

let connected = false;

// connecting to database
const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //if the database is already connected, dont connect again
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  //connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
