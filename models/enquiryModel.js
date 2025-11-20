const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  grade: { type: String },
  message: { type: String },
});

const RequestModel = mongoose.model("enquiry", RequestSchema);
module.exports = RequestModel
