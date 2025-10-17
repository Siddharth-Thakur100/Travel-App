const Hotel = require("../model/hotel.model.js");

const hotelHandler = async (req, res) => {
  let hotelcategory = req.query.category;
  try {
    let hotels;
    if (hotelcategory) {
      hotels = await Hotel.find({ category: hotelcategory });
    } else {
      hotels = await Hotel.find({});
    }
    hotels
      ? res.json(hotels)
      : res.status(404).json({ message: "Data not found" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Data import failed" });
  }
};

module.exports = hotelHandler;
