const RequestModel = require("../models/enquiryModel");

exports.enquiryDetails = async (req, res) => {
  console.log("InsideenquiryDetails");
  const { name, email, phone, grade, message } = req.body;
  console.log(name, email, phone, grade, message);

  try {
      const result = new RequestModel({name, email, phone, grade, message});
      console.log("inside try block");
      await result.save();
      console.log(result);
      res.status(200).json(result);

  } catch (error) {
    console.error("enquiry failed:", error);
    res.status(500).json({ error: "Failed to Enquire report" });
  }
};

exports.allEnquiry = async (req, res) => {
  console.log("Inside allReports");

  try {
  const allEnquiry = await RequestModel.find();
  console.log(allEnquiry);
  res.status(200).json(allEnquiry); 
} catch (error) {
  console.error("Failed to fetch all reports:", error);
  res.status(500).json({ error: "Failed to fetch all reports" })
}
};
