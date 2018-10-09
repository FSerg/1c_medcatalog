import express from 'express';
import passport from 'passport';
import bearerPrices from '../middlewares/bearerPrices';
import config from '../config/config';
import Price from '../models/Price';
import utils from './Utils';
import log from '../services/Logging';
import jwt from 'jsonwebtoken';
// import { getRoleByJwtData } from '../services/UsersServices';

const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/', bearerPrices, (req, res) => {
  log.info('POST Price from 1C');
  // console.log(req.body);

  const DataArray = req.body;
  // we must get array
  if (!Array.isArray(DataArray)) {
    const errorMessage = 'Price from 1C must be Array!';
    log.error(errorMessage);
    return res.status(400).send({ result: errorMessage });
  }

  // write array to DB
  Price.insertMany(DataArray, err => {
    if (err) {
      log.error(err);
      return res.status(400).send({ result: 'error' });
    }
    log.info('Prices Added!');
    return res.status(200).send({ result: 'success' });
  });
});

router.delete('/', bearerPrices, (req, res) => {
  log.info('Delete prices from 1C:');
  if (req.query === undefined) {
    return res.status(400).send({
      result: utils.errorMessage(req.query, 'req.query.drugstore_uid')
    });
  }

  const filter = {
    'drugstore.drugstore_uid': req.query.drugstore_uid
  };
  Price.deleteMany(filter, err => {
    if (err) {
      log.error(err);
      return res.status(400).send({ result: 'error' });
    }
    log.info('Prices DELETED!');
    return res.status(200).send({ result: 'success' });
  });
});

router.get('/', (req, res) => {
  log.info('GET prices');
  log.info(req.query);

  if (req.query === undefined || req.query.queryString === '') {
    return res.status(400).send({ result: 'Пустая строка запроса' });
  }

  // determine user role
  console.log('req.headers: ');
  console.log(req.headers);
  let userRole = 'guest';
  if (req.headers.authorization) {
    try {
      const jwtData = jwt.verify(req.headers.authorization, config.jwtSecret);
      console.log('verifiedJwt: ' + JSON.stringify(jwtData));
      userRole = jwtData.role;
    } catch (err) {
      // err
      console.log('Error parsing token');
    }
    // const jwtData = jwt.verify(req.headers.authorization, config.jwtSecret);
    // userRole = await getRoleByJwtData(jwtData);
    if (userRole === 'guest') {
      console.log('Role: GUEST');
    } else {
      console.log('Role: ' + userRole);
    }
  }

  Price.find({
    product: {
      $regex: new RegExp(req.query.queryString.replace(/\s+/g, '\\s+'), 'gi')
    }
  })
    .limit(parseInt(config.resultsCounts, 10))
    .sort({ product: 1 })
    .exec((err, results) => {
      if (err) {
        const errorMessage = 'Error to query prices!';
        log.error(errorMessage);
        log.error(err);
        return res.status(400).send({ result: errorMessage });
      }

      console.log(results);

      if (userRole === 'guest') {
        const modResults = results.map(result => {
          if (result.count >= 5) {
            result.countStr = '> 5 шт';
          } else {
            result.countStr = '1-5 шт';
          }
          result.batches.forEach(batch => {
            batch.expiration_date = '';
            if (batch.count >= 5) {
              batch.countStr = '> 5 шт';
            } else {
              batch.countStr = '1-5 шт';
            }
          });
          return result;
        });
        // console.log('Modified Results:');
        // console.log(modResults);
        return res.status(200).send({ result: modResults });
      } else {
        const modResults = results.map(result => {
          result.countStr = `${result.count} шт`;
          result.batches.forEach(batch => {
            batch.countStr = `${batch.count} шт`;
          });
          return result;
        });
        return res.status(200).send({ result: modResults });
      }
    });
});

export default router;
