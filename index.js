const fetch = require('cross-fetch');
const utils = require('./lib/utils');

class IPMirror {
  constructor(url, options, headers) {
    this.url = url || 'https://ipmirror.dev';
    this.options = options;
    this.headers = headers;
  }

  async lookup(ip) {
    try {
      const ipToQuery = ip ? '?ip=' + ip : '';
      const res = await fetch(this.url + ipToQuery, {
        ...this.options,
        method: 'GET',
        headers: {
          ...this.headers,
          'Content-Type': 'application/json',
        }
      });

      if (res.status >= 400) {
        console.error('Server Error:', res.status);
        throw new Error('Bad response from server');
      }

      const result = await res.json();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Error while doing lookup');
    }
  }

  // Pretty function forked from geoip-lite
  // https://github.com/geoip-lite/node-geoip/blob/main/lib/geoip.js#L474
  pretty(ip) {
    if (typeof ip === 'string') {
      return ip;
    } else if (typeof ip === 'number') {
      return utils.ntoa4(ip);
    } else if (ip instanceof Array) {
      return utils.ntoa6(ip);
    }

    return ip;
  }
}

module.exports = IPMirror;
