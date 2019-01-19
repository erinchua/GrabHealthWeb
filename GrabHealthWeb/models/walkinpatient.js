const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

let WalkInPatientSchema = new Schema({
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
    nationality: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const WalkInPatient = module.exports = mongoose.model('WalkInPatient', WalkInPatientSchema);


module.exports.getWalkInPatientById = function(id, callback){
    WalkInPatient.findById(id, callback);
}

module.exports.addWalkInPatient = function(newPatient, callback){
    newPatient.save(callback);
    
}
