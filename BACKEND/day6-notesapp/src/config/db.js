const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoos db connected");
  } catch (error) {
    console.log("error while connecting Db", error);
  }
};

module.exports = connectDB;

