const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Queue = require('./queue');
const PendingList = require('./pendinglist');
const ClinicSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: false
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    clinicLicenseNo: {
        type: String,
        required: true,
        unique: true
    }
});

ClinicSchema.pre('remove', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    PendingList.deleteOne({clinic: this._id}).exec();
    Queue.deleteOne({clinic: this._id}).exec();
    next();
});

const Clinic = module.exports = mongoose.model('Clinic', ClinicSchema);

module.exports.getClinicById = function(id, callback) {
    Clinic.findById(id, callback);
}

module.exports.getClinicByName = function(name, callback) {
    const query = {name: name};
    Clinic.findOne(query, callback);
}


module.exports.addClinic = function(newClinic, callback) {
    newClinic.save(callback);
}


ClinicSchema.plugin(uniqueValidator, { message: "is already taken. "});

