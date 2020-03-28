const assert = require('assert');
const app = require('../../src/app');

describe('\'hangseng\' service', () => {
  it('registered the service', () => {
    const service = app.service('hangseng');

    assert.ok(service, 'Registered the service');
  });
});
