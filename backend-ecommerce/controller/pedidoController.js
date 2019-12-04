'use strict';

var Pedido = require('../model/pedidoModel.js');

exports.listar_pedidosFinalizados = function(req, res) {
  Pedido.listaPedidosFinalizados(req.params.idCliente,function(err, produto) {
    console.log(produto[0].data);
    if (err)
      res.send(err);
    res.send(produto);
  });
};

exports.listar_produtos_sacola = function(req, res) {
    Pedido.getProdutosSacola(req.params.idCliente,function(err, produto) {
      if (err)
        res.send(err);
      res.send(produto);
    });
  };

exports.add_produto_sacola = function(req, res) {
  var new_pedido = new Pedido(req.body);
  console.log(new_pedido)
   if(!new_pedido.idCliente || !new_pedido.idProduto || !new_pedido.tamanho){
        res.status(400).send({ error:true, message: 'Campo(s) vazio(s)'});

    }else{
        Pedido.addProdutoSacola(new_pedido, function(err, pedido) {
            if (err)
                res.send(err);
            res.json(pedido);
        });
    }
};

// idProduto, idCliente, tamanho, quantidade
exports.atualiza_quantidade_produto = function(req, res) {
  var new_pedido = new Pedido(req.body);
  if(!new_pedido.idCliente || !new_pedido.idProduto || !new_pedido.quantidade || !new_pedido.tamanho){
      res.status(400).send({ error:true, message: 'Campo(s) vazio(s)'});
  }else{
      Pedido.atualizaQuantidade(new_pedido, function(err, produto) {
          if (err)
            res.send(err);
          res.json(produto);
      });
  }
};

exports.finaliza_pedido = function(req, res) {
    var new_pedido = new Pedido(req.body);
    if(!new_pedido.idCliente || !new_pedido.formaPagamento ){
        res.status(400).send({ error:true, message: 'Campo(s) vazio(s)'});

    }else{
        Pedido.finalizarPedido(new_pedido, function(err, produto) {
            if (err)
              res.send(err);
            res.json(produto);
        });
    }
};

exports.delete_produto_carrinho= function(req, res) {
    var new_pedido = new Pedido(req.body);
    if(!new_pedido.idCliente || !new_pedido.idProduto){
        console.log(new_pedido)
        res.status(400).send({ error:true, message: 'Campo(s) vazio(s)'});

    }else{
        Pedido.removerProdutoSacola( new_pedido, function(err, pedido) {
            if (err)
            res.send(err);
            res.json({ message: 'Produto successfully deleted' });
        });
    }
};