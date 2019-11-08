const express = require('express');
const cors = require('cors');
const proxy = require('http-proxy-middleware');
const app = express();

const PROXY_URL = process.env.proxy_url;

app.use(cors());
app.use(
  '/',
  proxy({
    target: PROXY_URL,
    changeOrigin: true,
  }),
);

app.listen(3000);
