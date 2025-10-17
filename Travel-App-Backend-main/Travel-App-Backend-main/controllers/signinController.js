const User = require("../model/user.model");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const signinHandler = async (req, res) => {
  try {
    const user = await User.findOne({ number: req.body.number });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const decondedPassword = cryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    ).toString(cryptoJS.enc.Utf8);
    console.log(`decondedPassword`, decondedPassword);
    if (req.body.password !== decondedPassword) {
      return res.status(400).json({ message: "Wrong Password" });
    }
    const { password, ...others } = user._doc;
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.ACCESS_TOKEN,
      { expiresIn: "5d" }
    );

    res.status(200).json({
      message: "Logged in Successfully",
      user: { ...others, accessToken },
    });
  } catch (err) {
    res.status(500).json({ message: err.message + "User not logged in" });
    console.log(err);
  }
};

module.exports = signinHandler;
