'user strict';
var sql = require('./db.js');

//Task object constructor
var Fotos = function(fotos){
    this.idproduto = fotos.idproduto;
    this.principal = fotos.principal;
    this.foto = fotos.foto;
};
Fotos.createFotos = function (newFotos, result) {    
    sql.query("INSERT INTO fotos set ?", newFotos, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res.insertId);
            }
        });           
};

Fotos.getFotosByProduto = function (produtoId, result) {
    sql.query("Select CONVERT(foto USING utf8) as data from fotos where idproduto = ? ", produtoId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                //console.log(res)
                result(null, res);
            }
        });   
};

Fotos.getFotosPrincipalByProduto = function (produtoId, result) {
    sql.query("Select CONVERT(foto USING utf8) as data from fotos where idproduto = ? AND fotoPrincipal=1 ", produtoId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                //console.log(res)
                result(null, res[0]);
            }
        });   
};





module.exports= Fotos;