[![Build Status](https://img.shields.io/travis/consoless/transport-console/master.svg)](https://travis-ci.org/consoless/transport-console)
[![Coverage](https://img.shields.io/codecov/c/github/consoless/transport-console/master.svg)](https://codecov.io/gh/consoless/transport-console)
[![Dependencies](https://img.shields.io/david/consoless/transport-console.svg)](https://david-dm.org/consoless/transport-console)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/consoless/transport-console)

# Transport Console

[![Greenkeeper badge](https://badges.greenkeeper.io/consoless/transport-console.svg)](https://greenkeeper.io/)

Transport for [@consoless/core](https://github.com/consoless/core) sends logs to console.

Methods map:

* `LOG_LEVEL.WARN` - `console.warn`
* `LOG_LEVEL.ERROR` - `console.error`
* `LOG_LEVEL.INFO` - `console.info`
* `LOG_LEVEL.DEBUG` - `console.log`

## Install

```
$ npm install --save @consoless/transport-console
```

## Usage

Include transport module:

```javascript
// commonjs / node
const transportConsole = require('@consoless/transport-console');

// ES6
import transportConsole from '@consoless/transport-console';
```

```html
<!-- Browsers -->
<script src="https://unpkg.com/@consoless/transport-console/dist/bundle.umd.js"></script>
<script>
  // accessible as a `coreLessTransportConsole` global variable
  console.log(coreLessTransportConsole);
</script>
```

Usage:

```javascript
const transportConsole = require('@consoless/transport-console');
const core = require('@consoless/core');
const logger = core.profile();

logger.setLevel(core.LOG_LEVEL.DEBUG);
logger.addTransport(transportConsole);
logger.log('Hello, unicorns');

// => 'Hello, unicorns'
```

## License

MIT © [Alexey Lizurchik](https://github.com/likerRr)
