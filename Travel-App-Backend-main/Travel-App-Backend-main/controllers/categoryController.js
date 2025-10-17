const Category = require("../model/category.model.js");

const categoryHandler = async (req, res) => {
  try {
    let categories = await Category.find({});
    categories
      ? res.json(categories)
      : res.status(404).json({ message: "Data not found" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Data not found" });
  }
};

module.exports = categoryHandler;
