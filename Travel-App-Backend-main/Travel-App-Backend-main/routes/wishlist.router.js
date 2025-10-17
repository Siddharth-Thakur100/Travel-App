const express = require("express");
const router = express.Router();
const verifyUser = require("../middleware/verifyuser");
const {
  createWishlist,
  deleteWishlist,
  getWishlist,
} = require("../controllers/wishlistController");

router.route("/").post(verifyUser, createWishlist);
router.route("/:id").delete(verifyUser, deleteWishlist);
router.route("/").get(verifyUser, getWishlist);

module.exports = router;
