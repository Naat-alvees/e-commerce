'user strict';
var sql = require('./db.js');

//Task object constructor
var Pedido = function(pedido){
    this.idpedido = pedido.idpedido;
    this.idProduto = pedido.idProduto;
    this.idCliente = pedido.idCliente;
    this.formaPagamento = pedido.formaPagamento;
    this.numeroCartao = pedido.numeroCartao;
    this.nomeCartao = pedido.nomeCartao;
    this.vencimento = pedido.vencimento;
    this.codSeguranca = pedido.codSeguranca;
    this.tamanho = pedido.tamanho;
    this.quantidade = pedido.quantidade;
    this.precoFinal = pedido.precoFinal;
};

Pedido.addProdutoSacola = function (newPedido, result) {   
    sql.query("SELECT MAX(idpedido) as maximoID FROM pedido",function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            //console.log(res[0].maximoID)
            newPedido.idpedido = Number(res[0].maximoID);
            console.log(newPedido)
            if(newPedido.idpedido == null){
                console.log("entrou aqui")
                newPedido.idpedido = 0;
            }
            console.log(newPedido.idpedido)
            sql.query("INSERT INTO pedido set ?, statusPedido = 0", newPedido, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    // console.log(res.insertId);
                    result(null, res.insertId);
                }
            });   
           
        }
    }); 

            
};


Pedido.removerProdutoSacola = function(pedido, result){
    sql.query("DELETE FROM pedido WHERE idcliente = ? AND statusPedido = 0 AND idProduto = ?", [pedido.idCliente, pedido.idProduto], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

Pedido.getProdutosSacola = function (idCliente, result) {
    sql.query("SELECT ped.quantidade as quantidadeEscolhida, ped.idproduto, titulo, descricao, preco, ped.tamanho as tamanhoEscolhido, qtdP, qtdM, qtdG, CONVERT(foto USING utf8) as data FROM pedido ped INNER JOIN produto prod ON ped.idproduto=prod.idproduto INNER JOIN fotos ft ON ft.idproduto = prod.idproduto WHERE idcliente = ? AND statusPedido = 0 and ft.fotoPrincipal = 1", idCliente, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
    
        }
    });   
};

Pedido.atualizaQuantidade = function(pedido, result){
    sql.query("UPDATE pedido SET quantidade = ? WHERE idcliente = ? AND idproduto= ? AND statusPedido = 0 AND tamanho= ?", [pedido.quantidade, pedido.idCliente, pedido.idProduto, pedido.tamanho] , function (err, res) {
        if(err) {
            console.log("error: ", err);
                result(null, err);
        }
        else{   
            result(null, res);
        }
    }); 
}

Pedido.finalizarPedido = function(pedido, result){
    if(pedido.formaPagamento == "B"){
        sql.query("UPDATE pedido INNER JOIN produto ON pedido.idproduto=produto.idproduto SET idpedido=(idpedido+1), pedido.statusPedido = 1, pedido.formaPagamento = 'B', pedido.precoFinal = produto.preco WHERE idcliente = ? AND statusPedido = 0", [pedido.idCliente] , function (err, res) {
            if(err) {
                console.log("error: ", err);
                    result(null, err);
            }
            else{   
                result(null, res);
            }
        }); 
    } else {
        sql.query("UPDATE pedido INNER JOIN produto ON pedido.idproduto=produto.idproduto SET idpedido=(idpedido+1), pedido.statusPedido = 1,formaPagamento = 'C', numeroCartao = ?, nomeCartao = ?, vencimento = ?, codSeguranca = ?, pedido.precoFinal = produto.preco WHERE idcliente = ? AND statusPedido = 0;", [pedido.numeroCartao, pedido.nomeCartao, pedido.vencimento, codSeguranca, idCliente] , function (err, res) {
            if(err) {
                console.log("error: ", err);
                    result(null, err);
            }
            else{   
                result(null, res);
            }
        }); 
    }   
};

Pedido.listaPedidosFinalizados = function (idCliente, result) {
    sql.query("SELECT idpedido, titulo, descricao, precoFinal, tamanho, quantidade, CONVERT(foto USING utf8) as data FROM pedido ped INNER JOIN produto prod ON ped.idproduto=prod.idproduto INNER JOIN fotos ft ON ft.idproduto = prod.idproduto WHERE idcliente = ? AND statusPedido = 1", idCliente, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
    
        }
    });   
};
 
module.exports= Pedido;