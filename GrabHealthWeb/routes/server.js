const express = require('express');
const router = express.Router();
const Clinic = require("../models/clinic");
const PendingList = require("../models/pendinglist");
const Queue = require("../models/queue");
const Patient = require("../models/patient");
const WalkInPatient = require("../models/walkinpatient");
const Appointment = require("../models/appointment");
const database = require("../config/database");


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

//Admin
router.post('/createClinic', (req, res) => {
    console.log(req.body);
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
                return res.json({success: false, msg: "Clinic cannot be removed"});        }
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
    console.log(req.body);
    Patient.findOne({nric: req.body.nric}, '-password' ,(err, patient) => {
        if(err){
            console.log("failed " + err)
            return res.json({success: false, msg: err});
        }
        if(patient){
            return res.json({success: true, msg: "Patient already registered"});
        } else {
            let newPatient = new Patient(req.body);
            Patient.patient(newPatient, (err1, createdPatient) => {
                if(err1)
                    return res.json({success: false, msg: err1});
                if(createdPatient){
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
    console.log(req.body);
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
                            console.log(queueList.queueNo);
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
    console.log(req.body);
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
    console.log(req.body);
    PendingList.findOne({ clinic: req.body.clinic })
    .populate({ path: 'patients', select: '-password' })
    .exec(function (err, pendingList){
        if(err)
            return res.json({success: false, msg: err});
        return res.json({success: true,'pendingList': pendingList}).status(201);
    }) 
});


// Accept appointment request
// router.post('/acceptAppointmentRequest', (req, res) => {
//     console.log(req.body);
//     Patient.findOne({nric: req.body.nric}, (err, patient) => {
//         if(err){
//             return res.json({success: false, msg:'Error'});
//         }
//         if(patient){
//             if(pendingList) {
//                 PendingList.findOne({"clinic": req.body.clinic, "patients": {$all: [patient._id]}}, (err2, patientExistInPendingList) =>{
//                     if(err2)
//                         return res.json({success: false, msg: err2}).status(404);
//                     if(patientExistInPendingList){
//                         return res.json({success: false, msg: "Patient already in queue"}).status(404);
//                     } else {
//                         queueList.patients.push(patient._id);
//                         var queueNo = queueList.queueNo + 1;
//                         queueList.queueNo = queueNo;
//                         console.log(queueList.queueNo);
//                         queueList.save(function(err2, queueListSaved) {
//                             if(err2){
//                                 return res.json({success: false, msg: err2}).status(404);
//                             } else {
//                                 if(queueListSaved){
//                                     patient.queueNo = queueNo;
//                                     patient.save();
//                                     return res.json({success: true, msg: 'Patient has successfully been added to queue'});
//                                 } else {
//                                     return res.json({success: false, msg: 'Patient cannot be added to queue'});
//                                 }
//                             }
//                         });
//                     }
//                 });
                
//             }
                
//         }
//     })
// }); 





module.exports = router;