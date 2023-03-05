'use strict';
module.exports = function(app) {
  var usersCtrl = require('./controllers/usersController');

  // todoList Routes
  app.route('/users')
    .get(usersCtrl.get)
    .post(usersCtrl.store);


  app.route('/users/:id')
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);
};
