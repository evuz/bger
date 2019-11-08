const express = require('express');
const cors = require('cors');
const proxy = require('http-proxy-middleware');
const app = express();

const PROXY_URL = process.env.proxy_url;
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(
  '/',
  proxy({
    target: PROXY_URL,
    changeOrigin: true,
  }),
);

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
