const port = 8100;

const targetMap = new Map();
targetMap.set('binance', 'https://api.binance.com');
targetMap.set('bitmex', 'https://www.bitmex.com');
targetMap.set('huobi', 'https://api.hbdm.com');

module.exports = {
  port, targetMap
};
