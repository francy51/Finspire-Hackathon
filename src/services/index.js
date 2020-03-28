const users = require('./users/users.service.js');
const hsbc = require('./hsbc/hsbc.service.js');
const hangseng = require('./hangseng/hangseng.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(hsbc);
  app.configure(hangseng);
};
