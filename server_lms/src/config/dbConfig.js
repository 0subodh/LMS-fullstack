import mongoose from "mongoose";

async function dbConnect() {
  if (!process.env.MONGO_URL) {
    throw new Error("Provide MONGO_URL connection string");
  }
  return mongoose.connect(process.env.MONGO_URL);
}

/*
async function dbConnect() {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("Provide MONGO_URL connection string");
    }
    const connection = await mongoose.connect(process.env.MONGO_URL);
    connection && console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Connection could not be established");
  }
}
*/

export default dbConnect;
