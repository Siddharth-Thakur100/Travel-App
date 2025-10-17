const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connecttoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    // console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connecttoDB;
