'use strict';
module.exports = function(app) {
  var cliente = require('../controller/clienteController');
  var produto = require('../controller/produtoController');
  var foto = require('../controller/fotosController')
 

  // Cliente Routes
  app.route('/cliente')
    .get(cliente.list_all_cliente)
    .post(cliente.create_a_cliente);
   
   app.route('/cliente/:clienteId')
    .get(cliente.read_a_cliente)
    .put(cliente.update_a_cliente)
    .delete(cliente.delete_a_cliente);

    // Produto Routes
  app.route('/produto')
    .get(produto.list_all_produto)
    .post(produto.create_a_produto);
  
  app.route('/produto/:produtoId')
    .get(produto.read_a_produto)
    .put(produto.update_a_produto)
    .delete(produto.delete_a_produto);

  app.route('/produto/categoria/:nomeCategoria')
    .get(produto.list_produto_categoria);

  app.route('/pesquisa/:stringPesquisa')
    .get(produto.list_pesquisa);

  app.route('/fotos')
    .get(foto.list_all_fotos)
    .post(foto.create_a_foto);

  app.route('/fotos/produto/:produtoId')
    .get(foto.read_a_fotos_produto);

}