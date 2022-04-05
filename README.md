# ipmirror-js

[![NPM Package Version][https://img.shields.io/npm/v/ipmirror.js.svg]][https://npmjs.org/package/ipmirror.js]
[![NPM Package Downloads][https://img.shields.io/npm/dm/ipmirror.js.svg]][https://npmjs.org/package/ipmirror.js]
[![Known Vulnerabilities](https://snyk.io/test/github/ayanamitech/ipmirror.js/badge.svg?style=flat-square)](https://snyk.io/test/github/ayanamitech/ipmirror.js)
[![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg?style=flat-square)](https://www.apache.org/licenses/LICENSE-2.0)

Javascript implementation of IPMirror API service ( Client side replacement for geoip-lite )

## Installation

### Node

```bash
npm install ipmirror.js
```

### Yarn

```bash
yarn add ipmirror.js
```

### Browser / Node.js / React Native

Assuming that you have been used [geoip-lite](https://github.com/geoip-lite/node-geoip) like the following

```js
const geoip = require('geoip-lite');

const ips = [
  '1.1.1.1',
  '1.0.0.1',
  '8.8.8.8',
  '8.8.4.4'
];

const queryIps = () => {
  ips.map((ip) => {
    const result = geoip.lookup(ip);
    console.log(result);
  });
}
```

To use ipmirror.js, you can create an instance of an object with the new operator, and replace it with a promise style lookup function instead.

```js
const IPMirror = require('ipmirror.js');

const ips = [
  '1.1.1.1',
  '1.0.0.1',
  '8.8.8.8',
  '8.8.4.4'
];

const queryIps = () => {
  // Using ipmirror.dev for default, define your self-hosted instance in the constructor.
  const geoip = new IPMirror();

  ips.map((ip) => {
    const result = await geoip.lookup(ip);
    console.log(result);
  });
}
```
