const express = require("express");
const router = express.Router();
const singlehotelHandler = require("../controllers/singlehotelController");

router.route("/:id").get(singlehotelHandler);

module.exports = router;
