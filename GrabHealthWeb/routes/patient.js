const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const Clinic = require('../models/clinic');
const PendingList = require('../models/pendinglist');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Appointment = require('../models/appointment');


//Register
router.post('/register', (req, res, next) => {
    console.log(req.body);
    let newPatient = new Patient({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nric: req.body.nric,
        contactNo: req.body.contactNo,
        gender: req.body.gender,
        dob: req.body.dob,
        address: req.body.address,
        postalCode: req.body.postalCode,
        nationality: req.body.nationality,
        attach: req.body.attach,
        email: req.body.email,
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
    const email = req.body.email;
    const password = req.body.password;

    Patient.getPatientByEmail(email, (err, patient) => {
        if(err){
            console.log(err);
        } if (!patient){
            return res.json({success: false, msg: "User not found"});
        }

        Patient.comparePassword(password, patient.password, (err, isMatch) => {
            if (err) {
                console.log(err);
            } if (isMatch) {
                const token = jwt.sign({data: patient}, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json ({
                    success: true,
                    token: 'JWT '+token,
                    patient: {
                        id: patient._id,
                        firstName: patient.firstName,
                        lastName: patient.lastName,
                        nric: patient.nric,
                        contactNo: patient.contactNo,
                        gender: patient.gender,
                        dob: patient.dob,
                        address: patient.address,
                        postalCode: patient.postalCode,
                        nationality: patient.nationality,
                        attach: patient.attach,
                        email: patient.email
                    },
                    msg: "Successful Login"
                });
            } else {
               return res.json({success: false, msg: "Wrong Password"})
            }
        })
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({patient: req.user});
});

//Patient List
router.get('/getPatient', (req, res) => {
    Patient.find((err, patient) => {
        if (err)
            console.log(err);
        else 
            res.json(patient);
    });
});

//Clinic List
router.get('/getClinic', (req, res) => {
    Clinic.find({})
        .exec(function (err, clinics){
            res.send({'clinics': clinics}).status(201);
        }) 
});

//Book Clinic
router.post('/bookClinic', passport.authenticate('jwt', {session: false}), (req, res) => {
    //console.log(req.user._id);
    PendingList.findOne({clinic: req.body._id}, (err, pendingList) => {
        if (err){
            return res.json({success: false, msg: "Error"});
        } else {
            if(pendingList){
                //console.log(pendingList); //this gives all the data in database
                PendingList.findOne({patients: {$all: [req.user._id]}}, (err, foundPatient) => {
                    if(err)
                        console.log(err)
                    if(!foundPatient){
                        pendingList.patients.push(req.user._id);
                        Patient.findOne({_id: req.user._id, clinics: {$all: [pendingList.clinic]}}, (err, patientWithClinic) =>{
                            if(err)
                                console.log(err);
                            if(!patientWithClinic){
                                Patient.findById(req.user._id,(err, patient) => {
                                    if(err)
                                        console.log(err)
                                    if(patient){
                                        patient.clinics.push(pendingList.clinic);
                                        patient.save();
                                    }
                                })
                            }
                        });
                        pendingList.save(function (e2, checking2) {
                            if (e2) {
                                return res.json({success: false, msg: "Patient already exists in pendingList"});
                            } 
                            else {
                                if(checking2){
                                    let newAppointment = new Appointment({
                                        patient: req.user._id,
                                        clinic: req.body._id,
                                        clinicName: req.body
                                    });
                                    Appointment.addAppointment(newAppointment, (err, appointment) => {
                                        if (err) {
                                            return res.json({success: false, msg: "Patient already exists in pendingList"});
                                        } else {
                                            if (appointment){
                                                Appointment.find({})
                                                .populate('clinicName', '_id: 0, name')
                                                .exec(function (err, appointments){
                                                    return res.json({success: true, msg: "Successfully booked"});
                                                }) 
                                            } else {
                                                return res.json({success: false, msg: "Patient already exists in pendingList"});
                                            }
                                        }
                                    });
                                }
                                //return res.json({success: true, msg: "Successfully booked!"});
                            }
                        });
                    } else {
                        return res.json({success: false, msg: "Patient already exists in pendingList"});
                    }
                });
               
            } else {
                return res.json({success: false, msg: "PendingList does not exist"});
            }
        }
        
    });
});

//Edit Patient Details
router.post('/editPatientDetail', passport.authenticate('jwt', {session: false}), (req, res) => {
    Patient.findByIdAndUpdate(req.user._id, {password: req.body.password, contactNo: req.body.contactNo, address: req.body.address, postalCode: req.body.postalCode}, {upsert:true}, (err, patient) => {
        if (err) {
            res.json({success: false, msg: "Error"});
        } else {
            res.json({success: true, msg: "Profile have been successfully updated"});
        }
    })
});

//Get Patient's Booked Clinic
router.get('/getBookedClinic', (req, res) => {
    Appointment.find({})
        .exec(function (err, appointments){
            res.send({'appointments': appointments}).status(201);
        });
});

module.exports = router;