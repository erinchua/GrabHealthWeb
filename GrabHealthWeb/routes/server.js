const express = require('express');
const router = express.Router();
const Clinic = require("../models/clinic");
const PendingList = require("../models/pendinglist");
const Queue = require("../models/queue");

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


// Add patient to queue
router.post('/addPatientToQueue', (req, res) => {
    Patient.findOne({nric: req.body.nric}, (err, patient) => {
        if(err){
            res.json({success: false, msg:'Patient cannot be found'});
        }
        if(patient){
            Queue.find({"clinic": req.user.clinic}).exec(function(err, inQueue) {
                if(err)
                    return res.json({success: false, msg: err}).status(404);
                if(inQueue) {
                    inQueue.push(req.body.patient);
                    inQueue.save();
                    // patient.list.remove(patient._id);
                    // patient.save();
                    // axios.post('http://localhost:4000/GrabHealthWeb/addPatientToQueue', {
                    //     firstName: req.body.patient.firstName,
                    //     lastName: req.body.patient.lastName
                    // })
                }
                
            })
        }
    })
}); 


module.exports = router;