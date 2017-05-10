'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import express from 'express';
import Debug from 'debug';
import config from './config';

const app = express();
const debug = Debug('rapidinspect-server:app');

import init from './config/express';
init(app);

console.log(config);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(err);
});

process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
