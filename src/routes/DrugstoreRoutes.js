import express from 'express';
import passport from 'passport';
import bearerPrices from '../middlewares/bearerPrices';
import Drugstore from '../models/Drugstore';
import log from '../services/Logging';

import { roleAuthorization } from '../services/UsersServices';

const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/', bearerPrices, (req, res) => {
  log.info('POST drugstore from 1C:');
  const dstore = req.body;

  Drugstore.findOneAndUpdate(
    { drugstore_uid: dstore.drugstore_uid },
    dstore,
    { upsert: true, new: true },
    err => {
      if (err) {
        const errMsg = 'Ошибка при записи данных об аптеке в БД';
        log.error(errMsg);
        log.error(err);
        return res.status(400).send({ result: 'error' });
      }
      return res.status(200).send({ result: 'success' });
    }
  );
});

router.delete('/', requireAuth, roleAuthorization(['admin']), (req, res) => {
  log.info('DELETE one drugstore');
  log.info(req.query);

  if (req.query === undefined) {
    const errMsg = 'В запросе отсутствует идентификатор аптеки';
    log.error(errMsg);
    return res.status(400).send({ result: errMsg });
  }

  if (!req.query.drugstore_uid) {
    const errMsg = 'В параметре запроса не заполнен идентификатор аптеки';
    log.error(errMsg);
    return res.status(400).send({ result: errMsg });
  }

  Drugstore.findOneAndRemove(
    { drugstore_uid: req.query.drugstore_uid },
    err => {
      if (err) {
        const errMsg = 'Ошибка при вудалении аптеки из БД';
        log.error(errMsg);
        log.error(err);
        return res.status(400).send({ result: errMsg });
      }
      return res.status(200).send({ result: 'success' });
    }
  );
});

router.get('/all', (req, res) => {
  log.info('GET all drugstores');

  Drugstore.find({})
    .sort({ drugstore_name: 1 })
    .exec((err, results) => {
      if (err) {
        const errMsg = 'Ошибка при выполнении запроса выборки аптек из БД';
        log.error(errMsg);
        log.error(err);
        return res.status(400).send({ result: errMsg });
      }
      return res.status(200).send({ result: results });
    });
});

router.get('/', (req, res) => {
  log.info('GET one drugstore');
  log.info(req.query);

  if (req.query === undefined) {
    const errMsg = 'В запросе отсутствует идентификатор аптеки';
    log.error(errMsg);
    return res.status(400).send({ result: errMsg });
  }

  if (!req.query.drugstore_uid) {
    const errMsg = 'В параметре запроса не заполнен идентификатор аптеки';
    log.error(errMsg);
    return res.status(400).send({ result: errMsg });
  }

  Drugstore.findOne(
    { drugstore_uid: req.query.drugstore_uid },
    (err, result) => {
      if (err) {
        const errMsg = 'Ошибка при выполнении запроса поиска аптеки в БД';
        log.error(errMsg);
        log.error(err);
        return res.status(400).send({ result: errMsg });
      }
      if (!result) {
        const errMsg = 'Не удалось найти аптеку в БД';
        log.error(errMsg);
        return res.status(400).send({ result: errMsg });
      }
      return res.status(200).send({ result });
    }
  );
});

export default router;
