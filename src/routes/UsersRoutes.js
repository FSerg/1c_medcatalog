import express from 'express';
import passport from 'passport';

import '../services/PassportServices';
import {
  validate,
  generateToken,
  setUserInfo
} from '../services/UsersServices';

import User from '../models/User';

const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });
// const requireSignin = passport.authenticate('local', (err, user, info) => {
//   if (err) {
//     return next(err);
//   }
// });

const router = express.Router();

const roleAuthorization = roles => {
  return (req, res, next) => {
    const { user } = req;

    User.findById(user._id, (err, foundUser) => {
      if (err) {
        res.status(422).json({ result: 'No user found!' });
        return next(err);
      }

      if (roles.indexOf(foundUser.role) > -1) {
        return next();
      }

      res
        .status(401)
        .json({ result: 'You are not authorized to view this content!' });
      return next('Unauthorized');
    });
  };
};

router.post('/signup', (req, res) => {
  console.log('POST signup user:');
  console.log(req.body);

  let error = validate(req.body);
  if (error) {
    return res.status(400).send({ result: error });
  }
  const { email, password } = req.body;
  User.findOne({ email }, (errFind, existingUser) => {
    if (errFind) {
      console.error(errFind);
      return res.status(400).send({ result: errFind });
    }
    if (existingUser) {
      error = 'Адрес эл.почты уже используется';
      return res.status(400).send({ result: error });
    }

    const newUser = new User({ email, password });
    newUser.save(errSave => {
      if (errSave) {
        console.error(errSave);
        return res.status(400).send({ result: errSave });
      }

      const userInfo = setUserInfo(newUser);
      return res.json({
        result: {
          token: generateToken(userInfo),
          user: userInfo
        }
      });
    });
  });
});

// router.post('/login', requireSignin, (req, res) => {
//   console.log('POST user login:');
//   console.log(req.body);
//
//   // return res.json({ result: { token: tokenForUser(req.user) } });
//   const userInfo = setUserInfo(req.user);
//
//   return res.json({
//     result: {
//       token: generateToken(userInfo),
//       user: userInfo
//     }
//   });
// });

router.post('/login', (req, res, next) => {
  console.log('POST user login:');
  console.log(req.body);

  return passport.authenticate('local', (err, user) => {
    if (err) {
      if (err.name === 'IncorrectCredentials') {
        return res.status(400).json({ result: err.message });
      }
      return res.status(400).json({ result: 'Ошибка на сервере!' });
    }
    const userInfo = setUserInfo(user);
    return res.json({
      result: {
        token: generateToken(userInfo),
        user: userInfo
      }
    });
  })(req, res, next);
});

router.get('/all', requireAuth, roleAuthorization(['admin']), (req, res) => {
  console.log('GET all users');
  User.find()
    .select('-password')
    .exec((err, results) => {
      if (err) {
        const errorMessage = 'Error to query all users!';
        console.error(errorMessage);
        return res.status(400).send({ result: errorMessage });
      }
      return res.status(200).send({ result: results });
    });
});

router.get('/current', requireAuth, (req, res) => {
  console.log('GET current user');
  const { user } = req;
  const userInfo = setUserInfo(user);
  return res.status(200).send({ result: userInfo });
});

export default router;
