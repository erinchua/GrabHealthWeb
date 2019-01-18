const express =  require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Issue = require('./models/Issue');
const path = require('path');
const helmet = require('helmet');
const ExtServer = require('./routes/server');
const app = express();
const router = express.Router();
const patient = require('./routes/patient');
const config = require('./config/database');
const passport = require('passport');
// const Nexmo = require('nexmo');
// const socketio = require('socket.io');

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
    

app.use(express.static(path.join(__dirname, 'src')));

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
app.use('/GrabHealthWeb', ExtServer);

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

router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
});

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});


router.route('/issues/update/:id').post((req, res) => {
    Issues.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load document'));
        else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Remove sucessfully');
    })
})

app.use('/', router);

//External Server
app.use('/GrabHealthWeb', ExtServer);

app.listen(4000, () => console.log('Express server running on port 4000'));