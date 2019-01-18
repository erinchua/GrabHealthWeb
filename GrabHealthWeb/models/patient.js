const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const shortid = require('shortid');

let PatientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nric: {
        type: String,
        required: true,
        unique: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true 
    },
    address: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true,
        default: 1000000000
    },
    nationality: {
        type: String,
        required: true
    },
    attach: {
        type: String
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        default: shortid.generate
    },
    password: {
        type: String,
        required: true,
        default: "Non-Applicable"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isWalkIn: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Patient = module.exports = mongoose.model('Patient', PatientSchema);

// module.exports.setWalkInUsername = function(userName, callback){
//     if (isWalkIn) {
//         Patient.findOneAndUpdate({userName: userName}, {$inc: {next: 1}}, {new: true}, callback);
//     } else {
//         Patient.save(callback);
//     }
// }

module.exports.getPatientById = function(id, callback){
    Patient.findById(id, callback);
}

module.exports.getPatientByUsername = function(username, callback){
    Patient.findOne({userName: username}, callback);
}

module.exports.addPatient = function(newPatient, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newPatient.password, salt, (err, hash) => {
            if(err) throw err;
            newPatient.password = hash;
            newPatient.save(callback);
        });
    });
}

module.exports.addWalkInPatient = function(newPatient, callback){
    newPatient.save(callback);
    
}

module.exports.comparePassword = function(patientPassword, hash, callback){
    bcrypt.compare(patientPassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}