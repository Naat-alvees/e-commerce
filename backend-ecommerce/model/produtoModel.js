'user strict';
var sql = require('./db.js');

//Task object constructor
var Produto = function(produto){
    this.titulo = produto.titulo;
    this.descricao = produto.descricao;
    this.preco = produto.preco;
    this.qtdP = produto.qtdP;
    this.qtdM = produto.qtdM;
    this.qtdG = produto.qtdG;
    this.categoria = produto.categoria;
};
Produto.createProduto = function (newProduto, result) {    
        sql.query("INSERT INTO produto set ?", newProduto, function (err, res) {
                
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
Produto.getProdutoById = function (produtoId, result) {
        sql.query("Select * from produto where idproduto = ? ", produtoId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Produto.getAllProduto = function (result) {
        sql.query("Select * from produto", function (err, res) {

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
Produto.updateById = function(id, produto, result){
  sql.query("UPDATE produto SET titulo = ?, descricao = ?, preco = ?, qtdP = ?, qtdM = ?, qtdG = ?, categoria = ? WHERE idproduto = ?", 
                [produto.titulo, produto.descricao, produto.preco, produto.qtdP, produto.qtdM, produto.qtdG, produto.categoria, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

Produto.remove = function(id, result){
     sql.query("DELETE FROM produto WHERE idproduto = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Produto;