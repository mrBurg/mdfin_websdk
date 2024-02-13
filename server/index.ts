// import cors from 'cors';
import express from 'express';
import http from 'http';
import https from 'https';
import { argv } from 'yargs';

import cfg from './config.json';
import { serverCallback } from './utils';
import api from './api';
import { credentials, app } from './server';
import { TArgv } from './@types';

(async () => {
  const { httpPort, httpsPort } = argv as TArgv;

  app.use('/api', api).all(
    cfg.uris.all,
    // cors(cfg.corsOptions),
    (_req: unknown, res: express.Response) =>
      res.send({ status: cfg.status.ok })
  );

  http
    .createServer(app)
    .listen(
      httpPort || cfg.port.http,
      serverCallback('http', httpPort || cfg.port.http)
    );

  https
    .createServer(credentials, app)
    .listen(
      httpsPort || cfg.port.https,
      serverCallback('https', httpsPort || cfg.port.https)
    );
})();
