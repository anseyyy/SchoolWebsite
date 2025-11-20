const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.UserData = async (req, res) => {
  console.log("Inside UserData ");
  const { name, email, password } = req.body

  try {
    const existingUser = await Users.findOne({ email })
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists. Please log in." })
    }

    const newUser = new User({ email, password, name })
    await newUser.save()

    res.status(201).json({ message: "User registered successfully." })
  } catch (err) {
    res.status(500).json({ message: "Server error", err })
  }
};

exports.loginUser = async (req, res) => {
  console.log("Inside loginUser");

  const { email, password } = req.body;
  console.log({ email, password });

  const adminEmail = "admin@gmail.com"
  const adminPassword = "admin123";
  try {
    if (email === adminEmail && password === adminPassword) {
      res.status(200).json({ success: true });
    } else {
      res.status(406).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
