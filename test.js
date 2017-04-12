import coreLess, {LOG_LEVEL} from '@consoless/core';

const transportConsole = require('./index');

let core;

beforeEach(() => {
  core = coreLess.profile();
  core.addTransport(transportConsole);
  core.setLevel(LOG_LEVEL.ALL);

  global.console = {
    log: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    info: jest.fn()
  };
});

test('console.log call', () => {
  transportConsole(LOG_LEVEL.DEBUG, ['log']);

  expect(console.log).toBeCalled();
  expect(console.log).toBeCalledWith('log');
});

test('console.info call', () => {
  transportConsole(LOG_LEVEL.INFO, ['info']);

  expect(console.info).toBeCalled();
  expect(console.info).toBeCalledWith('info');
});

test('console.error call', () => {
  transportConsole(LOG_LEVEL.ERROR, ['error']);

  expect(console.error).toBeCalled();
  expect(console.error).toBeCalledWith('error');
});

test('console.warn call', () => {
  transportConsole(LOG_LEVEL.WARN, ['warn']);

  expect(console.warn).toBeCalled();
  expect(console.warn).toBeCalledWith('warn');
});

test('unknown log level', () => {
  transportConsole(null, ['hello']);

  expect(console.log).not.toBeCalled();
  expect(console.info).not.toBeCalled();
  expect(console.warn).not.toBeCalled();
  expect(console.error).not.toBeCalled();
});
