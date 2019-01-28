const express = require('express');
const router = express.Router();
const Clinic = require("../models/clinic");
const PendingList = require("../models/pendinglist");
const Queue = require("../models/queue");
const Patient = require("../models/patient");
const Appointment = require("../models/appointment");
const password = require('secure-random-password');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

/*const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '53bbc906',
  apiSecret: 'e9sA3XAWOEZnsZd5'
});

nexmo.message.sendSms(
    'Nexmo', '6590189969', 'test',
    (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            console.dir(responseData);
        }
    }
);*/

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: 'grabhealthteam@gmail.com',
      pass: 'GrabHealth2018S2ABCE'
    },
    tls: {
        rejectUnauthorized: false
    }
  }));
  
var mailOptions = {
    from: 'grabhealthteam@gmail.com',
    to: 'Enter recipient email address',
    subject: 'Enter subject',
    text: 'Enter text'
};
//Admin
router.post('/createClinic', (req, res) => {
    let newClinic = new Clinic(req.body);
    Clinic.addClinic(newClinic, (err, clinic) => {
        if(err){
            return res.json({success: false, msg: err});
        } else {
            if(clinic){
                let newPendingList = new PendingList({
                    clinic: clinic._id
                });
                PendingList.addPendingList(newPendingList, (err, pendingList) => {
                    if(err) {
                        return res.json({success: false, msg: "Clinic cannot be registered"});
                    } else {
                        if(pendingList){
                            let newQueue = new Queue({
                                clinic: clinic._id
                            });
                            Queue.addQueue(newQueue, (err, queue) => {
                                if(err) {
                                    return res.json({success: false, msg: "Clinic cannot be registered"});
                                } else {
                                    if(queue){
                                        return res.json({success: true, msg: "Clinic successfully registered"});
                                    } else {
                                        return res.json({success: false, msg: "Clinic cannot be registered"});
                                    }
                                }
                            });
                        } else {
                            return res.json({success: false, msg: "Clinic cannot be registered"});
                        }
                    }
                });
            } else 
                return res.json({success: false, msg: "Clinic cannot be registered"});
        }
    });
});

router.post('/removeClinic', (req, res) => {
    Clinic.findOne({clinicLicenseNo: req.body.clinicLicenseNo}, (err, clinic) => {
        if(err){
            return res.json({success: false, msg: err});
        } else {
            if(clinic){
                clinic.remove(function(err, removed){
                    if(err)
                        return res.json({success: false, msg: "Clinic cannot be removed"});
                    if(removed)    
                        return res.json({success: true, msg: "Clinic successfully removed"});
                    else
                        return res.json({success: false, msg: "Clinic cannot be removed"});
                });
            } else 
                return res.json({success: false, msg: "Clinic cannot be removed"});        
            }
    });
});

router.post('/getAllPatients', (req, res) => {
    Patient.find({}, (err, patients) =>{
        if(err)
            return res.json({success: false, msg: 'Error has occurred'});
        return res.json({success: true, patients: patients })
    })
});


// Receptionist
// Register walk in patient
router.post('/registerWalkInPatient', (req, res) => {
    Patient.findOne({nric: req.body.nric}, '-password' ,(err, patient) => {
        if(err){
            console.log("failed " + err)
            return res.json({success: false, msg: err});
        }
        if(patient){
            return res.json({success: true, msg: "Patient already registered"});
        } else {
            var randomPassword = password.randomPassword({ characters: password.lower + password.upper + password.digits });
            req.body.password = randomPassword;
            let newPatient = new Patient(req.body);
            Patient.addPatient(newPatient, (err1, createdPatient) => {
                if(err1)
                    return res.json({success: false, msg: err1});
                if(createdPatient){
                    mailOptions.subject = "Thank you for registering with us!";
                    mailOptions.text = "Dear " + req.body.firstName + " " + req.body.lastName + ", \n\n" + 
                        "Thank you for registering with a clinic in a partnership with us. We are pleased to inform you that you have successfully with us.\n\n" +
                        "Your login email will be " + req.body.email + " and the password will be " + randomPassword + ". \n\n" +
                        "Best regards, \n" +
                        "GrabHealth Team"; 
                    mailOptions.to = req.body.email;
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log(error);
                            return res.json({success: false, msg: "Failed to send email"});
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    })
                    return res.json({success: true, msg: "Patient successfully registered"});
                } else {
                    return res.json({success: false, msg: "Patient cannot be registered"});
                }

            });
        }            
    });

});


// Update patient details
router.post('/updateWalkInPatientDetails', (req, res) => {
    Patient.findOne({nric: req.body.nric}, (err, patient) => {
        if(err){
            res.json({success: false, msg: err});
        }
        if(patient){
            patient.save(function(err2, changesMade){
                if(err2){
                    return res.json({success: false, msg: err2});
                } else {
                    if(changesMade){
                        patient.firstName = req.body.firstName;
                        patient.lastName = req.body.lastName;
                        patient.nric = req.body.nric;
                        patient.gender = req.body.gender;
                        patient.address = req.body.address;
                        patient.dob = req.body.dob;
                        patient.nationality = req.body.nationality;
                        patient.contactNo = req.body.contactNo;
                        patient.email = req.body.email;
                        patient.save();
                        return res.json({success: true, msg: "Patient details have been updated"});
                    } else 
                        return res.json({success: false, msg: "No changes have been made"});
                }
            });                   
        } else {
            return res.json({success: false, msg: "Unable to save changes successfully"});
        }
    });

});


// Add patient to queue
router.post('/addPatientToQueue', (req, res) => {
    Patient.findOne({nric: req.body.nric}, (err, patient) => {
        if(err){
            return res.json({success: false, msg:'Error'});
        }
        if(patient){
            Queue.findOne({"clinic": req.body.clinic}).exec(function(err2, queueList) {
                if(err2)
                    return res.json({success: false, msg: err2}).status(404);
                if(queueList) {
                    Queue.findOne({"clinic": req.body.clinic, "patients": {$all: [patient._id]}}, (err3, patientExistInQueue) =>{
                        if(err3)
                            return res.json({success: false, msg: err3}).status(404);
                        if(patientExistInQueue){
                            return res.json({success: false, msg: "Patient already in queue"}).status(404);
                        } else {
                            queueList.patients.push(patient._id);
                            var queueNo = queueList.queueNo + 1;
                            queueList.queueNo = queueNo;
                            queueList.save(function(err2, queueListSaved) {
                                if(err2){
                                    return res.json({success: false, msg: err2}).status(404);
                                } else {
                                    if(queueListSaved){
                                        patient.queueNo = queueNo;
                                        patient.save();
                                        return res.json({success: true, msg: 'Patient has successfully been added to queue'});
                                    } else {
                                        return res.json({success: false, msg: 'Patient cannot be added to queue'});
                                    }
                                }
                            });
                        }
                    });
                   
                }
                
            })
        }
    })
}); 


// Get queue list details
router.post('/queueList', (req, res) => {
    Queue.findOne({ clinic: req.body.clinic })
    .populate({ path: 'patients', select: '-password' })
    .exec(function (err, queue){
        if(err)
            return res.json({success: false, msg: err});
        return res.json({success: true,'queueList': queue}).status(201);
    }) 
});


// Remove patient from queue
router.post('/removePatientFromQueue', (req, res) => {
    Patient.findOne({nric: req.body.nric}, (err, patient) => {
        if(err){
            return res.json({success: false, msg: err});
        } else {
            if(patient){
                Queue.findOne({"clinic": req.body.clinic}).exec(function(err2, queueList) {
                    if(err2)
                        return res.json({success: false, msg: err2}).status(404);
                    if(queueList) {
                        queueList.patients.remove(patient);
                        queueList.save();
                        return res.json({success: true, msg: "Patient is removed from queue"});        
                    }
                });
            } else 
                return res.json({success: false, msg: "Patient cannot be removed from queue"});        
        }
    });
});


// Get pending list details
router.post('/pendingList', (req, res) => {
    PendingList.findOne({ clinic: req.body.clinic })
    .populate({ path: 'patients', select: '-password' })
    .exec(function (err, pendingList){
        if(err)
            return res.json({success: false, msg: err});
        return res.json({success: true,'pendingList': pendingList}).status(201);
    }) 
});


// Get all patients (web + walk-in)
router.post('/all-patient-list', (req, res) => {
    Patient.find({ clinics: {$all: [req.body.clinic]} })
    .exec(function (err, patientRecords){
        if(err)
            return res.json({success: false, msg: err});
        if(patientRecords)
            return res.json({success: true,'patientRecords': patientRecords}).status(201);
    })  
});


// Accept appointment request
router.post('/acceptAppointmentRequest', (req, res) => {
    console.log(req.body);
    Patient.findOne({nric: req.body.nric}, (err, patient) => {
        if(err){
            return res.json({success: false, msg:'Error'});
        }
        if(patient){
            PendingList.findOne({"clinic": req.body.clinic}).exec(function(err2, pendingList) {
                if(err2)
                    return res.json({success: false, msg: err2}).status(404);
                if(pendingList) {
                    Queue.findOne({"clinic": req.body.clinic, "patients": {$all: [patient._id]}}, (err3, patientExist) =>{
                        if(err3)
                            return res.json({success: false, msg: err3}).status(404);
                        if(patientExist){
                            return res.json({success: false, msg: "Patient already in queue"}).status(404);
                        } else {
                            Queue.findOne({"clinic": req.body.clinic}, (err4, queueList) =>{
                                if(queueList){
                                    queueList.patients.push(patient._id);
                                    var queueNo = queueList.queueNo + 1;
                                    queueList.queueNo = queueNo;
                                    console.log(queueList.queueNo);
                                    queueList.save(function(err2, queueListSaved) {
                                        if(err2){
                                            return res.json({success: false, msg: err2}).status(404);
                                        } else {
                                            if(queueListSaved){
                                                pendingList.patients.remove(patient._id);
                                                pendingList.save();
                                                patient.queueNo = queueNo;
                                                patient.save();
                                                var pending = "Pending";
                                                Appointment.findOne({patient: patient._id, clinic: queueList.clinic, status: pending}, (err, appointmentFound) =>{
                                                    if(err)
                                                        console.log('Cannot show in appointment status');
                                                    if(appointmentFound){
                                                        appointmentFound.billAmount = req.body.billAmount;
                                                        appointmentFound.status = 'Accepted';
                                                        appointmentFound.remarks = req.body.remarks;
                                                        appointmentFound.save();
                                                    }                                                     
                                                })
                                                return res.json({success: true, msg: 'Patient has successfully been added to queue'});
                                            } else {
                                                return res.json({success: false, msg: 'Patient cannot be added to queue'});
                                            }
                                        }
                                    });
                                }
                            });
            
                        }
                    });
                   
                }
                
            })            
                
        }
    })
}); 


// Reject appointment request
router.post('/rejectAppointmentRequest', (req, res) => {
    console.log(req.body);
    Patient.findOne({nric: req.body.nric}, (err, patient) => {
        if(err){
            return res.json({success: false, msg: err});
        } else {
            if(patient){
                PendingList.findOne({"clinic": req.body.clinic}).exec(function(err2, pendingList) {
                    if(err2)
                        return res.json({success: false, msg: err2}).status(404);
                    if(pendingList) {
                        pendingList.patients.remove(patient);
                        pendingList.save();
                        Appointment.findOne({patient: patient._id, clinic: pendingList.clinic, status: "Pending"}, (err, appointmentFound) =>{
                            if(err)
                                console.log('Cannot show in appointment status');
                            if(appointmentFound){
                                appointmentFound.status = 'Rejected';
                                apppointmentFound.remarks = req.body.remarks;
                                appointmentFound.save();
                            }
                            
                        })
                        return res.json({success: true, msg: "Patient's appointment request is rejected"});        
                    }
                });
            } else 
                return res.json({success: false, msg: "Patient cannot be rejected"});        
        }
    });
});

//get current patient
router.get("/current-patient", (req, res) => {
    Queue.findOne({ "clinic": req.body.clinic, "patients": { $all: [patient._id] }}).exec(function (err, patients) {
        if (err)
            res.send({ success: false, msg: err }).status(404);
        if (patients)
            res.send({ success: false, msg: 'patient is the current' }).status(404);
        else
            res.send({ success: true, 'patients': patients }).status(201);
    });
});

// Complete visit
router.post("/removeFromQueue", (req, res) => {
    Patient.findOne({nric: req.body.nric}, (err, patient) => {
        if(err)
            return res.json({success: false, msg: err})
        if(patient){
            Queue.findOne({clinic: req.body.clinic}, (err2, queue) => {
                if(err2)
                    return res.json({success:false, msg: err2})
                if(queue){
                    queue.patients.remove(patient._id);
                    queue.save(function(err3, queueSaved){
                        if(err3)
                            return res.json({success:false, msg: err3})
                        if(queueSaved)
                            return res.json({success:true, msg: 'Removed patient from queue' })
                    });
                }
            });
        } else {
            res.json({success: false, msg: 'Patient does not exist'})
        }
    })
});


router.post("/changeAppointmentStatus", (req, res) => {
    Patient.findOne({nric: req.body.nric }, (err, patient) => {
        if(err)
            return res.json({success:false, msg: 'err'});
        if(patient){
            Appointment.findOne({patient: patient._id, clinic: req.body.clinic, status: 'Accepted'}, (err2, appointment) => {
                if(err2)
                    return res.json({success:false, msg: 'err2'});
                if(appointment){
                    appointment.date = req.body.date;
                    appointment.status = "Completed";
                    appointment.save();
                    return res.json({success:true, msg: 'Updated appointment status'});

                }
            });
        } else {
            return res.json({success:false, msg: 'Patient cannot be found'});

        }
    });
});


module.exports = router;