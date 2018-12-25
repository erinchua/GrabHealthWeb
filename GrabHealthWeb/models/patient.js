import mongoose from 'mongoose';

const PatientSchema = mongoose.Schema;

let PatientSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    nric: {
        type: String
    },
    contactNo: {
        type: Number
    },
    gender: {
        type: String
    },
    dob: {
        type: Date
    },
    address: {
        type: String
    },
    postalCode: {
        type: Number
    },
    nationality: {
        type: String
    },
    passportPhto: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    }
});

export default mongoose.model('Patient', PatientSchema);