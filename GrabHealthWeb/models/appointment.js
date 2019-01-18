const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = mongoose.Schema({
    clinic: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true,
    },
    patients: [{
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }],
    status: {
        type: String
    } 
});

const Appointment = module.exports = mongoose.model('Appointment', AppointmentSchema);

module.exports.addAppointment = function(newAppointment, callback){
    newAppointment.save(callback);
}
