const express = require('express');
const router = express.Router();
const Clinic = require("../models/clinic");

router.post('/createClinic', (req, res, next) => {
    let newClinic = new Clinic(req.body);
    Clinic.addClinic(newClinic, (err, clinic) => {
        if(err){
            return res.json({success: false, msg: err});
        } else {
            return res.json({success: true, msg: "Clinic successfuly registered"});
        }
    });
});


module.exports = router;