const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let IssueSchema = new Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

const Issue = module.exports = mongoose.model('Issue', IssueSchema);
