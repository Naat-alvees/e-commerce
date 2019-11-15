'user strict';
var sql = require('./db.js');

//Task object constructor
var Cliente = function(cliente){
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.telefone = cliente.telefone;
    this.rua = cliente.rua;
    this.numero = cliente.numero;
    this.complemento = cliente.complemento;
    this.bairro = cliente.bairro;
    this.cidade = cliente.cidade;
    this.estado = cliente.estado;
    this.senha = cliente.senha;
    
};
Cliente.createCliente = function (newCliente, result) {    
        sql.query("INSERT INTO cliente set ?", newCliente, function (err, res) {
                
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
Cliente.getClienteById = function (clienteId, result) {
        sql.query("Select * from cliente where idcliente = ? ", clienteId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Cliente.getAllCliente = function (result) {
        sql.query("Select * from cliente", function (err, res) {

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
Cliente.updateById = function(id, cliente, result){
  sql.query("UPDATE cliente SET nome = ?, email = ?, telefone = ?, rua = ?, numero = ?, complemento = ?, bairro = ?, cidade = ?, estado = ?, senha = ? WHERE idcliente = ?", 
                [cliente.nome, cliente.email, cliente.telefone, cliente.rua, cliente.numero, cliente.complemento, cliente.bairro, cliente.cidade, cliente.estado, cliente.senha, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

Cliente.remove = function(id, result){
     sql.query("DELETE FROM cliente WHERE idcliente = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Cliente;