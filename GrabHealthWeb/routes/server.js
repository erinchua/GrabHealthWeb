const express = require('express');
const router = express.Router();
const Clinic = require("../models/clinic");
const PendingList = require("../models/pendinglist");
const Queue = require("../models/queue");
const Patient = require("../models/patient");
const WalkInPatient = require("../models/walkinpatient");
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
                return res.json({success: false, msg: "Clinic cannot be removed"});        }
    });
});


router.post('/registerWalkInPatient', (req, res) => {
    let newWalkInPatient = new Patient(req.body);
    newWalkInPatient.isWalkIn = true;
    Patient.addWalkInPatient(newWalkInPatient, (err, patient) => {
        if(err){
            console.log("failed " + err)
            return res.json({success: false, msg: err});
        }
        if(patient){
            return res.json({success: true, msg: "Patient successfully registered"});

        } else {
            return res.json({success: false, msg: "Patient cannot be registered "});
        }            

        
    });

});


// Add patient to queue
router.post('/addPatientToQueue', (req, res) => {
    Patient.findOne({nric: req.body.nric}, (err, patient) => {
        if(err){
            res.json({success: false, msg:'Patient cannot be found'});
        }
        if(patient){
            Queue.find({"clinic": req.body.clinic}).exec(function(err, queueList) {
                if(err)
                    return res.json({success: false, msg: err}).status(404);
                if(queueList) {
                    queueList.patients.push(req.user._id);
                    queueList.save(function(err2, queueListSaved) {
                        if(err2){
                            return res.json({success: false, msg: err2}).status(404);
                        } else {
                            if(queueListSaved){
                                return res.json({succes: true, msg: 'Patient has successfully been added to queue'});
                            } else {
                                return res.json({succes: false, msg: 'Patient cannot be added to queue'});
                            }
                        }
                    });
                   
                }
                
            })
        }
    })
}); 


module.exports = router;