'use strict';

var Cliente = require('../model/clienteModel.js');

exports.list_all_cliente = function(req, res) {
  Cliente.getAllCliente(function(err, cliente) {

    if (err)
      res.send(err);
      // console.log('res', post);
    res.send(cliente);
  });
};



exports.create_a_cliente = function(req, res) {
  var new_cliente = new Cliente(req.body);
  //handles null error 
   if(!new_cliente.nome || !new_cliente.email || !new_cliente.telefone || !new_cliente.rua || !new_cliente.numero || !new_cliente.bairro || !new_cliente.cidade || !new_cliente.estado || !new_cliente.senha){

        res.status(400).send({ error:true, message: 'Campo(s) vazio(s)'});

    }else{
        Cliente.createCliente(new_cliente, function(err, cliente) {
            if (err)
                res.send(err);
            res.json(cliente);
        });
    }
};


exports.read_a_cliente = function(req, res) {
  Cliente.getClienteById(req.params.clienteId, function(err, cliente) {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};


exports.update_a_cliente = function(req, res) {
  Cliente.updateById(req.params.clienteId, new Cliente(req.body), function(err, cliente) {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};


exports.delete_a_cliente = function(req, res) {
  Cliente.remove(req.params.clienteId, function(err, cliente) {
    if (err)
      res.send(err);
    res.json({ message: 'Cliente successfully deleted' });
  });
};