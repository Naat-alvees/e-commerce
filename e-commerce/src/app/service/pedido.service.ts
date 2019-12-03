import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Produto } from 'src/model/produto';
import { Pedido } from 'src/model/pedido';

const httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  const apiUrl = 'http://localhost:3000/pedido';

  @Injectable({
    providedIn: 'root'
  })
  export class ProdutoService {
  
    constructor(private http: HttpClient) { }
  
    getProdutosSacola (idCliente): Observable<Produto[]> {
        let params = new HttpParams().set("idCliente",idCliente);

        return this.http.get<Produto[]>(apiUrl, {headers: new HttpHeaders({'Content-Type': 'application/json'}), params: params})
        .pipe(
            catchError(this.handleError('getProdutos', []))
          );
            
    }
  
    addProdutoSacola(pedido): Observable<Pedido> {
        return this.http.post<Pedido>(apiUrl, pedido, httpOptions).pipe(
          catchError(this.handleError<Pedido>('addProdutoSacola'))
        );    
    }
  
    removeProdutoSacola (pedido): Observable<Pedido> {
        return this.http.delete<Pedido>(apiUrl, httpOptions).pipe(
            catchError(this.handleError<Pedido>('deleteProdutoSacola'))
          );
    }
  
    // idcliente, formaPagamento, quantidade
    finalizarPedido(pedido): Observable<Pedido> {
        return this.http.put(apiUrl, pedido, httpOptions).pipe(
            catchError(this.handleError<any>('finalizaPedido'))
        );
    }
  
    listarPedidoFinalizado (idCliente): Observable<Pedido> {
        const url = `${apiUrl}/${idCliente}`;
        return this.http.get<Pedido>(url).pipe(
            catchError(this.handleError<Pedido>('listaPedido'))
        );
      
    }
  
    
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        console.error(error);
  
        return of(result as T);
      };
    }
  }