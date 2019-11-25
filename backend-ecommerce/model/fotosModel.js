'user strict';
var sql = require('./db.js');

//Task object constructor
var Fotos = function(fotos){
    this.idproduto = fotos.idproduto;
    this.foto = fotos.ft;
};
Fotos.createFotos = function (newFotos, result) {    
        sql.query("INSERT INTO fotos set ?", newFotos, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    // console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};

Fotos.getFotosById = function (fotosId, result) {
    sql.query("Select * from fotos where idfotos = ? ", fotosId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

Fotos.getAllFotos = function (result) {
        sql.query("Select * from fotos", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                //   console.log('post : ', res);  

                 result(null, res);
                }
            });   
};
Fotos.updateById = function(id, fotos, result){
  sql.query("UPDATE fotos SET foto = ? WHERE idfotos = ?", [fotos.foto, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

Fotos.remove = function(id, result){
     sql.query("DELETE FROM fotos WHERE idfotos = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Fotos;