const express =  require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');
const ExtServer = require('./routes/server');
const router = express.Router();
const patient = require('./routes/patient');
const config = require('./config/database');
const passport = require('passport');
const env_config = require('dotenv').config();
const bodyCleaner = require('express-body-cleaner');
var fs = require('fs');
var https = require('https');
const Nexmo = require('nexmo');
// const socketio = require('socket.io');

const nexmo = new Nexmo({
    apiKey: 'f831826d',
    apiSecret: 'SBf911A5UR6GSOlb'
});


const internalServer = express();
const appPort = 60003;
internalServer.use(helmet());
internalServer.use(cors());
//Body Parser MiddeWare
//Parse application/json
internalServer.use(bodyParser.json());
internalServer.use(bodyParser.urlencoded({extended: true}));
internalServer.use(bodyCleaner)
internalServer.use('/GrabHealthWeb', ExtServer);

const app = express();

//Helmet middleware
app.use(helmet());

//CORS middleware
app.use(cors());

app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    

//app.use(express.static(path.join(__dirname, 'src')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Passport Config
require('./config/passport')(passport);

app.use('/patient', patient);


//External Server
if (process.env.HTTPS) {
    //Don't allow server with portforwarding to access internal routes
} else {
    app.use('/GrabHealthWeb', ExtServer);

}

mongoose.connect(config.database, {useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;
const connection = mongoose.connection;

mongoose.set('useFindAndModify', false);

connection.once('connected', () => {
    console.log('Connected to database ' + config.database);
});

connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

app.get('/', function(req, res){
    res.redirect('/GrabHealth');
})
app.use('/', router);


//Serve static files
app.use('/GrabHealth/', express.static(path.join(__dirname, 'public')));

app.get('/GrabHealth/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

//External Server
app.use('/GrabHealthWeb', ExtServer);

var port = process.env.PORT || 4000;

if (process.env.HTTPS) {
    https.createServer({
        key: fs.readFileSync(process.env.HTTPS_KEY),
        cert: fs.readFileSync(process.env.HTTPS_CERT)
    }, app)
    .listen(port, () => console.log('Express https server running on port ' + port));
}
else {
    app.listen(port, () => console.log('Express server running on port ' + port));
}
internalServer.listen(appPort, () => console.log('Internal Express server running on port ' + appPort))
