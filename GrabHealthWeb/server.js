import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Patient from './models/patient';

const ExtServer = require('./routes/server');
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/issues', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27018/GrabHealthWeb', {useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;
const connection = mongoose.connection;

connection.once('connected', () => {
    console.log('Mongo DB database connection established successfully!');
});

connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

app.use('/', router);

app.use('/patient', Patient);

//External Server
app.use('/GrabHealthWeb', ExtServer);

app.listen(4000, () => console.log('Express server running on port 4000'));