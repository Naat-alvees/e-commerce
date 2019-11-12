'use strict';
module.exports = function(app) {
  var cliente = require('../controller/appController');
 

  // Cliente Routes
  app.route('/cliente')
    .get(cliente.list_all_cliente)
    .post(cliente.create_a_cliente);
   
   app.route('/cliente/:clienteId')
    .get(cliente.read_a_cliente)
    .put(cliente.update_a_cliente)
    .delete(cliente.delete_a_cliente);
};