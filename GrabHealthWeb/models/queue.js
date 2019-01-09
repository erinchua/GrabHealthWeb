const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QueueSchema = mongoose.Schema({
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

const Queue = module.exports = mongoose.model('Queue', QueueSchema);

module.exports.addQueue = function(newQueue, callback){
    newQueue.save(callback);
}
