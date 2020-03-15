const { config } = require('./config.js');

const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
  target: config.target,
  changeOrigin: true,
  proxyTimeout: 6000
};

app.use('/', createProxyMiddleware(options));

const port = config.port;
app.listen(port, function() {
  console.log("http://127.0.0.1:%s", port);
});
