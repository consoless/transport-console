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
  return Promise.all([core.log('hello'), core.debug('world')])
    .then(() => {
      expect(console.log.mock.calls.length).toBe(2);
      expect(console.log.mock.calls[0][0]).toBe('hello');
      expect(console.log.mock.calls[1][0]).toBe('world');
    });
});

test('console.info call', () => {
  return core.info('hello')
    .then(() => {
      expect(console.info).toBeCalled();
      expect(console.info).toBeCalledWith('hello');
    });
});

test('console.error call', () => {
  return Promise.all([core.error('hello'), core.exception('world')])
    .then(() => {
      expect(console.error.mock.calls.length).toBe(2);
      expect(console.error.mock.calls[0][0]).toBe('hello');
      expect(console.error.mock.calls[1][0]).toBe('world');
    });
});

test('console.warn call', () => {
  return core.warn('hello')
    .then(() => {
      expect(console.warn).toBeCalled();
      expect(console.warn).toBeCalledWith('hello');
    });
});

test('unknown log level', () => {
  core = coreLess.profile();

  core.addTransport((level, parts) => transportConsole(null, parts));

  return core.warn('hello')
    .then(() => {
      expect(console.log).not.toBeCalled();
      expect(console.info).not.toBeCalled();
      expect(console.warn).not.toBeCalled();
      expect(console.error).not.toBeCalled();
    });
});
