import passport from 'passport';
import config from '../config/config';

const BearerStrategy = require('passport-http-bearer').Strategy;

passport.use(
  new BearerStrategy((token, cb) => {
    if (token === config.tokenPrices) {
      return cb(null, true, { result: 'OK!' });
    }
    return cb(null, false, { result: 'Incorrect prices token!' });
  })
);

module.exports = passport.authenticate('bearer', { session: false });
