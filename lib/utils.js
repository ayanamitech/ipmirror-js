/**
  Util function forked from geoip-lite
	https://github.com/geoip-lite/node-geoip/blob/main/lib/utils.js
**/

const utils = module.exports = {};

utils.ntoa4 = function(n) {
  n = n.toString();
  n = '' + (n>>>24&0xff) + '.' + (n>>>16&0xff) + '.' + (n>>>8&0xff) + '.' + (n&0xff);

  return n;
};

utils.ntoa6 = function(n) {
  var a = '[';

  for (var i = 0; i<n.length; i++) {
    a += (n[i]>>>16).toString(16) + ':';
    a += (n[i]&0xffff).toString(16) + ':';
  }

  a = a.replace(/:$/, ']').replace(/:0+/g, ':').replace(/::+/, '::');

  return a;
};
