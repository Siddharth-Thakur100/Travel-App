const express = require("express");
const Category = require("../model/category.model.js");
const categories = require("../data/categories.js");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    await Category.deleteMany({});
    await Category.insertMany(categories.data);
    res.json("Data imported successfully");
  } catch (error) {
    console.log(error);
    res.json({ message: "Data import failed" });
  }
});

module.exports = router;
