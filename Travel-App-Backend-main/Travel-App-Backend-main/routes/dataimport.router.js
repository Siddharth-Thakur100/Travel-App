const express = require("express");
const Hotel = require("../model/hotel.model.js");
const hotels = require("../data/hotels.js");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    await Hotel.deleteMany({});
    await Hotel.insertMany(hotels.data);
    res.json("Data imported successfully");
  } catch (error) {
    console.log(error);
    res.json({ message: "Data import failed" });
  }
});

module.exports = router;
