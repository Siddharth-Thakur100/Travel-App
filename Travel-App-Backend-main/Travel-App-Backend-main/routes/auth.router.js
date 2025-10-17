const express = require("express");
const router = express.Router();
const signupHandler = require("../controllers/signupController");
const signinHandler = require("../controllers/signinController");

router.route("/register").post(signupHandler);

router.route("/login").post(signinHandler);

module.exports = router;
