import cors from 'cors';
import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import favicon from 'serve-favicon';

import cfg from './config.json';

export const credentials = {
  key: readFileSync(
    path.join(__dirname, cfg.certificate.key) /* {
        encoding: cfg.certificate.encoding,
      } */
  ),
  cert: readFileSync(
    path.join(__dirname, cfg.certificate.cert) /* {
        encoding: cfg.certificate.encoding,
      } */
  ),
};

export const app = express();

// app.enable('strict routing');
app
  // .options('*', cors(cfg.corsOptions))
  // .use(cors(cfg.corsOptions))
  .use(cors())
  .use((_req, res, next) => {
    res.set({
      'Content-Security-Policy': [
        // 'default-src *',
        "script-src 'self' * 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline'",
        // "img-src 'self' *",
        // "connect-src 'self' *",
        // "font-src 'self' *",
        // "object-src 'self' *",
        // "media-src 'self' *",
        // "frame-src 'self' *",
      ].join('; '),
      'Access-Control-Allow-Headers': [
        'X-CSRF-Token',
        'X-Requested-With',
        'Origin',
        'Content-Type',
        'Accept',
        'Accept-Version',
        'Cookie',
        'User-Agent',
        'X-User-Agent',
        'content-type',
        'Content-Length',
        'Content-MD5',
        'Date',
        'X-Api-Version',
      ].join(', '),
      'Access-Control-Allow-Methods': [
        'GET',
        'POST',
        'OPTIONS',
        'PUT',
        'PATCH',
        'DELETE',
      ].join(', '),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Expose-Headers': 'set-cookie',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    });

    // res.setHeader('Access-Control-Allow-Origin', '* https://localhost');

    next();
  })
  .use(favicon(path.join(__dirname, '..', cfg.paths.public, 'favico.ico')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', '.ejs')
  .use(express.json({ limit: '50mb' }))
  .use(express.urlencoded({ limit: '50mb' }))
  .use(
    express.static(path.resolve(path.join(__dirname, '..', cfg.paths.public)))
  )
  .use(
    // cfg.uris.root,
    new RegExp(`${cfg.uris.root}$`),
    // cors(cfg.corsOptions),
    (_req, res) => res.render('./', { lang: cfg.lang, domData: cfg.domData })
  );
