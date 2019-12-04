'use strict';

var Fotos = require('../model/fotosModel.js');



exports.create_a_foto = function(req, res) {
  var new_foto = new Fotos(req.body);
   if(!new_foto.idproduto || !new_foto.foto){
        res.status(400).send({ error:true, message: 'Campo(s) vazio(s)'});
    }else{
        Fotos.createFotos(new_foto, function(err, fotos) {
            if (err)
                res.send(err);
            res.json(fotos);
        });
    }
};



exports.read_a_fotos_produto = function(req, res) {
  Fotos.getFotosByProduto(req.params.produtoId, function(err, fotos) {
    if (err)
      res.send(err);
    res.json(fotos);
  });
};

exports.read_a_foto_principal_produto = function(req, res) {
  Fotos.getFotosPrincipalByProduto(req.params.produtoId, function(err, fotos) {
    if (err)
      res.send(err);
    res.json(fotos);
  });
};

