const express = require ('express')
const router = express.Router()
const {enquiryDetails, allEnquiry } = require ('../controller/enquirycontroller')
const { UserData , loginUser } = require('../controller/userController')





router.post('/report', enquiryDetails)
router.get('/allreport', allEnquiry)
router.post('/register', UserData)
router.post('/login', loginUser);




module.exports = router