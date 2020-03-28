// Initializes the `hsbc` service on path `/hsbc`
const { Hsbc } = require('./hsbc.class');
const hooks = require('./hsbc.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hsbc', new Hsbc(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hsbc');

  service.hooks(hooks);
};
