const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

const MedicalHistorySchema = mongoose.Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
        //required: true
    },
    medicalHistory: {
        type: String,
        unique: true
    },
    allergies: {
        type: String
    }

});

const Medicine = module.exports = mongoose.model('MedicalHistory', MedicalHistorySchema);
