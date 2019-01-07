const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Patient = require('../models/patient');
const config = require('../config/database');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        Patient.getPatientById(jwt_payload.data._id, (err, patient) => {
            if (err){
                return done(err, false);
            }

            if (patient){
                return done(null, patient);
            } else {
                return done(null, false);
            }
        });
    }));
}