import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cron from 'node-cron';
import config from './config/config';

import UsersRoutes from './routes/UsersRoutes';
import FakeMedRoutes from './routes/FakeMedRoutes';
import PriceRoutes from './routes/PriceRoutes';
import FakeMedUtils from './routes/FakeMedUtils';

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, { useMongoClient: true }, err => {
  if (err) console.error(err);
  else {
    console.log('MongoDB connected!');

    // cron job to update fakemeds
    cron.schedule(config.cronSchedule, () => {
      console.log(`Start update FakeMeds: ${Date()}`);
      FakeMedUtils.UpdateFakeMeds();
    });
  }
});

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// ROUTES
// users - routes
app.use('/api/users', UsersRoutes);
// other - routes
app.use('/api/fakemed', FakeMedRoutes);
app.use('/api/price', PriceRoutes);

// test route
app.get('/test', (req, res) => {
  res.status(200).send({ result: 'GET: /test' });
});

app.listen(config.port, () =>
  console.log(`Server running (port: ${config.port})`)
);
