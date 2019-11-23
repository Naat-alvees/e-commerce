'use strict';

var Fotos = require('../model/fotosModel.js');

exports.list_all_fotos = function(req, res) {
  Fotos.getAllFotos(function(err, fotos) {

    if (err)
      res.send(err);
      // console.log('res', post);
    res.send(fotos);
  });
};

exports.create_a_foto = function(req, res) {
  
  var new_foto = new Fotos(req.body);
  console.log(req.body)
  console.log(new_foto)
  //handles null error 
   if(!new_foto.idproduto || !new_foto.foto){
        //console.log(new_foto)
        res.status(400).send({ error:true, message: 'Campo(s) vazio(s)'});

    }else{
        Fotos.createFotos(new_foto, function(err, fotos) {
            if (err)
                res.send(err);
            res.json(fotos);
        });
    }
};


exports.read_a_fotos = function(req, res) {
  Fotos.getFotosById(req.params.fotosId, function(err, fotos) {
    if (err)
      res.send(err);
    res.json(fotos);
  });
};


exports.update_a_fotos = function(req, res) {
  Fotos.updateById(req.params.fotosId, new Fotos(req.body), function(err, fotos) {
    if (err)
      res.send(err);
    res.json(fotos);
  });
};


exports.delete_a_fotos = function(req, res) {
  Fotos.remove( req.params.fotosId, function(err, fotos) {
    if (err)
      res.send(err);
    res.json({ message: 'Foto successfully deleted' });
  });
};