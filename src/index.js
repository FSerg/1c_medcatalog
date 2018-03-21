import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cron from 'node-cron';
import config from './config/config';

import UsersRoutes from './routes/UsersRoutes';
import FakeMedRoutes from './routes/FakeMedRoutes';
import PriceRoutes from './routes/PriceRoutes';
import DrugstoreRoutes from './routes/DrugstoreRoutes';

import FakeMedUtils from './routes/FakeMedUtils';
import log from './services/Logging';

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, { useMongoClient: true }, err => {
  if (err) log.error(err);
  else {
    console.log('MongoDB connected!');

    // cron job to update fakemeds
    cron.schedule(config.cronSchedule, () => {
      log.info(`Start update FakeMeds: ${Date()}`);
      FakeMedUtils.UpdateFakeMeds();
    });
  }
});

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// BACKEND
// ROUTES
// users - routes
app.use('/api/users', UsersRoutes);
// other - routes
app.use('/api/fakemed', FakeMedRoutes);
app.use('/api/price', PriceRoutes);
app.use('/api/drugstore', DrugstoreRoutes);

// test route
app.get('/test', (req, res) => {
  res.status(200).send({ result: 'GET: /test' });
});

// FRONTEND
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(config.port, () =>
  console.log(`Server running (port: ${config.port})`)
);
