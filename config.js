const port = 8101;

const targetMap = new Map();
targetMap.set('binance', 'https://api.binance.com');
targetMap.set('binancef', 'https://fapi.binance.com');
targetMap.set('bitmex', 'https://www.bitmex.com');
targetMap.set('huobi', 'https://api.hbdm.com');

module.exports = {
  port, targetMap
};
