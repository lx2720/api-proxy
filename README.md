# api proxy
a http proxy of api

## run
```shell
npm install
npm start
```

## config
Proxy /api requests to http://www.example.org
```javascript
const targetMap = new Map();
targetMap.set('example', 'http://www.example.org');
// http://localhost:8101/example/api/foo/bar -> http://www.example.org/api/foo/bar
```
