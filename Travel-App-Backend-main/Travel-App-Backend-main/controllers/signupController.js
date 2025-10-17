const User = require("../model/user.model");
const cryptoJS = require("crypto-js");

const signupHandler = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: cryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    if (
      !newUser.username ||
      !newUser.number ||
      !newUser.email ||
      !newUser.password
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const savedUser = await newUser.save();
    res.status(201).json(`User ${savedUser} Registered Successfully`);
  } catch (err) {
    res.status(500).json({ message: err.message + "User not registered" });
    console.log(err);
  }
};

module.exports = signupHandler;
