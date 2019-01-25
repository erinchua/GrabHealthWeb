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
        default: 'pending'
    },
    date: {
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    },
    billedAmount: {
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    }
});

const Appointment = module.exports = mongoose.model('Appointment', AppointmentSchema);

module.exports.addAppointment = function(newAppointment, callback){
    newAppointment.save(callback);
}
