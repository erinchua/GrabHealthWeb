const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

let GeneralPatientSchema = new Schema({
    WebPatient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    WalkInPatient: {
        type: Schema.Types.ObjectId,
        ref: 'WalkInPatient' 
    },
    isWalkIn: {
        type: Boolean,
        required: true,
        default: false
    }
});

const GeneralPatient = module.exports = mongoose.model('GeneralPatient', GeneralPatientSchema);


module.exports.addGeneralPatient = function(newPatient, callback){
    newPatient.save(callback);
    
}