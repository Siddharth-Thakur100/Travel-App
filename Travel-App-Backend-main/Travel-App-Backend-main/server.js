const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const hoteldataaddertoDB = require("./routes/dataimport.router");
const categorydataaddertoDB = require("./routes/categoryimport.router");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singlehotelRouter = require("./routes/singlehotel.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const connecttoDB = require("./config/dbconfig");

const app = express();

app.use(cors());
app.use(express.json());
connecttoDB();

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/hoteldata", hoteldataaddertoDB);
app.use("/api/categorydata", categorydataaddertoDB);
app.use("/api/hotels", hotelRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/hotels", singlehotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
