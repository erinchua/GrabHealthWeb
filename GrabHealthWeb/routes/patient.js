const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
//Register
router.post('/register', (req, res, next) => {
    console.log(req.body);
    let newPatient = new Patient({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nric: req.body.nric,
        contactNo: req.body.contactNo,
        gender: req.body.gender,
        address: req.body.address,
        postalCode: req.body.postalCode,
        nationality: req.body.nationality,
        userName: req.body.userName,
        password: req.body.password
    });
    Patient.addPatient(newPatient, (err, patient) => {
        if(err){
            console.log(err);
            res.json({success: false, msg: "Failed to register user"});
        } else {
            res.json({success: true, msg: "Patient successfully registered"});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

router.get('/getPatient', (req, res) => {
    Patient.find((err, patient) => {
        if (err)
            console.log(err);
        else
            res.json(patient);
    });
});


module.exports = router;