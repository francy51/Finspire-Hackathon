const assert = require('assert');
const app = require('../../src/app');

describe('\'hsbc\' service', () => {
  it('registered the service', () => {
    const service = app.service('hsbc');

    assert.ok(service, 'Registered the service');
  });
});
