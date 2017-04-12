const {LOG_LEVEL} = require('@consoless/core');

const consoleMethodsMap = {
  [LOG_LEVEL.WARN]: 'warn',
  [LOG_LEVEL.ERROR]: 'error',
  [LOG_LEVEL.INFO]: 'info',
  [LOG_LEVEL.DEBUG]: 'log'
};

module.exports = (level, parts) => {
  const method = consoleMethodsMap[level];

  if (method) {
    console[method].apply(console, parts);
  }
};
