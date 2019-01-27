const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const Clinic = require('../models/clinic');
const PendingList = require('../models/pendinglist');
const Queue = require('../models/queue');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Appointment = require('../models/appointment');
const axios = require('axios');
const Nexmo = require('nexmo');
const password = require('secure-random-password');

if(process.env.CLINICSERVERURL){
    var webserverurl = process.env.CLINICSERVERURL;
} else {
    var webserverurl =  'http://localhost:4560';
}

const nexmo = new Nexmo({
    apiKey: 'f831826d',
    apiSecret: 'SBf911A5UR6GSOlb'
});

//Register
router.post('/register', (req, res, next) => {
    let newPatient = new Patient({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nric: req.body.nric,
        contactNo: req.body.contactNo,
        gender: req.body.gender,
        dob: req.body.dob,
        address: req.body.address,
        nationality: req.body.nationality,
        email: req.body.email,
        password: req.body.password
    });

    Patient.addPatient(newPatient, (err, patient) => {
        if(err){
            console.log(err);
            res.json({success: false, msg: "Failed to register user"});
        } else {
            if (patient){
                axios.post(webserverurl + '/patient/addPatient', {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    nric: req.body.nric,    
                    contactNo: req.body.contactNo,
                    gender: req.body.gender,
                    dob: req.body.dob,
                    address: req.body.address,
                    nationality: req.body.nationality,
                    email: req.body.email
                })
                .then((res) => {
                    data = res['data'];
                    if(data['success']){
                        console.log("Successful");
                    } else {
                        console.log("Failed");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
                res.json({success: true, msg: "Patient successfully registered"});
            } else {
                res.json({success: false, msg: "Failed to register user"});
            }
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
                        nationality: patient.nationality,
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
    PendingList.findOne({clinic: req.body._id}, (err, pendingList) => {
        if (err){
            return res.json({success: false, msg: "Error"});
        } else {
            if(pendingList){
                PendingList.findOne({patients: {$all: [req.user._id]}}, (err, foundPatient) => {
                    if(err)
                        console.log(err)
                    if(!foundPatient){
                        Queue.findOne({patients: {$all: [req.user._id]}}, (queueErr, foundPatientInQueue) => {
                            if(queueErr)
                                console.log(err)
                            if(!foundPatientInQueue){
                                Appointment.findOne({patient: req.user._id, clinic: pendingList.clinic, status: 'Accepted' }, (appointmentErr, appointment) => {
                                    if(appointmentErr)
                                        console.log(appointmentErr);
                                    if(!appointment){
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
                                                                .populate({path: 'clinicName', select: '_id: 0, name'})
                                                                .exec(function (err, appointments){
                                                                    return res.json({success: true, msg: "Successfully booked"});
                                                                }) 
                                                            } else {
                                                                return res.json({success: false, msg: "Patient already exists in pendingList"});
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    } else {
                                        return res.json({success: false, msg: "Appointment not completed. Please complete your payment or cancel the appointment!"});
                                    }
                                });
                            } else {
                                return res.json({success: false, msg: "You are already in a queue!"});
                            }
                        });
                    } else {
                        return res.json({success: false, msg: "You have already made a booking!"});
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
    Patient.findByIdAndUpdate(req.user._id, {contactNo: req.body.contactNo, address: req.body.address}, {upsert:true}, (err, patient) => {
        if (err) {
            res.json({success: false, msg: "Error"});
        } else {
            res.json({success: true, msg: "Profile have been successfully updated"});
        }
    })
});

//Get Patient's Booked Clinic
router.get('/getBookedClinic', passport.authenticate('jwt', {session: false}), (req, res) => {
    Appointment.find({patient: req.user._id})
        .populate({path: 'patient', select: 'queueNo'})
        .exec(function (err, appointments){
            res.send({'appointments': appointments}).status(201);
        });
});

//Cancel Patient's Booking
router.post('/cancelBooking', passport.authenticate('jwt', {session: false}), (req, res) => {
    Appointment.findOne({patient: req.user._id, $or: [{status: 'Pending'}, {status: 'Accepted'}]}, (err, appointment) => {
        if (err) {
            console.log("Appointment Error");
            res.json({success: false, msg: "Appointment doesn't exist"});
        }
        if (appointment) {
            appointment.status = 'Cancelled';
            appointment.save(function(err, statusCancelled){
                if (err) {
                    return res.json({success: false, msg: err}).status(404);
                } else {
                    if (statusCancelled){
                        Queue.findOne({patients: req.user._id}, (err2, cancelQueue) => {
                            if (err2){
                                return res.json({success: false, msg: "Appointment doesn't exist"});
                            } else {
                                if (cancelQueue){
                                    cancelQueue.patients.remove(req.user._id);
                                    cancelQueue.save();
                                    return res.json({success: true, msg: "Appointment is cancelled"});
                                }
                            }
                        });
                        PendingList.findOne({patients: req.user._id}, (err3, cancelPending) => {
                            if (err3) {
                                return res.json({success: false, msg: "Appointment doesn't exist"});
                            } else {
                                if (cancelPending){
                                    cancelPending.patients.remove(req.user._id);
                                    cancelPending.save();
                                    return res.json({success: true, msg: "Appointment is cancelled"});
                                }
                            }
                        });
                    }
                }
            });
        }
    });
});

// Get Patient's Visit History
// router.get('/getVisitHistory', passport.authenticate('jwt', {session: false}), (req, res) => {
//     Appointment.find({patient: req.user._id})
//         .populate({path: 'date', select: 'date'}, {path: 'billedAmount', select: ''}, {path: 'clinicName', select: '_id: 0, name'})
//         .exec(function (err, appointments){
//             res.send({'appointments': appointments}).status(201);
//         });
// });

//Patient Change Password
router.post('/changePassword', passport.authenticate('jwt', {session: false}), (req, res) => {

    console.log(req.user.contactNo);
    let contactNo = req.body.contactNo;
    Patient.getPatientById(req.user._id, (err, getPatient) => {
        if (err) {
            console.log("getPatient Error");
        } else {
            if (getPatient){
                var randomPassword = password.randomPassword ({ characters: password.lower + password.upper + password.digits });
                nexmo.verify.request({number: contactNo, brand: 'GrabHealth'}, (err, result) => {
                    if (err) {
                        console.log("Send message error");
                    } else {
                        const from = 'GrabHealth';
                        const to = contactNo;
                        const text = randomPassword;

                        nexmo.message.sendSms(from, to, text);
                    }
                });
            }
        }
    })
});

//Forget Password
// router.post('/forgetPassword', (req, res) => {
//     let contactNo = req.body.contactNo;
//     let nric = req.body.nric;
//     console.log(contactNo);
//     console.log(nric);
//     nexmo.verify.request({number: contactNo}, (err, result) => {
//         if (err) {
//             console.log("Error");
//         } else {
//             let requestId = result.requestId;
//             if (result.status == '0'){
//                 res.render('verify', {requestId: requestId});
//             } else {
//                 res.status(401).send(result.error_text);
//             }
//         }
//     });
// });

module.exports = router;