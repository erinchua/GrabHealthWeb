const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PendingListSchema = mongoose.Schema({
    clinic: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true,
    },
    patients: [{
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }] 
});

const PendingList = module.exports = mongoose.model('PendingList', PendingListSchema);

module.exports.addPendingList = function(newPendingList, callback){
    newPendingList.save(callback);
}

