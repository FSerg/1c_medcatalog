// import jwt from 'jwt-simple';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import config from '../config/config';

// const tokenForUser = user => {
//   const timestamp = new Date().getTime();
//   return jwt.encode({ sub: user.id, iat: timestamp }, config.jwtSecret);
// };

const generateToken = user => {
  return jwt.sign(user, config.jwtSecret, {
    expiresIn: '30d'
  });
};

const setUserInfo = user => {
  return {
    _id: user._id,
    email: user.email,
    role: user.role
  };
};

const validate = data => {
  if (!isEmail(data.email)) {
    return 'Некорректный адрес эл.почты';
  }

  if (!data.email) {
    return 'Адрес эл.почты обязателен для заполнения';
  }

  if (!data.password) {
    return 'Пароль не может быть пустым';
  }

  return '';
};

module.exports = {
  validate,
  // tokenForUser
  generateToken,
  setUserInfo
};
