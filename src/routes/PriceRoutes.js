import express from 'express';
import passport from 'passport';
import bearerPrices from '../middlewares/bearerPrices';
import config from '../config/config';
import Price from '../models/Price';
import utils from './FakeMedUtils';
import log from '../services/Logging';

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

router.get('/', requireAuth, (req, res) => {
  log.info('GET prices');
  log.info(req.query);

  if (req.query === undefined || req.query.queryString === '') {
    return res.status(400).send({ result: 'Пустая строка запроса' });
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
      return res.status(200).send({ result: results });
    });
});

export default router;
