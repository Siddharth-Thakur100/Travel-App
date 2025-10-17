const Wishlist = require("../model/hotel.model");

const createWishlist = async (req, res) => {
  const newWishlist = new Wishlist(req.body);
  try {
    const savedWishlist = await newWishlist.save();
    res.status(201).json(savedWishlist);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create wishlist" });
  }
};

const deleteWishlist = async (req, res) => {
  try {
    const deletedWishlist = await Wishlist.findByIdAndDelete(req.params.id);
    if (deletedWishlist) {
      res.status(204).json({ message: "wishlist deleted successfully" });
    } else {
      res.status(404).json({ message: "wishlist not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to delete wishlist" });
  }
};

const getWishlist = async (req, res) => {
  try {
    const wishlists = await Wishlist.find();
    wishlists
      ? res.status(200).json(wishlists)
      : res.status(404).json({ message: "wishlists not found" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to fetch wishlists" });
  }
};

module.exports = { createWishlist, deleteWishlist, getWishlist };
