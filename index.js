const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("./dbConnection/dbConnection");
const router = require("./routes/routes");

const backend = express();

backend.use(express.json());
backend.use(cors());
backend.use(router);

const PORT = process.env.PORT || 3000;

backend.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
