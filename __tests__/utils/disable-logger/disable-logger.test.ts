import {
  disableLogger,
} from 'src/utils';
import {
  logger,
} from 'src/internals';

describe('with the imported disable-logger module', () => {
  it('should be able to disable the logger', () => {
    expect.hasAssertions();

    disableLogger();

    expect(logger.isEnabled()).toBe(false);
  }, 30000);
});
