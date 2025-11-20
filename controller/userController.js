const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")

exports.UserData = async (req, res) => {
  console.log("Inside UserData ");

  try {
    const { name, email,  password } = req.body;

    const newUser = await UserModel.create({
      name,
      email,
      password
    })

    res.status(201).json({ success: true, message: "User registered successfully", userType: newUser.userType });
  } catch (err) {
    console.error("Error creating user:", err.message);
    res.status(500).json({ error: "Failed to create user" });
  }


}


exports.loginUser = async (req, res) => {
  console.log("Inside loginUser")

  const { email, password } = req.body;
  console.log({email,password});
  
  const adminEmail = "admin@gmail.com"
  const adminPassword = "admin123"
try{
  if (email === adminEmail && password === adminPassword) {
     res.status(200).json({ success: true })
  } else {
     res.status(406).json({ error: "Invalid credentials" })
  }
}
catch(err){
  res.status(400).json(err)

}
}