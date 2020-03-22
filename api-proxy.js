const { port, targetMap } = require('./config.js');

const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

function startProxy(name, target) {
  const options = {
    target: target,
    changeOrigin: true,
    proxyTimeout: 6000,
    pathRewrite: {
      [`/${name}/*`] : '/*'
    }
  };
  app.use(`/${name}`, createProxyMiddleware(options));
}

targetMap.forEach((v, k) => {
  startProxy(k, v);
});

app.listen(port, '0.0.0.0', function() {
  console.log("http://127.0.0.1:%s", port);
});
