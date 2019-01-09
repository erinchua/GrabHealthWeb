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


module.exports = router;