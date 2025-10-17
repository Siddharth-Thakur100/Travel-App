const Hotel = require("../model/hotel.model");

const singlehotelHandler = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.json(hotel);
  } catch {
    res.status(404).json({ message: "Hotel not found" });
  }
};

module.exports = singlehotelHandler;
