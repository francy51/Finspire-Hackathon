// Initializes the `hangseng` service on path `/hangseng`
const { Hangseng } = require('./hangseng.class');
const hooks = require('./hangseng.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hangseng', new Hangseng(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hangseng');

  service.hooks(hooks);
};
