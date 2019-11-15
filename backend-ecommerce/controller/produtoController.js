'use strict';

var Produto = require('../model/produtoModel.js');

exports.list_all_produto = function(req, res) {
  Produto.getAllProduto(function(err, produto) {

    if (err)
      res.send(err);
      // console.log('res', post);
    res.send(produto);
  });
};



exports.create_a_produto = function(req, res) {
  var new_produto = new Produto(req.body);
  //handles null error 
   if(!new_produto.titulo || !new_produto.descricao || !new_produto.preco  || !new_produto.qtdP || !new_produto.qtdM || !new_produto.qtdG || !new_produto.categoria){
        console.log(new_produto)
        res.status(400).send({ error:true, message: 'Campo(s) vazio(s)'});

    }else{
        Produto.createProduto(new_produto, function(err, produto) {
            if (err)
                res.send(err);
            res.json(produto);
        });
    }
};


exports.read_a_produto = function(req, res) {
  Produto.getProdutoById(req.params.produtoId, function(err, produto) {
    if (err)
      res.send(err);
    res.json(produto);
  });
};


exports.update_a_produto = function(req, res) {
  Produto.updateById(req.params.produtoId, new Produto(req.body), function(err, produto) {
    if (err)
      res.send(err);
    res.json(produto);
  });
};


exports.delete_a_produto = function(req, res) {
  Produto.remove( req.params.produtoId, function(err, produto) {
    if (err)
      res.send(err);
    res.json({ message: 'Produto successfully deleted' });
  });
};