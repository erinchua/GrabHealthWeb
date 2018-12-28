const express = require('express');
const router = express.Router();
const Patient = require('./models/patient');

router.get('/getPatient', (req, res) => {
    Patient.find((err, patient) => {
        if (err)
            console.log(err);
        else
            res.json(patient);
    });
});

module.exports = router;