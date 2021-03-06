const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = mongoose.Schema({
    clinic: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic'
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    clinicName: {
        type: Schema.Types.Mixed,
        ref: 'Clinic'
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
    },
    date: {
        type: String
    },
    billedAmount: {
        type: Number
    },
    remarks: {
        type: String
    }
});

const Appointment = module.exports = mongoose.model('Appointment', AppointmentSchema);

module.exports.addAppointment = function(newAppointment, callback){
    newAppointment.save(callback);
}
